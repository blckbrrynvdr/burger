console.log('121212')

let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('yt-player', {
          height: '405',
          width: '660',
          videoId: 'qy0HduXAr-Q',
          playerVars: {
            controls: 0,
            disablekb: 0,
            modestbranding: 0,
            rel: 0,
            autoplay: 0,
            showinfo: 0
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
      }

function onPlayerStateChange(event) {
  switch(event.data) {
    case 1:
       $('.player__start').addClass('paused');
       $('.player__wrapper').addClass('active');
      break;
    case 2:
       $('.player__start').removeClass('paused');
  }
}

function onPlayerReady() {
  const duration = player.getDuration();
  let interval;

  updateTimer();
  
  clearInterval(interval);
  interval = setInterval(() => {
    const complited = player.getCurrentTime();
    const percent = (complited / duration) * 100;

  updateTimer();

   changeButtonPosition(percent); 

  }, 1000);
}

function updateTimer() {
  $('.player__duration-completed').text(formatTime( player.getCurrentTime() ));
  $('.player__duration-estimate').text(formatTime( player.getDuration() ));
}

function formatTime(time) {
  const roundTime = Math.round(time);

  const minutes  = Math.floor(roundTime / 60);
  const seconds  = roundTime - minutes * 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return minutes + ":" + formattedSeconds;
}

$('.player__start').on('click', e => {
// -1 – воспроизведение видео не началось
// 0 – воспроизведение видео завершено
// 1 – воспроизведение
// 2 – пауза
// 3 – буферизация
// 5 – видео находится в очереди
  const playerStatus = player.getPlayerState();

  if (playerStatus !== 1) {
    player.playVideo();
   // $('.player__start').addClass('paused');
  } else {
    player.pauseVideo();
    // $('.player__start').removeClass('paused');
  }
  
});

$('.player__playback').on('click', e => {
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercent = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercent;

  changeButtonPosition(clickedPercent);
  player.seekTo(newPlayerTime);
})

$('.player__splash').on('click', e => {
  player.playVideo();
})

function changeButtonPosition(percent) {
   $('.player__playback-button').css({
      left: `${percent}%`
    }); 
}


  $('.player__volume-button').on('click', e => {
    //true - если громкость отключена
    //false - если громкость включена
  const volumeStatus = player.isMuted();

  if (!volumeStatus) {
    player.mute();
    console.log('mute');
  } else {
     player.unMute();
     console.log('unmute');
  }
})

$('.player__volume-playback').on('click', e => {
  const volumeBar = $(e.currentTarget);
  const newVolumePosition = e.pageX - volumeBar.offset().left;
  const clickedVPercent = (newVolumePosition / volumeBar.width()) * 100;
  const newPlayerVolume = (player.getVolume() / 100) * clickedVPercent;

  changeVolumePosition(clickedVPercent);
  player.setVolume(newPlayerVolume);
  console.log(volumeBar);
  console.log(newVolumePosition)
  console.log(clickedVPercent)
  console.log(newPlayerVolume)
})

function changeVolumePosition(percent) {
   $('.player__volume-point').css({
      left: `${percent}%`
    }); 
}