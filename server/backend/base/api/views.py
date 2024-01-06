from django.forms import ValidationError
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from base.models import Bus,Booking
# from .serializers import RoomSerializer,RoomCreateSerializer,UserUpdateProfileSerializer,CreateUserProfileSerializer,TopicSerializer,RoomSerializerWithParticipants,MessageSerializer,UserProfileSerializer,CreateMessageSerializer
from .serializers import BusSerializer,BookingSerializer,UserProfileSerializer,CreateUserProfileSerializer,CreateBookingSerializer
from rest_framework.exceptions import PermissionDenied
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.db.models import Q
from django.shortcuts import get_object_or_404
from django.db import IntegrityError

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        # token['email'] = user.email
        # ...

        return token
    
    def validate(self, attrs):
            data = super().validate(attrs)
    
            user = self.user
            data["user_id"] = user.id
            data["username"] = user.username
            data["email"] = user.email
            data["superuser"]=user.is_superuser
            # ... add other user information as needed
    
            return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer





@api_view(['GET'])
def home(request):
    routes=[
        'GET /GetUserProfile/int:pk',
        'GET /UpdateUserProfile/int:pk',
        'POST /CreateUserProfilea',
    ]
    return Response(routes)


@api_view(['GET'])
def TokenAuth(request):
    token = request.headers.get('Authorization', None)
    print("Received token:", token)
    jwt_authenticator = JWTAuthentication()
    authentication_result = jwt_authenticator.authenticate(request)

    if authentication_result is not None:
        user, token = authentication_result
        token_claims = token.payload
        print("Decoded token claims:", token_claims)
        return Response({"message": "Done"}, status=201)
    else:
        print("No valid token found in the header")
        return Response({"error": "No valid token found in the header."}, status=401)


# User Modal EndPoints
@api_view(['GET'])
def GetUserProfile(request,pk):
    user = User.objects.get(id=pk)
    serializer = UserProfileSerializer(user, many=False)
    return Response(serializer.data)


# @api_view(['POST'])
# # @permission_classes([IsAuthenticated])
# def CreateUserProfile(request):
#     print(request.data)
#     serializer = CreateUserProfileSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=200)

#     return Response(serializer.errors, status=400)
@api_view(['POST'])
def CreateUserProfile(request):
    serializer = CreateUserProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)

    return Response(serializer.errors, status=400)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def UpdateUserProfile(request,pk):
    user = User.objects.get(id=pk)
    if user != request.user:
        raise PermissionDenied("You can't edit this profile.")
    else:
        serializer = UserProfileSerializer(instance=user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)

    return Response(serializer.errors, status=400)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetBus(request):
    bus = Bus.objects.all()
    serializer = BusSerializer(bus, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetBusSingle(request,pk):
    bus = get_object_or_404(Bus, id=pk)
    serializer = BusSerializer(bus, many=False)
    return Response(serializer.data)




@api_view(['POST'])
@permission_classes([IsAuthenticated])
def AddBus(request):
    serializer = BusSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)

    return Response(serializer.errors, status=400)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def UpdateBus(request, pk):
    try:
        bus = Bus.objects.get(id=pk)
    except Bus.DoesNotExist:
        return Response({'error': 'Bus not found'}, status=404)

    serializer = BusSerializer(bus, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)

    return Response(serializer.errors, status=400)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def DeleteBus(request, pk):
    try:
        bus = Bus.objects.get(id=pk)
    except Bus.DoesNotExist:
        return Response({'error': 'Bus not found'}, status=404)

    bus.delete()
    return Response({'message': 'Bus deleted successfully'}, status=204)


@api_view(['GET'])
@permission_classes([IsAuthenticated])    
def GetBookings(request):
    
    bookings = Booking.objects.filter(user=request.user)
    serializer = BookingSerializer(bookings, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])    
def StoreBooking(request,pk):
    data = request.data.copy()
    data['user'] = request.user.id
    data['bus_id']=pk
    seat_numbers = data['seatNumber'].split(',')

    # Check if any of the seat numbers are already booked
    existing_bookings = Booking.objects.filter(bus_id=pk)
    for booking in existing_bookings:
        booked_seats = booking.seatNumber.split(',')
        for seat_no in seat_numbers:
            if seat_no in booked_seats:
                return Response(f'Seat number {seat_no} is already booked for this bus', status=403)
            

    # If none of the seat numbers are booked, create the new booking
    serializer = CreateBookingSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=200)
    
    return Response(serializer.errors, status=400)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def DeleteBooking(request, pk):
    try:
        booking = Booking.objects.get(id=pk)
    except Booking.DoesNotExist:
        return Response({'error': 'Booking not found'}, status=404)

    booking.delete()
    return Response({'message': 'Booking deleted successfully'}, status=204)



# # CRUD FOR ROOMS CLASS
# @api_view(['GET'])
# def GetRooms(request):
#     rooms = Room.objects.all()

#     serializer = RoomSerializer(rooms, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def GetRoomsByUserID(request,pk):
#     rooms = Room.objects.filter(Q(host__id=pk))

#     serializer = RoomSerializer(rooms, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def GetRoomsByTopicID(request,pk):
#     rooms = Room.objects.filter(Q(topic__id=pk))

#     serializer = RoomSerializer(rooms, many=True)
#     return Response(serializer.data)


