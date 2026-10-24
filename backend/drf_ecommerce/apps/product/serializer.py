from .models import Category, Product, ProductVarient
from rest_framework import serializers


class Categoryserializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'created_at', 'updated_at']

        def validate_name(self, value):
            if len(value) < 3:
                raise serializers.ValidationError("Name field must be grater that 3 .")
            return value



class Productserializer(serializers.ModelSerializer):
    read_only_fields = ['selling_price']
    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'description', 'marked_price', 'discounted_percentage', 'selling_price', 'image', 'created_at', 'updated_at']


        def validate_name(self, value):
            if not value:
                raise serializers.ValidationError("Name field cannot be empty.")
            return value
        
        def validate_marked_price(self, value):
            if value <= 0:
                raise serializers.ValidationError("Marked price must be greater than zero.")
            return value
        
        def validate_discounted_percentage(self, value):
            if value < 0 or value > 100:
                raise serializers.ValidationError("Discounted percentage must be between 0 and 100.")
            return value
        
        def validate_selling_price(self, value):
            if value <= 0:
                raise serializers.ValidationError("Selling price must be greater than zero.")
            return value

class ProductVarientserializer(serializers.ModelSerializer):
    read_only_fields = ['selling_price']
    class Meta:
        model = ProductVarient
        fields = ['id', 'product', 'name', 'marked_price', 'discounted_percentage', 'selling_price', 'image', 'created_at', 'updated_at']

        def validate_name(self, value):
            if not value:
                raise serializers.ValidationError("Name field cannot be empty.")
            return value
        
        def validate_marked_price(self, value):
            if value <= 0:
                raise serializers.ValidationError("Marked price must be greater than zero.")
            return value
        
        def validate_discounted_percentage(self, value):
            if value < 0 or value > 100:
                raise serializers.ValidationError("Discounted percentage must be between 0 and 100.")
            return value
        
        def validate_selling_price(self, value):
            if value <= 0:
                raise serializers.ValidationError("Selling price must be greater than zero.")
            return value
    
