# Generated by Django 3.0.4 on 2020-04-06 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0002_auto_20200406_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='files',
            name='size',
            field=models.FloatField(default=0),
        ),
    ]