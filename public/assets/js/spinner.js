//written by Deepa Prabhu//
  currentVal='';

//code for +sign
    $('.Xplus').click(function(e){
      max=0;
         max=$(this).prev('.persons').data('max');
   
       $('.spinner').find('.persons').attr('maxvalue',max);
        var container = $(this).parents('.spinner');
        fieldName = $(this).attr('field');
        currentVal = parseInt( container.children(".persons").val() );
     
        var val2 = currentVal + 1;
        if (!isNaN(val2)) {
           if(val2<=max) container.children(".persons").val(val2);
        } else {
          if(!currentVal)
            {
              currentVal=0;currentVal++;}
            container.children(".persons").val(currentVal);
          
        }
    });
    //code for minus sign
  
    $(".Xminus").click(function(e) {
        e.preventDefault();
        var container = $(this).parents('.spinner');
        fieldName = $(this).attr('field');
        currentVal = parseInt( container.children(".persons").val() );
     
        if (!isNaN(currentVal) && currentVal > 0) {
            container.children(".persons").val(currentVal - 1);
        } else {
            container.children(".persons").val(0);
        }
    });
    //code for direct input entry
    $('.persons').click(function(){
      
      max=$(this).data('max');
      len= max.toString().length;
      $(this).attr('maxlength',len);
    })
  $('.persons').keypress(function(e){
    if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) 
     
      return false;
      max=$(this).data('max');
      if($(this).val()>max)
     { $(this).val('');
     }
  
       $(this).prev('.persons').attr('maxvalue',max);
    currentVal=$(this).val();
  })
  $('.persons').keyup(function(e){
   max=$(this).data('max');
    if($(this).val()>max)
     { 
      $(this).val(currentVal);
     }
  });
  //written by Deepa Prabhu//
