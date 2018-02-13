var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "FreeCodeCamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "test_channel"]

function getURL(type, channel_name){
    return "https://wind-bow.gomix.me/twitch-api/" + type + '/' + channel_name + "?callback=?"
}

function getData(url, channel){
  var status = '', type = "streams", game = '';
  url = getURL(type, channel)
  $.getJSON(url, function(data) {
    if (data.stream === null){
      status = "Offline";
      game = "Offline";
     // $('#offline').append('<a href ="https://go.twitch.tv/' + channel + '" target = "blank">' + channel + '</a>' + "</br>");
    }else{
      status = "Online";
      game = data.stream.game;
     // $('#online').append('<a href ="' + data._links.channel + '">' + channel + '</a>' + "</br>");
    }
    type = "channels";
    url = getURL(type, channel);
    $.getJSON(url, function(data){
      var logo = data.logo;
      var name = data.display_name;
      if (logo != null){
        if (status == "Online"){
         $('#display').append('<div class = "row g_online">' +
                              '<div class = "col-xs-1">' + '<img src="' + logo + '" class="logo_img"></div>' +
                              '<div class = "col-xs-2"><a href="' + data.url + '" target = "blank">' +
                              name + '</a></div><div class="col-xs-9 text-center streaming">' + game + " - " + data.status +
                              '</div>'
                             )
        }else{
         $('#display').append('<div class = "row g_offline">' +
                              '<div class = "col-xs-1">' + '<img src="' + logo + '" class="logo_img"></div>' +
                              '<div class = "col-xs-2"><a href="' + data.url + '" target = "blank">' +
                              name + '</a></div><div class="col-xs-9 text-center streaming">' + status +
                              '</div>'
                             )          
        }
      }
    });
  });   
}

$(document).ready(function(){
  $('#all').addClass('active');
  for(var i = 0; i<channels.length; i++){
    getData(getURL(channels[i]), channels[i]);
  }
  $('.item').click(function() {
    $('.item').removeClass("active");
    $(this).addClass("active");
    var status = $(this).attr('id');
    if (status == "all"){
      $('.g_online').removeClass("hidden");
      $('.g_offline').removeClass("hidden"); 
    }else if (status == "online"){
      $('.g_online').removeClass("hidden"); 
      $('.g_offline').addClass("hidden"); 
    }else{
      $('.g_offline').removeClass("hidden"); 
      $('.g_online').addClass("hidden");
    }
  });
});




