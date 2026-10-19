from django.db import models
from _common.basemodel import Base
from _validator.image import validate_image
# Create your models here.
class About(Base):
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField(null=True, blank=False)
    image = models.FileField(upload_to='about_videos/', blank=False, validators=[validate_image])

