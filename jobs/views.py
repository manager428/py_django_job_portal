from django.shortcuts import render
from django.http import JsonResponse
from django_countries import countries
from django.views.generic import ListView, TemplateView
from .models import Job
import stripe
from django.conf import settings
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse, reverse_lazy

stripe_keys = {
  'secret_key': "sk_test_51GrzfqGsmMRh23L5nd9ikUG7H4sx7BxDe2AHVxBqAe9aWf5Jxug1xZVHOj6J96jjzlsA8QMQZ55Eph9qi8f6Ox3E00bJHYaEFm",
  'publishable_key': "pk_test_51GrzfqGsmMRh23L51eWVkrAqE93wa3IH4NM1QBWiulwhchEXA9uwh4lAdrNHaoyFJJHw80pI9FLjyUM3SpC52rPd00G1pC17uB"
}

# Create your views here.
def index(request):
    return render(request, 'index.html', {
        "countries":list(countries)}
        )


def post_job(request):
    session_id = request.GET.get('session_id', '')
    if session_id != "":
        try:
            job = Job.objects.get(stripe_session_id=session_id)
            job.delete()
            return render(request, 'post_job.html', { "stripe_pub_key": stripe_keys["publishable_key"], "job": job})
        except Exception as e:
            return HttpResponseRedirect(reverse('post-job'))
        
    else:
        return render(request, 'post_job.html', { "stripe_pub_key": stripe_keys["publishable_key"]})

def error_page(request):
    return render(request, '404.html')

def ajax_save_job(request):
    if request.method == 'POST':
        job_title = request.POST.get('job_title')
        job_company = request.POST.get('job_company')
        job_city = request.POST.get('job_city')
        job_type = request.POST.get('job_type')
        job_email1 = request.POST.get('job_email1')
        job_email2 = request.POST.get('job_email2')
        job_external_site = request.POST.get('job_external_site')
        job_description = request.POST.get('job_description')
        acc_company = request.POST.get('acc_company')
        acc_company_size = request.POST.get('acc_company_size')
        acc_name = request.POST.get('acc_name')
        acc_phone = request.POST.get('acc_phone')
        acc_hear = request.POST.get('acc_hear')
        billing_type = request.POST.get('billing_type')
        application_type = request.POST.get('application_type')

        new_job = Job(
            job_title = job_title,
            job_company = job_company,
            job_city = job_city,
            job_type = job_type,
            job_email1 = job_email1,
            job_email2 = job_email2,
            job_external_site = job_external_site,
            job_description = job_description,
            acc_company = acc_company,
            acc_company_size = acc_company_size,
            acc_name = acc_name,
            acc_phone = acc_phone,
            acc_hear = acc_hear,
            billing_type = billing_type,
            application_type = application_type
        )
        new_job.save();
    
    return JsonResponse({'status_code': '1'})

class JobList(TemplateView):
    model = Job
    template_name = "jobs_list.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        jobs = Job.objects.filter()
        context['jobs'] = jobs
        
        return context

class JobDetail(TemplateView):
    model = Job
    template_name = "job_detail.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        job = Job.objects.get(pk=self.kwargs.get('pk'))
        print(job)
        context['job'] = job
        return context

def stripe_checkout(request):
    try:
        stripe.api_key = stripe_keys['secret_key']
        customer = stripe.Customer.create(
            email=request.POST.get('email'),
            source=request.POST.get('token')
        )
        print(request.POST)
        stripe.Charge.create(
            customer=customer.id,
            amount=10000,
            currency='usd',
            description=request.POST.get('description')
        )
        return JsonResponse({'err_code': '2'})
    except Exception as e:
        print(e)
        return JsonResponse({'err_code': '1'})

def stripe3_checkout(request):
    if request.method == 'POST':
        print(request.POST.get('job_type'))
        job_title = request.POST.get('job_title')
        job_company = request.POST.get('job_company')
        job_city = request.POST.get('job_city')
        job_type = request.POST.get('job_type')
        job_email1 = request.POST.get('job_email1')
        job_email2 = request.POST.get('job_email2')
        job_external_site = request.POST.get('job_external_site')
        job_description = request.POST.get('job_description')
        acc_company = request.POST.get('acc_company')
        acc_company_size = request.POST.get('acc_company_size')
        acc_name = request.POST.get('acc_name')
        acc_phone = request.POST.get('acc_phone')
        acc_hear = request.POST.get('acc_hear')
        billing_type = request.POST.get('billing_type')
        application_type = request.POST.get('application_type')

        
        try:
            domain_url = settings.BASE_URL
            print(domain_url)
            stripe.api_key = stripe_keys['secret_key']
            checkout_session = stripe.checkout.Session.create(
                success_url=domain_url + 'job-list',
                cancel_url=domain_url + 'post-job?session_id={CHECKOUT_SESSION_ID}',
                payment_method_types=['card'],
                mode='payment',
                line_items=[
                    {
                        'name': 'T-shirt',
                        'quantity': 1,
                        'currency': 'usd',
                        'amount': '2000',
                    }
                ]
            )
            new_job = Job(
                job_title = job_title,
                job_company = job_company,
                job_city = job_city,
                job_type = job_type,
                job_email1 = job_email1,
                job_email2 = job_email2,
                job_external_site = job_external_site,
                job_description = job_description,
                acc_company = acc_company,
                acc_company_size = acc_company_size,
                acc_name = acc_name,
                acc_phone = acc_phone,
                acc_hear = acc_hear,
                billing_type = billing_type,
                application_type = application_type,
                stripe_session_id = checkout_session['id']
            )
            new_job.save();
            return JsonResponse({'sessionId': checkout_session['id']})
        except Exception as e:
            print(e)
            return JsonResponse({'error': str(e)})