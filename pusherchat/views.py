from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from pusher import Pusher
from decouple import config 

# Create your views here.
# app_id = "530013"
# key = "5ff0d24bb6ed57478727"
# secret = "7b0645440a4833ccac34"
# cluster = "ap2"

pusher = Pusher(app_id=u'530013', key=u'5ff0d24bb6ed57478727',secret=u'7b0645440a4833ccac34')

# pusher_client = pusher.Pusher(
#   app_id='530013',
#   key='5ff0d24bb6ed57478727',
#   secret='7b0645440a4833ccac34',
#   cluster='ap2',
#   ssl=True
# )

# pusher_client.trigger('my-channel', 'my-event', {'message': 'hello world'})

@login_required(login_url='/admin/login/')
def chat(request):
    return render(request,"chat.html");
