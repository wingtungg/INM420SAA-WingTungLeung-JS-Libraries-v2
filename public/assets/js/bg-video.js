// Bideo.js fullscren background video JS library

var video = document.querySelector('video');
var container = document.querySelector('#video-container');

var setVideoDimensions = function () {
  var w = video.videoWidth;
  var h = video.videoHeight;
  var containerStyles = window.getComputedStyle(container);
  var minW = parseInt(containerStyles.getPropertyValue('width'));
  var minH = parseInt(containerStyles.getPropertyValue('height'));

  var widthRatio = minW / w;
  var heightRatio = minH / h;

  if (widthRatio > heightRatio) {
    var newWidth = minW;
    var newHeight = Math.ceil(newWidth / (w / h));
  } else {
    var newHeight = minH;
    var newWidth = Math.ceil(newHeight * (w / h));
  }

  video.style.width = newWidth + 'px';
  video.style.height = newHeight + 'px';
};

video.addEventListener('loadedmetadata', setVideoDimensions, false);
window.addEventListener('resize', setVideoDimensions, false);