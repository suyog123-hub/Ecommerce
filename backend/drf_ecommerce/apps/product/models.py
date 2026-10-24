from decimal import Decimal, ROUND_HALF_UP
from django.db import models
from _common.basemodel import Base
from _validator.image import validate_image


class Category(Base):
    name = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name


class Product(Base):
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='products', blank=False
    )
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField(null=True, blank=False)
    marked_price = models.DecimalField(max_digits=10, decimal_places=2, blank=False)
    discounted_percentage = models.DecimalField(
        max_digits=5, decimal_places=2, blank=False
    )
    selling_price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False, editable=False
    )
    image = models.FileField(
        upload_to='product_images/', blank=False, validators=[validate_image]
    )

    def save(self, *args, **kwargs):
        self.name = self.name.capitalize()
        if self.marked_price and self.discounted_percentage is not None:
            self.selling_price = (
                self.marked_price * (Decimal(1) - self.discounted_percentage / Decimal(100))
            ).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class ProductVarient(Base):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='varients', blank=False
    )
    name = models.CharField(max_length=100, blank=False)
    marked_price = models.DecimalField(max_digits=10, decimal_places=2, blank=False)
    discounted_percentage = models.DecimalField(
        max_digits=5, decimal_places=2, blank=False, default=0
    )
    selling_price = models.DecimalField(
        max_digits=10, decimal_places=2, blank=False, default=0, editable=False
    )
    image = models.FileField(upload_to='product_varient_images/', blank=False)

    def save(self, *args, **kwargs):
        self.name = self.name.capitalize()
        if self.marked_price and self.discounted_percentage is not None:
            self.selling_price = (
                self.marked_price * (Decimal(1) - self.discounted_percentage / Decimal(100))
            ).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name