# Generated by Django 4.2.4 on 2023-08-19 17:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_user_avatar'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='room',
            unique_together={('name', 'topic')},
        ),
    ]
