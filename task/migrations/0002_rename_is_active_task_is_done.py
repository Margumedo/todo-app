# Generated by Django 4.2.11 on 2024-03-31 23:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='is_active',
            new_name='is_done',
        ),
    ]