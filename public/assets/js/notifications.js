    function notify_e(msg){
      url = 'http://' + window.location.hostname;
      url += '/assets/img/alerts/error_icon.png';
      $('.page-content-wrapper').pgNotification({
                    style: 'flip',
                    title: 'Error',
                    message: msg,
                    position: 'top-right',
                    timeout: 3000,
                    type: 'danger',
                    thumbnail: '<img width="40" height="40" style="display: inline-block;" src="'+url+'" data-src="'+url+'" data-src-retina="'+url+'" alt="">'
      }).show();
    }
  
    function notify_s(msg){
      url = 'http://' + window.location.hostname;
      url += '/assets/img/alerts/success_icon.png';
      $('.page-content-wrapper').pgNotification({
                    style: 'flip',
                    title: 'Success',
                    message: msg,
                    position: 'top-right',
                    timeout: 3000,
                    type: 'success',
                    thumbnail: '<img width="40" height="40" style="display: inline-block;" src="'+url+'" data-src="'+url+'"" data-src-retina="'+url+'" alt="">'
      }).show();
    }  
      
     function notify_hide(){
       $('.pgn-wrapper').remove();
     } 
