from django.db import models
from django.contrib.auth.models import User

# from django.contrib.auth.models import AbstractUser
# class User(AbstractUser):
#     name=models.CharField(max_length=200,null=True)
#     email=models.EmailField(unique=True)
#     bio=models.TextField(null=True)
#     avatar=models.ImageField(null=True,default="avatar.svg")
#     USERNAME_FIELD='email'
#     REQUIRED_FIELDS=[]


class Bus(models.Model):
    busNumber=models.CharField(max_length=10)
    departureCity=models.CharField(max_length=50)
    arrivalCity=models.CharField(max_length=50)
    departureTime=models.DateTimeField()
    arrivalTime=models.DateTimeField()
    avaialableSeats=models.IntegerField()


class Booking(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    bus_id=models.ForeignKey(Bus,on_delete=models.CASCADE)
    bookingDate=models.DateTimeField()
    status=models.CharField(max_length=20)
    

class Ticket(models.Model):
    booking_id=models.ForeignKey(Booking,on_delete=models.CASCADE)
    seatNumber=models.IntegerField()


# # Old 

# # Create your models here.
# class Topic(models.Model):
#     name=models.CharField(max_length=200)
    
#     def __str__(self):
#         return self.name

# class Room(models.Model):
#     host = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
#     topic = models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)
#     name = models.CharField(max_length=200)
#     description = models.TextField(null=True, blank=True)
#     participants = models.ManyToManyField(User, related_name='participants', blank=True)
#     updated = models.DateTimeField(auto_now=True)
#     created = models.DateTimeField(auto_now_add=True)
    
#     class Meta:
#         ordering = ['-updated', '-created']
#         unique_together = ['name', 'topic']
        
#     def __str__(self):
#         return self.name
    
    
# class Message(models.Model):
#     user=models.ForeignKey(User, on_delete=models.CASCADE)
#     room=models.ForeignKey(Room, on_delete=models.CASCADE)
#     body=models.TextField()
#     updated=models.DateTimeField(auto_now=True)
#     created=models.DateTimeField(auto_now_add=True)
    
#     class Meta:
#         ordering=['-created','-updated']
    
#     def __str__(self):
#         return self.body[0:50]