var session_length = 25;
var current_length = session_length*60;
var break_length = 5;
var started = false;
var onBreak = false;
var color = "green";
var fader = 310/current_length;
var fader_current = 0;
var timer;

$(document).ready(function(){
  $("#start").click(function(){
    if (started == false){
      started = true;
      startTimer(session_length);
    }else{
      stopTimer();
    }
  })
  
//   BREAK LENGTH MINUTE CHANGER
  $(".break_inc").click(function(){
    stopTimer();
    break_length++;
    $(".break_text").text(break_length);
  });
  
  $(".break_dec").click(function(){
    stopTimer();
    if (break_length > 1){
      break_length--;
      $(".break_text").text(break_length);
    }
  });  

//   SESSION LENGTH MINUTE CHANGER
  $(".session_inc").click(function(){
    stopTimer();
    session_length++;
    current_length = session_length*60;
    fader = 310/current_length;
    fader_current = 0;
    $(".session_text").text(session_length);
    $(".minute").text(session_length);
    $(".second").text("00");
    $(".hour").text("00");
  });  
  
  $(".session_dec").click(function(){
    if (session_length >1){
      stopTimer();
      session_length--;
      current_length = session_length*60;
      fader = 310/current_length;
      fader_current = 0;
      $(".session_text").text(session_length);
      $(".minute").text(session_length);
      $(".second").text("00");
      $(".hour").text("00");
    }
  });
  
  
})

function startTimer(session_length){
  var h, m, s;
  timer = setInterval(function (){
    fader_current+=fader;
    $('.fade').css({background: "linear-gradient(0deg, "+ color + " " + fader_current + "px, #333333 " + fader_current + "px, #333333 100%)"});
    h = Math.floor(current_length / (60*60));
    m = Math.floor(current_length / 60) - (h*60);
    s = current_length % 60; 
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    $('.hour').text(h);
    $('.minute').text(m);
    $('.second').text(s);
    
    // $(".clock").css({"background": "red"});
    if (--current_length < 0){
      fader_current = 0;
      if (onBreak == false){
        onBreak = true;
        current_length = break_length*60;
        fader = 310/current_length;
        color = "red";
      }else{
        onBreak = false;
        current_length = session_length*60;
        fader = 310/current_length;
        color = "green";
      }
    }
  }, 1000);
}
 
function stopTimer(){
  started = false;
  clearInterval(timer);
}