# @api_view(['GET'])
# def GetRoomsByTitleName(request, pk):
#     rooms = Room.objects.filter(Q(name__icontains=pk))
#     serializer = RoomSerializer(rooms, many=True)
#     return Response(serializer.data)




# @api_view(['GET'])
# def GetRoom(request, pk=None):
#     rooms = Room.objects.get(id=pk)
#     serializer = RoomSerializerWithParticipants(rooms, many=False)
#     return Response(serializer.data)

# # RoomCreateSerializer



# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def CreateRoom(request):
#     data = request.data.copy()

#     # Handle Topic creation or retrieval based on the topic name
#     topic_name = data.get('topic', '')
#     topic, created = Topic.objects.get_or_create(name=topic_name)
#     data['topic'] = topic.id  # Assigning the ID of the topic

#     serializer = RoomSerializer(data=data)

#     if serializer.is_valid():
#         try:
#             room = serializer.save(host=request.user, topic=topic)  # Directly save with host and topic
#             return Response("Room created successfully.", status=201)
#         except IntegrityError:
#             # Handle the unique constraint violation
#             return Response("A room with this name and topic already exists.", status=400)
    
#     return Response(serializer.errors, status=400)

   



# # @api_view(['POST'])
# # @permission_classes([IsAuthenticated])
# # def CreateRoom(request):
    
# #     data = request.data.copy()
# #     data['host'] = request.user.id
# #     serializer = RoomSerializer(data=data)

# #     if serializer.is_valid():
# #         serializer.save()
# #         return Response(serializer.data, status=201)
    
# #     return Response(serializer.errors, status=400)

# @api_view(['PUT'])
# @permission_classes([IsAuthenticated])
# def UpdateRoom(request, pk):
#     try:
#         room = Room.objects.get(id=pk)
#     except Room.DoesNotExist:
#         return Response({'error': 'Room not found.'}, status=404)

#     if room.host != request.user:
#         raise PermissionDenied("You are not the host of this room.")

#     serializer = RoomSerializer(instance=room, data=request.data)

#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=200)

#     return Response(serializer.errors, status=400)


# @api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
# def DeleteRoom(request, pk):
#     try:
#         room = Room.objects.get(id=pk)
#     except Room.DoesNotExist:
#         return Response({'error': 'Room not found.'}, status=404)

#     if room.host != request.user:
#         raise PermissionDenied("You are not the host of this room.")

#     room.delete()
    
#     return Response({'message': 'Room deleted successfully'}, status=204)



# #CRUD FOR TOPICS
# @api_view(['GET'])
# def Topics(request, pk=None):
#     if pk is None:
#         topics = Topic.objects.all()
#     else:
#         topics = Topic.objects.filter(id=pk)
#     serializer = TopicSerializer(topics, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def SearchTopics(request, pk):
#     topics = Topic.objects.filter(Q(name__icontains=pk))
#     serializer = TopicSerializer(topics, many=True)
#     return Response(serializer.data)


# @api_view(['POST'])
# def CreateTopic(request):
    
#     data = request.data.copy()
#     serializer = TopicSerializer(data=data)

#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=201)
    
#     return Response(serializer.errors, status=400)




# @api_view(['PUT'])
# def UpdateTopic(request, pk):
#     try:
#         topic = Topic.objects.get(id=pk)
#     except Topic.DoesNotExist:
#         return Response({'error': 'Topic not found.'}, status=404)

#     serializer = TopicSerializer(instance=topic, data=request.data)

#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data, status=200)

#     return Response(serializer.errors, status=400)


# # Messages
# @api_view(['GET'])
# def GetMessages(request):
#     rooms = Message.objects.all().order_by('-created')[:5]
#     serializer = MessageSerializer(rooms, many=True)
#     return Response(serializer.data)

# # Messages
# @api_view(['GET'])
# def GetSMessages(request, pk):
#     messages = Message.objects.filter(Q(room__name__icontains=pk)).order_by('-created')[:5]
#     serializer = MessageSerializer(messages, many=True)
#     return Response(serializer.data)


# @api_view(['GET'])
# def GetMessageByID(request, pk):
#     messages = Message.objects.get(id=pk)
#     serializer = MessageSerializer(messages, many=False)
#     return Response(serializer.data)

# @api_view(['GET'])
# def GetMessagesByRoomID(request, pk):
#     messages = Message.objects.filter(Q(room__id=pk))
#     serializer = MessageSerializer(messages, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def GetMessagesByUserID(request, pk):
#     messages = Message.objects.filter(Q(user__id=pk)).order_by('-created')[:25]
#     serializer = MessageSerializer(messages, many=True)
#     return Response(serializer.data)

# @api_view(['GET'])
# def GetMessagesByTopicID(request, pk):
#     messages = Message.objects.filter(Q(room__topic=pk)).order_by('-created')[:5]
#     serializer = MessageSerializer(messages, many=True)
#     return Response(serializer.data)





# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def CreateMessage(request):
#     data = request.data.copy()
#     data['user'] = request.user.id
#     serializer = CreateMessageSerializer(data=data)

#     if serializer.is_valid():
#         serializer.save()

#         # Add the user to the room's participants
#         room_instance = serializer.instance.room
#         room_instance.participants.add(request.user)
#         room_instance.save()

#         return Response(serializer.data, status=201)
    
#     return Response(serializer.errors, status=400)



# @api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
# def DeleteMessage(request,pk):
#     message=Message.objects.get(id=pk)    
#     message.delete()
#     return Response("Message Deleted", status=201)

