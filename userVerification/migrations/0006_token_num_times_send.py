# Generated by Django 3.0.4 on 2020-06-11 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userVerification', '0005_auto_20200611_1803'),
    ]

    operations = [
        migrations.AddField(
            model_name='token',
            name='num_times_send',
            field=models.PositiveIntegerField(default=0),
        ),
    ]