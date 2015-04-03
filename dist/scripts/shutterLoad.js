/**
 * Shutter Loader v0.0.1
 * Author: Vageesh Bhasin <vageesh_bhasin@outlook.com>
 * Description: Plugin to show a shutter style loading screen
 *   when client is busy (eg. AJAX calls)
 */
(function() {
  sLoad = function sLoad(config) {

    this.keys = [33, 34, 35, 36, 37, 38, 39, 40];

    if(typeof(config) != 'undefined')
      this.config = config;
    else {
      this.config = {
        text: 'Loading...',
        theme: 'orange',
        style: 'horizontal',
        reverse: false
      };
    }

    if(this.config.reverse === false) {
      this.theme = 'theme-' + this.config.theme;
      this.centerTheme = 'theme-' + this.config.theme;
      this.themeLight = 'theme-' + this.config.theme + '-light';
    } else {
      this.theme = 'theme-' + this.config.theme + '-light';
      this.centerTheme = 'theme-' + this.config.theme + '-light';
      this.themeLight = 'theme-' + this.config.theme;
    }

    if(this.config.style === 'diagonal') {
      firstType = 'diagonal-left';
      lastType = 'diagonal-right';
    } else if(this.config.style === 'vertical') {
      firstType = 'top';
      lastType = 'down';
    } else {
      firstType = 'left';
      lastType = 'right';
    }
    
    this.splash = document.createElement('section');
    this.splash.id = 'sLoader';
    
    this.first = document.createElement('div');
    this.first.className = firstType + ' ' + this.theme;

    this.middle = document.createElement('div');
    this.middle.className = 'center ' + this.centerTheme;
    this.middle.innerHTML = this.config.text;
    
    this.last = document.createElement('div');
    this.last.className = lastType + ' ' + this.themeLight;

    this.splash.appendChild(first);
    this.splash.appendChild(middle);
    this.splash.appendChild(last);

    /**
     * Prevents event from triggering
     * @param  {Object} e Event Object
     */
    this.preventDefault = function (e) {
      e = e || window.event;
      if (e.preventDefault)
        e.preventDefault();
      e.returnValue = false;  
    };

    /**
     * Handles keydown event
     * @param  {Object} e Event object
     */
    this.keydown = function (e) {
      for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
          preventDefault(e);
          return;
        }
      }
    };

    /**
     * Handles Mouse Wheel event
     * @param  {Object} e Event Object
     */
    this.wheel = function(e) {
      preventDefault(e);
    };

    /**
     * Disables scroll by delegating type of event
     */
    this.disable_scroll = function () {
      if (window.addEventListener) {
        window.addEventListener('DOMMouseScroll', wheel, false);
      }
      window.onmousewheel = document.onmousewheel = wheel;
      document.onkeydown = keydown;
    };

    /**
     * Enables scroll
     */
    this.enable_scroll = function () {
      if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
      }
      window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
    };

    if (window === this) {
      return new sLoad();
    }

    document.body.appendChild(this.splash);

    return this;
  };

  sLoad.prototype = {
    /**
     * Starts Loading Animation
     */
    start: function() {
      this.disable_scroll();
      splash = document.querySelector('#sLoader');
      splash.style.top = +(document.documentElement.scrollTop || document.body.scrollTop) + 'px';
      splash.classList.remove('fade-out');
      splash.classList.remove('send-to-back');
      splash.classList.add('fade-in');
      
      setTimeout(function () {
        var els = document.querySelectorAll('#sLoader div');
        [].forEach.call(els, function(ele) {
          ele.classList.toggle('move');
          ele.classList.toggle('animate');
        });
      }, 500);
    },

    /**
     * Stops Loading Animation
     */
    stop: function() {
      splash = document.querySelector('#sLoader');
      els = document.querySelectorAll('#sLoader div');
      
      [].forEach.call(els, function(ele, index) {
        ele.classList.toggle('move');
        ele.classList.toggle('animate');
        if( index === els.length - 1 ) {
          setTimeout(function () {
            splash.classList.add('fade-out');
            setTimeout(function () {
              splash.classList.add('send-to-back');
              this.enable_scroll();
            }, 500);
          }, 1000);
        }
      });
    }
  };

  return sLoad;
}());