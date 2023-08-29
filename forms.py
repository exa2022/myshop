from django import forms 


class ProfileForm(forms.Form):
    email = forms.CharField(required=True, max_length = 15, error_messages={"required": "You forgot to add your email", "max_length": "Please make your email shorter."})
    full_name = forms.CharField(required = True, max_length = 20)
    password = forms.CharField(required = True)

