from django.contrib import admin

# Register your models here.
# from .models import Room
# from .models import Topic
# from .models import Message
# from .models import User
from .models import Bus,Booking

admin.site.register(Bus)
admin.site.register(Booking)