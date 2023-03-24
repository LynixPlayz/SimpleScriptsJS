var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.4.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

$(document).keydown(function(){
  if(event.which == 13)
  {
    document.body.remove();
  }
});
