from django.contrib import admin
from .models import Stripe_customer
from django.contrib.auth.admin import UserAdmin
# Register your models here.

class CustomStripeAdmin(admin.ModelAdmin):
    pass
    # add_form = create_form
    # form = change_form
    # model = User
    # list_display = ('email', 'staff', 'active',)
    # list_filter = ('email', 'staff', 'active',)
    # fieldsets = (
    #     (None, {'fields': ('email', 'password')}),
    #     ('Permissions', {'fields': ('staff', 'active')}),
    # )
    # add_fieldsets = (
    #     (None, {
    #         'classes': ('wide',),
    #         'fields': ('email', 'password1', 'password2', 'staff', 'active')}
    #     ),
    # )
    # search_fields = ('email',)
    # ordering = ('email',)


admin.site.register(Stripe_customer, CustomStripeAdmin)