

<link href="{{ asset('assets/plugins/dropzone/css/dropzone.css') }}" rel="stylesheet" type="text/css" />

<div class=" horizontal-menu horizontal-app-menu ">
   <div class="page-container quote-container">
      <input type="hidden" name="trans_code" id="trans_code" value=""/>
      <div class="page-content-wrapper ">
         <div class="content">
            <div class="bg-white">
               <div class="container">
                  <ol class="breadcrumb breadcrumb-alt">
                     <li class="breadcrumb-item"><a href="#">User</a></li>
                     <li class="breadcrumb-item active">Quiz</li>
                  </ol>
               </div>
            </div>
            <div class="container-fluid">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="sm-m-l-5 sm-m-r-5 p-t-20">
                        <div class="card-group horizontal" id="accordion" role="tablist" aria-multiselectable="true">
                           <!-- Vehicle Details Accordian Starts --> 
                           <div class="card card-default m-b-0 accordion-tab">
                              <div id="vehicle_collapse" class="collapse show" role="tabcard" data-status ="false">
                                 <form id="user_quiz_form" name="user_quiz_form" class= "quiz_frm">
                                    <div class="card-body">
                                       <div class="col-lg-12" id="vehicle_overlay_container">
                                          <div class="row m-b-20">
                                
                                             <div class="col-lg-6">
                                             <h2><b>How Do You Find Our service ?</b></h2>
                                                <div class="radio radio-success border m-t-0 m-b-0 p-t-15 p-b-0">
                                                    
                                                   <p class="text-center">
                                                       <div>
                                                      <input type="radio"  value="1" name="rate" id="rate_good">
                                                      <label for="rate_good" class="p-r-50">Good</label></div>
                                                      <div>
                                                      <input type="radio" value="2" name="rate" id="rate_fair" />
                                                      <label for="rate_fair" class="p-r-50">Fair</label></div>
                                                      <div>
                                                      <input type="radio" value="3" name="rate" id="rate_neu" />
                                                      <label for="rate_neu">Neutral</label></div>
                                                      <div>
                                                      <input type="radio" value="0" name="rate" id="rate_bad" />
                                                      <label for="rate_bad">Bad</label>
                                                   </p>
                                                </div>
                                             </div> 
                                             <br>
                                             <div class="">                                 
                                 
                                 <input type="button"  id="rate"  value="Submit Your Choice" class="fetch-veh-details btn btn-primary btn-lg m-t-0 p-b-15 p-t-15 text-right ">                                 
                                 </div>                                                                            
                                          </div>
                                 
                                 </form>
                                 <div class="res_rating">
                                    <h2>User Ratings : </h2>
                                    <b>Good</b> <p id="good_rt"></p>
                                    <b>Fair</b><p id="fair_rt"></p>
                                    <b>Neutral</b><p id="neu_rt"></p>
                                    <b>Bad</b><p id="bad_rt"></p>
                                 </div>
                              </div>
                           </div>                           
                        </div>
                     </div>
                  </div>
               </div>
            </div> 
         </div>
      </div>
   </div>

   
</div>
   
   <script src="{{URL::asset('js/user/quiz/validate.js')}}"></script>
   <script src="{{URL::asset('js/user/quiz/helper.js')}}"></script>
   <script src="{{URL::asset('js/user/quiz/service.js')}}"></script>

   
   
   <script>
   // / var APP_URL = "{{ env("APP_URL") }}"
    
</script>