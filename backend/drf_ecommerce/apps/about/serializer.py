from .models import About
from rest_framework import serializers
from _validator.image import validate_image

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ['id', 'name', 'description', 'image','created_at','created_by', 'updated_at','updated_by']
        read_only_fields = ['id', 'created_at', 'created_by', 'updated_at', 'updated_by']

    def validate_name(self, value):
            if not value:
                raise serializers.ValidationError("Name field cannot be empty.")
            return value
        
    def validate_description(self, value):
            if not value:
                raise serializers.ValidationError("Description field cannot be empty.")
            return value
        
    def validate_image(self, value):
            validate_image(value)
            return value