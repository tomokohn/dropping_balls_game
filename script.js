/**
 * Created by Tomer on 20/05/2016.
 */
//jQuery( function () {
    var  ballsArr  = [];

    // create and remove the the ball randomly
    var createball = function () {
        var diameter = Math.floor(Math.random() * (150 - 20 + 1)) + 20,
            posX = (Math.floor(Math.random()* parseInt($('.area').css('width'))))-150,
            color = 'red',
            ball = $('<div class="ball"></div>').css({
                position: 'absolute',
                display:'inline-block',
                left: posX,
                background : color,
                width : diameter,
                height : diameter,
                borderRadius : '50%'
            });
        ballsArr.push(ball);
        ball = ball.velocity({top:'90vh'},3000, function(){
            $(this).remove();
            ballsArr.shift();
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
            $(bullet).velocity({right:'80vw'}, {
                duration: 500,
                // handel collision
                progress: function(elements, complete, remaining, start, tweenValue) {
                    var bulletx = $(this)[0].getBoundingClientRect().left;
                    var bullety = $(this)[0].getBoundingClientRect().top;
                    var bulleth = $(this)[0].getBoundingClientRect().height;
                    var bulletw = $(this)[0].getBoundingClientRect().width;
                //    check collision
                    var ballsL = ballsArr.length;
                    var i = 0 ;
                    for (i=0;i < ballsL;i++) {
                        var carrentx =  ballsArr[i].offset().left;
                        var carrenty =  ballsArr[i].offset().top;
                        var carrenth =  ballsArr[i].height();
                        var carrentw =  ballsArr[i].width();
                        //console.log(carrentx,carrenty,carrenth,carrentw);
                        if (bulletx < carrentx + carrentw &&
                            bulletx + bulletw > carrentx &&
                            bullety < carrenty + carrenth &&
                            bulleth + bullety > carrenty) {
                            console.log('hit');
                            $(ballsArr[i]).remove()
                        }
                    }
                },
                complete: function () {
                    $(bullet).remove();
                }
            });
        })


    }



    

    // create the bullet and listen to the mouse click event


    setInterval(function(){
        $('.area').append(createball());
    },500);

    createbullet();




//});
