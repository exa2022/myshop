from django.shortcuts import render
from django.http import HttpResponse
from .models import profile
from django.contrib import messages

from .forms import ProfileForm


# from .forms import ProfileForm


# Create your views here.

def index(request):
    user = "ekansh"
    products_numb = 4
    # products = Product.objects.all().order_by('id')[:4]
    return render(request, "products/home.html", {
        "name": user,
        "product_numb": products_numb,
        # "products": products,
    })


def signup(request):


    form = ProfileForm()

    if request.method == "GET":
        render(request, "products/profile.html", {
            "form": form,
        })

    # else:
    #     print("This is a post")  
    #     full_name = request.POST["fullName"]
    #     email = request.POST["email"]
    #     password = request.POST["password"]
    #     info = profile(full_name=full_name, email=email, password=password)
    #     info.save() 
    else:
        print("This is post")
        form = ProfileForm(request.POST)

        if form.is_valid():
            information = profile(
                email = form.cleaned_data["email"],
                full_name = form.cleaned_data["full_name"],
                password = form.cleaned_data["password"]
            )
            information.save()
            messages.success(request, "Your feedback was submitted successfully.")
        else:
            print("The form is not validated.")

        return render(request, "products/SignUp.html", {
            "form": form,
            })
        # return render(request, "products/SignUp.html")
        
            
        
   


# def product(request, product):

#     if product == "suits" or product == "dresses" or product == "shoes" or product == "shirts":
#         return HttpResponse(f"Here is the list of all our {product}:")
#     else:
#         return HttpResponse("The page you are looking for doesn't exist")
    

# def product_page(request, product_brand, product_slug):

#     product = Product.objects.get(slug = product_slug)
#     form = FeedbackForm()
#     reviews = Feedback.objects.filter(product = product)
    

#     if request.method == "GET":   
#         return render(request, "products/product.html", {
#             "product": product, 
#             "form": form,
#             "reviews": reviews,
#         })
#     else:

#         form = FeedbackForm(request.POST)
#         if form.is_valid():
#             feedback = Feedback(
#                 name = form.cleaned_data["name"],
#                 rating = form.cleaned_data["rating"],
#                 product = product,
#                 text = form.cleaned_data["text"]
#             )
#             feedback.save()
#             messages.success(request, "Your feedback was submitted successfully.")
            
#         else:
#             print("The form is not validated.")
#         return render(request, "products/product.html", {
#             "product": product,
#             "form": form,
#             "reviews": reviews,
#         })
    

def profile(request):

    return render(request, "products/profile.html")

def shop(request):
    return render(request, "products/shop.html")

def contact(request):
    return render(request, "products/contact.html")
        
    
def suits(request):
    return render(request, "products/suits.html")