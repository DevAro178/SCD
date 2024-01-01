from django.db import models
from django.contrib.auth.models import User

# https://docs.djangoproject.com/en/4.2/intro/tutorial02/   
# class Question(models.Model):
#     question_text = models.CharField(max_length=200)
#     pub_date = models.DateTimeField('date published')

# class Choice(models.Model):
#     question = models.ForeignKey(Question, on_delete=models.CASCADE)
#     choice_text = models.CharField(max_length=200)
#     votes = models.IntegerField(default=0)


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
    
    