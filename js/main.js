$(function() {
    $('#main').hide().removeClass('hidden');

    $('#main').fullpage({
        scrollBar: true,
        navigation: false,
        anchors: ['about', 'love-days'],
        sectionsColor: ['#ED5565', '#1BBC9B'],
    });

    $('.avatar > img').click(function() {
        var el = $(this);

        $(this).removeClass('avatar-box-shadow');
        $(this).removeClass('shadow').addClass('shadow');

        el.before(el.clone(true)).remove();
    });

    $('.avatar > img').on('animationend', function() {
        // $('.avatar > img').addClass('avatar-box-shadow');
    });

    setTimeout(function() {
        $('#main').fadeIn();
        $('#loading').addClass('hidden');

        $('.countdown-time').TimeCircles({
            fg_width: 0.005,
            bg_width: 0.2,
            circle_bg_color: '#D8F1F1',
            time: {
                Days: {
                    color: '#fff'
                },
                Hours: {
                    color: '#fff'
                },
                Minutes: {
                    color: '#fff'
                },
                Seconds: {
                    color: '#fff'
                }
            }
        });
    }, 1500);
});
