  req = {
    good: $("#rate_good").val(),
    fair: $("#rate_fair").val(),
    neu: $("#rate_neu").val(),
    bad: $("#rate_bad").val(),
  }
$(document).ready(function () {
  $.ajax({
    type: 'POST',
    url: 'api/submit-rate',
    data: req,
    dataType: "json",
    success: function (res) {
          if (!res.status) {
            swal(res.message.error);
            return 0;
          }
          notify_s('Rating Data Inserted Successfully!');
          $.ajax({
            url:   'api/fetch-rating',
            dataType: 'json',
            type: "POST",
            success: function (res) {
              if (!res.status) {
                swal(res.message.error);
                return 0;
              }
            notify_s('Rating Data Fetched Successfully!');
              $('#good_rt').text(res.data.Good);
              $('#fair_rt').text(res.data.Fair);
              $('#neu_rt').text(res.data.Neurtal);
              $('#bad_rt').text(res.data.Bad);
            }
          });
        }
      });
    
    },
    
  );

