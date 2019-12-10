$(document).on('turbolinks:load', function(){
  // $('.slick').slick({
  //   autoplay:true,  //自動再生
  //   dots:false,      //ドットの描写
  //   arrows: false,
  //   slidesToShow: 7,
  //   slidesToScroll: 1,
  //   autoplaySpeed: 0,
  //   cssEase: 'linear',
  //   speed: 1500,
  // });
  $('.slick').slick({
    autoplay:true,
    dots: false,
    arrows: false,
    // infinite: false,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          // infinite: true,
          dots: false,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          cssEase: 'linear',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
          
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
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

