var pusher = new pusher('5ff0d24bb6ed57478727');
var my_channel = pusher.subscribe('a_channel');
my_channel.bind("an_event", function (data){
    var new_message = `<li class= " left clearfix"><span class="chat-img pull-left">
                        <img src="http:///placehold.it/50/55C1E7/fff&text= ` +data.name + `"alt="User Avatar" class+"img-circle">
                        </span> 
                        <div class = "chat-body clearfix">
                        <div class="header">
                        <strong class="primary-font">` +data.name +`</strong> <small class="pull-right text-muted">
                        </div>
                        <p>`
                            +data.message+`
                            </p>
                            </div>
                            </li>`;
$('#chat').append(new_message);
        
});

$(document).ready(function(){
    $("#btn-chat").click(function(){
        var message = $('#btn-input').val();
        $.post({
            url:'/ajax/chat',
            data: {
                'message': message
            },
            success: function (data){
                $('#btn-input').val('');
            }
        });
    })
})