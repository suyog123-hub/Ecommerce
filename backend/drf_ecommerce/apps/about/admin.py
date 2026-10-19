from django.contrib import admin

# Register your models here.
from .models import About

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('id',  'description','image', 'created_at', 'updated_at')
    search_fields = ('title', 'description')
    list_filter = ('created_at', 'updated_at')

