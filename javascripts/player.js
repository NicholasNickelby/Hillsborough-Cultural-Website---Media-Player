var music = document.getElementById('music');
var pausePlayElement = document.getElementById('play-pause-button');
var progressSliderElement = document.getElementById('progress-slider');
var progressBarElement = document.getElementById('progress-bar');
var muteButtonWrapper = document.getElementById('mute-button-wrapper');
var muteButton = document.getElementById('mute-button');

music.addEventListener("timeupdate", function() {
  var duration = music.duration;
  var playPercent = 100 * (music.currentTime / duration);
  progressSliderElement.style.marginLeft = playPercent + "%";
}, false);

var muted = false;

/*music.addEventListener("click", function() {
  var newMargLeft = event.pageX - timeline
}, false);*/

function playAudio()
{
  if (music.paused)
  {
    music.play();
    pausePlayElement.classList.remove('icon-play');
    pausePlayElement.classList.add('icon-pause');
  }

  else
  {
    music.pause();
    pausePlayElement.classList.remove('icon-pause');
    pausePlayElement.classList.add('icon-play');
  }
}

function muteAudio()
{
  if (music.muted == false)
  {
    music.muted = true;
    /*muteButtonWrapper.style.background = "#808e97";
    muteButtonWrapper.style.opacity = 0.6;*/
    //muteButton.style.fontColor = "#ddddda";
    muteButton.style.opacity = 0.3;

  }
  else
  {
    music.muted = false;
    /*muteButtonWrapper.style.background = "#ddddda";*/
    muteButton.style.opacity = 1;
  }
}

