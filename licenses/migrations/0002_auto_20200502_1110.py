# Generated by Django 3.0.4 on 2020-05-02 11:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('licenses', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='license',
            old_name='remainingSpace',
            new_name='usedSpace',
        ),
    ]