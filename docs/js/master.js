$(document).ready(function() {
  $('#navbarToggle').on('click', function() {
    // console.log('foo');
    $(this).toggleClass('active');
    $('#mySidenav').toggleClass('active');
    $('.trigger-text').toggleClass('active');
  });
});

/* Set the width of the side navigation to 250px */
// function openNav() {
//   document.getElementById('mySidenav').style.width = '250px';
// }

/* Set the width of the side navigation to 0 */
// function closeNav() {
//   document.getElementById('mySidenav').style.width = '0';
// }
