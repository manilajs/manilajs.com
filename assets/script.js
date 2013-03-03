;(function($){
  $('.picture-header').fillsize('> .wallpaper');

  function onImageLoad($img, fn) {
    if ($img[0].complete) { fn.apply($img, []); }
    else { $img.on('load', fn); }
  }

  onImageLoad($('img.wallpaper'), function() {
    var $parent = $(this).closest('.picture-header');
    setTimeout(function() { $parent.addClass('loaded'); }, 25);
  });
})(jQuery);
