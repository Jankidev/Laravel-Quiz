  
  // created by Deepa for Marquee on 21-Jan-2019

$(document).ready(function(){

      var agMarqueeOptions = {
        duration: 40500,
        gap: 0,
        delayBeforeStart: 0,
       direction: 'left',
        duplicated: true,
        pauseOnHover: true,
        startVisible: true
      };


       setTimeout(function(){
        $('.tickers').show();
        var agMarqueeBlock = $('.js-marquee');

        agMarqueeBlock.marquee(agMarqueeOptions);
      },2000);
      


  });

  