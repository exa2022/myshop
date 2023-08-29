from django.urls import path 
from . import views


urlpatterns = [
    path('', views.index, name="home"),
    # path('products/<product>', views.product, name="productcat"),
    # path('products/<product_brand>/<product_slug>',views.product_page, name="product_page"),
    path('profile', views.profile, name="profile"),
    path('shop', views.shop, name="shop" ),
    path('Signup', views.signup, name="signup"),
    path('contact', views.contact, name="contact"),
    path('suits', views.suits, name="all_suits"),
]
