from django.contrib import admin
from .models import Bus, Ticket, Booking

# Register your models here.
admin.site.register(Bus)
admin.site.register(Ticket)
admin.site.register(Booking)