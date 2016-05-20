/**
 * Created by Tomer on 20/05/2016.
 */
jQuery( function () {
    var createball = function () {
        var diameter = Math.floor(Math.random() * (150 - 20 + 1)) + 20,
            posX = (Math.floor(Math.random()* parseInt($('.area').css('width'))))-150,
            color = 'red',
            b = $('<div class="ball"></div>').css({
                position: 'absolute',
                left: posX,
                background : color,
                width : diameter,
                height : diameter,
                borderRadius : '50%'
            });
        b = b.animate({top:'100vh'},600);
        return b;
    }
    $('.area').append(createball())
    /*setInterval(function(){
        $('.area').append(createball());

    },200);*/
    var ball = $('.ball');
    function delBall(){
        if ($('.ball').css('top') === '100vh') {
            console.log("11");
            $('.ball').remove();
        }
    }
    delBall();


});
