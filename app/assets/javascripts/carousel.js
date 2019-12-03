$(document).on('turbolinks:load', function(){
  $('.slick').slick({
    autoplay:true,  //自動再生
    dots:false,      //ドットの描写
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 1500,
  });
});

// $('#slide-div1').slick({
//   arrows: false,
//   autoplay: true,
//   slidesToShow: 7,
//   slidesToScroll: 1,
// });

// $('#slide-div2').slick({
//   arrows: false,
//   autoplay: true,
//   /* ポイントここから～ */
//   autoplaySpeed: 0,
//   cssEase: 'linear',
//   speed: 5000,
//   /* ～ここまで */
//   slidesToShow: 7,
//   slidesToScroll: 1,
// });