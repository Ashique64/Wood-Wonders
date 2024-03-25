# Generated by Django 5.0.1 on 2024-03-06 09:04

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0014_alter_users_phone_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='phone_number',
            field=models.CharField(default='0000000000', max_length=10, validators=[django.core.validators.RegexValidator('^\\d{10}$', 'Phone number must be exactly 10 digits long.')]),
        ),
    ]
