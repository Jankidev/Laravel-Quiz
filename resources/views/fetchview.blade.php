@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"></div>

            </div>
        </div>
    </div>
</div>
<script src="{{URL::asset('assets/plugins/jquery-loading-overlay/loading-overlay.js')}}"></script>
<script src="{{URL::asset('js/user/quiz/validate.js')}}" type="text/javascript"></script>
   <script src="{{URL::asset('js/user/quiz/helper.js')}}" type="text/javascript"></script>
   <script src="{{URL::asset('js/user/quiz/service.js')}}" type="text/javascript"></script>
   <script src="{{ asset('assets/plugins/sweetalert/sweetalert.min.js') }}"></script>
   
@endsection
