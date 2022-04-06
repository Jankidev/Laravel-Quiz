// created by Deepa on 15Feb2019

$(function(){
    $.each($(".chart-tab .chart-tab-menu > li"), function(index, value){
      var menu = $(value).data('tab-menu');
      var tabID = $(value).parent().parent().data('tab-id');
      var hash = window.location.hash.split("#").join('');
      
      if(hash.length > 0){
          
        if(menu == hash){
          $('.chart-tab[data-tab-id="' + tabID + '"] .chart-tab-menu > li[data-tab-menu="' + menu + '"]').addClass('active');
          $('.chart-tab[data-tab-id="' + tabID + '"] .chart-tab-content > div[data-tab-content="' + menu + '"]').addClass('view');
        }
        
      }else{
        $('.chart-tab[data-tab-id="' + tabID + '"] .chart-tab-menu > li:eq(0)').addClass('active');
        $('.chart-tab[data-tab-id="' + tabID + '"] .chart-tab-content > div:eq(0)').addClass('view');
      }
    });
    


    $(".chart-tab .chart-tab-menu > li").click(function(event){
      var $this = $(this),
        $data = $this.data('tab-menu'),
        $tabID = $this.parent().parent().data('tab-id');
      if(!$(this).hasClass("active")){

        window.location.hash = $data;
        
        $('.chart-tab[data-tab-id="' + $tabID + '"] .chart-tab-menu > li').removeClass('active');
        $(this).addClass('active');
          
        $('.chart-tab[data-tab-id="' + $tabID + '"] .chart-tab-content > div.view').removeClass('view');
        $('.chart-tab[data-tab-id="' + $tabID + '"] .chart-tab-content > div[data-tab-content="' + $data + '"]').addClass('view');
      }
    });
  });