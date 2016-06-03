/**
 * Created by Tomer on 20/05/2016.
 */
jQuery( function () {
    // create and remove the the ball randomly
    var createball = function () {
        var diameter = Math.floor(Math.random() * (150 - 20 + 1)) + 20,
            posX = (Math.floor(Math.random()* parseInt($('.area').css('width'))))-150,
            color = 'red',
            ball = $('<div class="ball"></div>').css({
                position: 'absolute',
                left: posX,
                background : color,
                width : diameter,
                height : diameter,
                borderRadius : '50%'
            });
        ball = ball.animate({top:'90vh'},600, function(){
            $(this).remove();
        });
        return ball;
    }

    //create the shooter
    var createbullet = function () {
        var shots = shots || 0;
        $('.yellow').click(function (e) {
            shots +=1;
            console.log('shoot: ' + shots);
            var bullet = $('<div class="bullet">')
                .css('top',e.clientY);
            $('.area').append(bullet);
            $(bullet).animate({right:'95vw'},500, function () {
                $(this).remove();
            })
        })


    }
    

    // create the bullet and listen to the mouse click event

    
    $('.area').append(createball())
    setInterval(function(){
        $('.area').append(createball());

    },200);

    createbullet();




});
