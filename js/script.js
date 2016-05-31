$(function(){
  $("button#leftsubmit").click(function(){
    var lchat = $("#leftchat").val();
    $("ul#messages").prepend("<li>" + lchat + "</li>")
  })

  $("button#rightsubmit").click(function(){
    var rchat = $("#rightchat").val();
    $("ul#messages").prepend("<li>" + rchat + "</li>")

  })

})
