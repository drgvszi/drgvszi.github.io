function calcVH() {
    $('.content').innerHeight( $(this).innerHeight() );
}
calcVH();
$(window).on('resize orientationchange', function() {
  calcVH();
});
