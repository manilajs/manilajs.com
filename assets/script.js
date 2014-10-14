// Prevent text orphans
$(function() {
  $('.next-meetup h5, .unorphan, .brief p, .speaker p, .closing p, .about-us p').unorphan();
});

// Disable clicks on dead links
$(document).on('click', '[href=#]', function(e) {
  e.preventDefault();
});

$(function () {
  $('form[role~="validate"]').on('submit', function (e) {
    var $requireds = $(this).find('input[required]');
    var $invalids =
    $requireds.filter(function (i, input) {
      return typeof input.value !== 'string' || input.value.length === 0;
    });

    if ($invalids.length > 0) {
      alert("Please fill up all required fields.");
      $invalids.eq(0).focus();
      e.preventDefault();
      return false;
    }
  });
});
