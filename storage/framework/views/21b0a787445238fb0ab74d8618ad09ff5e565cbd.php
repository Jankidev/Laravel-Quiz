<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"></div>

                <div class="card-body">
                    <?php if(session('status')): ?>
                        <div class="alert alert-success" role="alert">
                            <?php echo e(session('status')); ?>

                        </div>
                    <?php endif; ?>
                    <form id="user_quiz_form" name="user_quiz_form">
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
                   
                </div>
            </div>
        </div>
    </div>
</div>
<script src="<?php echo e(URL::asset('js/user/quiz/validate.js')); ?>" type="text/javascript"></script>
   <script src="<?php echo e(URL::asset('js/user/quiz/helper.js')); ?>" type="text/javascript"></script>
   <script src="<?php echo e(URL::asset('js/user/quiz/service.js')); ?>" type="text/javascript"></script>
   <script>
    var APP_URL = "<?php echo e(env("APP_URL")); ?>"
    
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>