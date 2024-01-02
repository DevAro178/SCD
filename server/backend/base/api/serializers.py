# from base.models import Room,Topic,User,Message
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer,SerializerMethodField
from base.models import Bus,Ticket,Booking
from rest_framework import serializers



class UserProfileSerializer(ModelSerializer):
    class Meta:
        model=User
        fields='__all__'
        
class BusSerializer(ModelSerializer):
    class Meta:
        model=Bus
        fields='__all__'
        
class BookingSerializer(ModelSerializer):
    class Meta:
        model=Booking
        fields='__all__'
        
class TicketSerializer(ModelSerializer):
    class Meta:
        model=Ticket
        fields='__all__'
        
        
        
# class UserUpdateProfileSerializer(ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['avatar', 'name', 'username', 'email', 'bio']

#     def validate_avatar(self, value):
#         if self.instance and not value:
#             return self.instance.avatar
#         return value
        
        
# class CreateUserProfileSerializer(serializers.ModelSerializer):
#     password = serializers.CharField(write_only=True)
#     class Meta:
#         model = User
#         fields='__all__'
#     def create(self, validated_data):
#         password = validated_data.pop('password')
#         user = User(**validated_data)
#         user.set_password(password)
#         user.save()
#         return user


# class RoomUserSerializer(ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id','name', 'username','email','avatar')
#         # fields='__all__'
        
        
# class TopicSerializer(ModelSerializer):
#     room_count = SerializerMethodField()

#     class Meta:
#         model = Topic
#         fields = ('id', 'name', 'room_count',)  # Add any other fields you need from Topic.

#     def get_room_count(self, obj):
#         return Room.objects.filter(topic_id=obj.id).count()

        
# class RoomSerializerWithParticipants(ModelSerializer):
#     participants = RoomUserSerializer(many=True, read_only=True)
#     host = RoomUserSerializer(many=False, read_only=True)
#     topic = TopicSerializer(many=False, read_only=True)
#     class Meta:
#         model=Room
#         fields='__all__'

        


# class RoomSerializer(ModelSerializer):
#     host = RoomUserSerializer(many=False, read_only=True)
#     topic = TopicSerializer(many=False, read_only=True)
    
#     class Meta:
#         model=Room
#         fields='__all__'
        
        
# class RoomCreateSerializer(ModelSerializer):
#     # host = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
#     # topic = serializers.CharField()

#     class Meta:
#         model = Room
#         fields = '__all__'

                
        
# class MessageSerializer(ModelSerializer):
#     user = RoomUserSerializer(many=False, read_only=True)
#     room = TopicSerializer(many=False, read_only=True)
#     class Meta:
#         model=Message
#         fields='__all__'
        
        
# class CreateMessageSerializer(ModelSerializer):
#     class Meta:
#         model=Message
#         fields='__all__'