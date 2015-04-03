# Shutter Load

A simple plugin for having a shutter-style loading screen when the client is busy (example: AJAX Calls)

## Installation
* Bower: `$ bower install shutterload`

## Usage
* Include CSS - `shutterLoad.min.css`
* Inlcude JS  - `shutterLoad.min.js`
* Create object and call functions
```javascript
// Example
var s = sLoad();
s.start();
$.ajax({})
  .success(function() {
    s.stop();
  });
```

## Config
Default Config:
```javascript
config = {
  text: 'Loading...',
  theme: 'orange',
  style: 'horizontal',
  reverse: false
};
```

### Config Properties:
* `text` - Text to be displayed in the center piece
* `theme` - Theme to be used (taken from Flat UI Colors)
  * Options - `[blue, orange, green, green-blue, purple, red, white, black, yellow]`
* `style` - Style of animation - Options `[horizontal, vertical, diagonal]`
* `reverse` - Swaps the color of panels

## Functions
* `start` - Starts loading animation
* `stop` - Stops loading animation
