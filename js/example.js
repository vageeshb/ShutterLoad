document.addEventListener("DOMContentLoaded", function(event) { 
  
  var e1 = document.getElementById('ex-1'),
    e2 = document.getElementById('ex-2'),
    e3 = document.getElementById('ex-3'),
    e4 = document.getElementById('ex-4'),
    e5 = document.getElementById('ex-5');
  
  e1.onclick = function () {
    var s = sLoad();
    s.start();
    setTimeout(function () {
      s.stop();
      setTimeout(function () {
        document.body.removeChild(document.querySelector('#sLoader'));
      }, 1500);  
    }, 3000);
  };

  e2.onclick = function () {
    var s = sLoad({
      text: 'Loading...',
      theme: 'blue',
      style: 'vertical',
      reverse: false
    });
    s.start();
    setTimeout(function () {
      s.stop();
      setTimeout(function () {
        document.body.removeChild(document.querySelector('#sLoader'));
      }, 1500);  
    }, 3000);
  }

  e3.onclick = function () {
    var s = sLoad({
      text: 'Brewing...',
      theme: 'purple',
      style: 'horizontal',
      reverse: false
    });
    s.start();
    setTimeout(function () {
      s.stop();  
      setTimeout(function () {
        document.body.removeChild(document.querySelector('#sLoader'));
      }, 1500);
    }, 3000);
  }

  e4.onclick = function () {
    var s = sLoad({
      text: 'Mixing...',
      theme: 'green-blue',
      style: 'horizontal',
      reverse: false
    });
    s.start();
    setTimeout(function () {
      s.stop();
      setTimeout(function () {
        document.body.removeChild(document.querySelector('#sLoader'));
      }, 1500);
    }, 3000);
  }

  e5.onclick = function () {
    var s = sLoad({
      text: 'Locking...',
      theme: 'red',
      style: 'diagonal',
      reverse: false
    });
    s.start();
    setTimeout(function () {
      s.stop();  
      setTimeout(function () {
        document.body.removeChild(document.querySelector('#sLoader'));
      }, 1500);
    }, 3000);
  }
});