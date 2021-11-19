$(function() {
    // Sidebar toggle behavior
    $('#sidebarCollapse').on('click', function() {
      $('#sidebar, #content').toggleClass('active');
    });
  });

  $(document).ready(function() {
    jQuery.fn.carousel.Constructor.TRANSITION_DURATION = 1000  // 2 seconds
  });
  