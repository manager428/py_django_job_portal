from django.db import models

# Create your models here.
class Job(models.Model):
    job_title = models.CharField(max_length=120, blank=True, null=True)
    job_company = models.CharField(max_length=120, blank=True, null=True)
    job_city = models.CharField(max_length=120, blank=True, null=True)
    job_email1 = models.CharField(max_length=60, blank=True, null=True)
    job_email2 = models.CharField(max_length=60, blank=True, null=True)
    job_type = models.CharField(max_length=120, blank=True, null=True)
    job_external_site = models.CharField(max_length=120, blank=True, null=True)
    job_description = models.TextField(blank=True)
    acc_company = models.CharField(max_length=60, blank=True, null=True)
    acc_company_size = models.CharField(max_length=60, blank=True, null=True)
    acc_name = models.CharField(max_length=60, blank=True, null=True)
    acc_phone = models.CharField(max_length=60, blank=True, null=True)
    acc_hear = models.CharField(max_length=60, blank=True, null=True)
    billing_type = models.CharField(max_length=60, blank=True, null=True)
    application_type = models.CharField(max_length=60, blank=True, null=True)
    stripe_session_id = models.CharField(max_length=200, blank=True, null=True)
    created_at = models.DateTimeField(auto_now=True, blank=True, null=True)
    