import throttle from 'lodash.throttle'
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const storeTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
const timeUpdate = throttle((time) =>
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time)), 1000);

player.setCurrentTime(storeTime.seconds || 0);
player.on('timeupdate', timeUpdate);
