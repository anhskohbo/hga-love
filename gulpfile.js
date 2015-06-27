var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.less('main.less');
    mix.copy(mix.bowerDir+'/bootstrap/fonts', './fonts');

    mix.scripts([
        'jquery/dist/jquery.js',
        'timecircles/inc/TimeCircles.js',
        'fullpage.js/jquery.fullPage.js',
    ], './js/vendor.js', mix.bowerDir);
});
