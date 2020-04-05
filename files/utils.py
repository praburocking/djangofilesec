from cryptography.fernet import Fernet
from django.core.files import File
from django.core.files.base import ContentFile
import random
import base64
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
import string


CONSTANTS={
"MAX_FILE_SIZE":15000000,
"RANDOM_KEY_MAX_LEN":16
}


def get_key():
    key = Fernet.generate_key()
    return key


def farnet(key,salt):
    salt = salt
    backend = default_backend()
    kdf = PBKDF2HMAC(
        algorithm=hashes.SHA256(),
        length=32,
        salt=salt,
        iterations=100000,
        backend=backend
    )
    key = base64.urlsafe_b64encode(kdf.derive(key.encode()))
    return Fernet(key)


def encrypt(file,key,salt):
    f=farnet(key,salt)
    file_name=file.name
    file=file.read()
    file=f.encrypt(file)
    file=ContentFile(file)
    file.name=file_name
    return File(file)


def decrypt(file,key,salt,filename):
    f=farnet(key,salt)
    file=file.read()
    file=f.decrypt(file)
    file=ContentFile(file)
    file.name=filename
    return file


def random_key_gen(N):
    return ''.join(random.SystemRandom().choice(string.ascii_letters + string.digits+string.punctuation) for _ in range(N))


def key_fuser(system_key,user_key):
    return system_key+user_key



