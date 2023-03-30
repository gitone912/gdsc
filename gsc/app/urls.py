from django.urls import path
from .views import auth_signin, auth_signup, auth_reset_password, auth_reset_password_verify, auth_new_password_view, signout
from .views import *
urlpatterns = [
    path('signin/', auth_signin, name='signin'),
    path('signup/', auth_signup, name='signup'),
    path('reset-password/', auth_reset_password, name='reset-password'),
    path('reset-password-verify/', auth_reset_password_verify, name='reset-password-verify'),
    path('new-password/', auth_new_password_view, name='new-password'),
    path('signout/', signout, name='signout'),
    path('', home, name='home'),
    path('earthquake',natural_disasters_map,name='earthquake'),
    path('user_details',user_det,name='user_details')
]
