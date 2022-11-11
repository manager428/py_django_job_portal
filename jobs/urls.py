from django.urls import path
from django.conf.urls import url

from django.contrib.auth.views import PasswordResetView 
from django.contrib.auth.views import PasswordResetDoneView
from django.contrib.auth.views import PasswordResetConfirmView
from django.contrib.auth.views import PasswordResetCompleteView
from django.contrib.auth.views import PasswordChangeView

from .views import *

urlpatterns = [
	url(r'^$', index, name='index'),
	url(r'^post-job', post_job, name='post-job'),
	url(r'^job-list/$', JobList.as_view(), name='job-list'),
	url(r'^job-detail/(?P<pk>\d+)/$', JobDetail.as_view(), name='job-detail'),
	url(r'^charge', stripe3_checkout, name='charge'),
	url(r'^ajax-save-job', ajax_save_job, name='ajax-save-job'),
	url(r'^404', error_page, name='404'),
]