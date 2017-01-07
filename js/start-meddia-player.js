$(document).ready(function(){
    $('video,audio').mediaelementplayer({
        features: ['playpause','progress','current','duration','tracks','volume','fullscreen'],
        alwaysShowControls: false,
        enableKeyboard: false
    });
});