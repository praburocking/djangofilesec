# Generated by Django 3.0.4 on 2020-04-04 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('files', '0005_files_salt'),
    ]

    operations = [
        migrations.AlterField(
            model_name='files',
            name='salt',
            field=models.BinaryField(default=b'\xfc\xcb5\x8f\xa8\x93\xbd\x82\xf9\x1f?\x9e\xe9\x0e[\x8f', max_length=16),
        ),
    ]
