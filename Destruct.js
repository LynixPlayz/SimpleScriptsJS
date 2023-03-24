var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.4.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

$(document).keypress(function (event) {
  
            alert('You pressed a key');
        });
