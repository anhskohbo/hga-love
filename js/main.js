(function($) {
  'use strict';

  /**
   * Main Page.
   */
  $(function() {
    var $main = $('#main');
    $main.hide().removeClass('hidden');

    $main.fullpage({
      scrollBar: true,
      navigation: false,
      anchors: ['about', 'love-days'],
      sectionsColor: ['#ED5565', '#1BBC9B'],
    });

    setTimeout(function() {
      $main.fadeIn();
      $('#loading').addClass('hidden');

      $('.countdown-time').TimeCircles({
        bg_width: 0.2,
        fg_width: 0.005,
        circle_bg_color: '#D8F1F1',
        time: {
          Days: { color: '#fff'  },
          Hours: {  color: '#fff' },
          Minutes: { color: '#fff' },
          Seconds: { color: '#fff' }
        }
      });
    }, 1500);
  });

  /**
   * Avatar Animation.
   */
  $(function() {
    $('.avatar > img').click(function() {
      var el = $(this);

      $(this).removeClass('avatar-box-shadow');
      $(this).removeClass('shadow').addClass('shadow');

      el.before(el.clone(true)).remove();
    });
  });

})(jQuery);
