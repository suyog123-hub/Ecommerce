from django.contrib import admin

# Register your models here.
from .models import Category, Product , ProductVarient

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'created_at', 'updated_at']
    search_fields = ['name']
    list_filter = ['created_at', 'updated_at']
class ProductVarientAdmin(admin.TabularInline):
    model = ProductVarient
    extra = 1
    readonly_fields = ['selling_price']
    fields = ['name', 'marked_price', 'discounted_percentage', 'selling_price', 'image']

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'category', 'name', 'marked_price', 'discounted_percentage', 'selling_price', 'created_at', 'updated_at']
    search_fields = ['name']
    list_filter = ['category', 'created_at', 'updated_at']
    readonly_fields = ['selling_price']
    inlines = [ProductVarientAdmin]
