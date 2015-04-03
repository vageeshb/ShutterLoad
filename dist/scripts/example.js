document.addEventListener("DOMContentLoaded", function(event) { 
  var s = sLoad();
  var ele = document.getElementById('click');

  ele.onclick = function () {
    s.start();
    setTimeout(function () {
      s.stop();  
    }, 3000);
  }
});