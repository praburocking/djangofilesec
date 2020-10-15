# Generated by Django 3.0.4 on 2020-10-14 21:19

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django_s3_storage.storage
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Files',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('file', models.FileField(storage=django_s3_storage.storage.S3Storage(aws_s3_bucket_name='filesec'), upload_to='')),
                ('name', models.TextField(default='noname')),
                ('private_key', models.TextField(default='nokey')),
                ('salt', models.BinaryField(default=b'\xc1\x10\xcd\x13\xc3\xf2\x8d=\xb9\xd7\x1e0$\x81\xdel', max_length=60)),
                ('format', models.TextField(default='noformat')),
                ('size', models.FloatField(default=0)),
                ('description', models.TextField(null=True)),
                ('created_time', models.DateTimeField(auto_now_add=True)),
                ('modified_time', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Files', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='DownloadHistory',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('time', models.DateTimeField(auto_now_add=True)),
                ('ip', models.TextField()),
                ('download_success', models.BooleanField(default=False)),
                ('file', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='downloadHistory', to='files.Files')),
            ],
            options={
                'permissions': (('view_current_downloadhistory', 'view current downloadhistory'),),
            },
        ),
    ]
