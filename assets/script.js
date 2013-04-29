;(function($){
  $(function() {
    $('.picture-header').fillsize('> .wallpaper');
  });

  function onImageLoad($img, fn) {
    if ($img[0].complete) { fn.apply($img, []); }
    else { $img.on('load', fn); }
  }

  // Fade on load
  $(function() {
    onImageLoad($('img.wallpaper'), function() {
      var $parent = $(this).closest('.picture-header');
      setTimeout(function() { $parent.addClass('loaded'); }, 25);
    });
  });

  // Prevent text orphans
  $(function() {
    $('.next-meetup h5, .unorphan, .brief p, .speaker p, .closing p, .about-us p').unorphan();
  });

  // Disable clicks on dead links
  $(document).on('click', '[href=#]', function(e) {
    e.preventDefault();
  });

  // Signup form
  $(function() {
    var url = $('link[rel="signup-form"]').attr('href');
    $('[href="#signup"]').attr('href', url);
  });

  // Content
  $(function() {
    $('[data-content]').each(function() {
      var $span = $(this);
      var key = $span.data('content');
      var value = $("meta[name='site:"+key+"']").attr('content');
      console.log($span, key, value);

      $span.html(value);
    });
  });

  // Registration state
  $(function() {
    var current = $("meta[name='site:registration_state']").attr('content');

    $.each(['announce', 'open', 'closed'], function(i, state) {
      if (state !== current) $(".r-"+state).remove();
    });
  });
})(jQuery);
