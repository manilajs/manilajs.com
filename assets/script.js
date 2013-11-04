$(function() {
  $('.picture-header').fillsize('> .wallpaper');
});

// Fade on load
$(function() {
  onImageLoad($('img.wallpaper'), function() {
    var $parent = $(this).closest('.picture-header');
    $(window).trigger('resize');
    setTimeout(function() { $parent.addClass('loaded'); }, 25);
  });

  function onImageLoad($img, fn) {
    if ($img[0].complete) { fn.apply($img, []); }
    else { $img.on('load', fn); }
  }
});

// Prevent text orphans
$(function() {
  $('.next-meetup h5, .unorphan, .brief p, .speaker p, .closing p, .about-us p').unorphan();
});

// Disable clicks on dead links
$(document).on('click', '[href=#]', function(e) {
  e.preventDefault();
});
