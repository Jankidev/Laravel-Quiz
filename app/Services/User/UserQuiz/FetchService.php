<?php 
namespace App\Services\User\UserQuiz; 

use App\User;
use App\Models\User\User_Rate_Table;
use App\Constants\SerConst;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class FetchService {

    public function execute ($params) { 
        $resp = [];
        $resp = SerConst::SER_RESP;
        
        $validated = $request->validate([
            'rate' => 'required',
        ]);

        $err_trans_empty = ["ER0001"=>"Data not fetched"];
        $retrive_succ_message = ["TS0001"=>"Data Fetched Successfully !"];
        $user_model = new User_Rate_Table;
        
        $fetch_res_data = $user_model->view_data();

            if(!empty($fetch_res_data)){
                $resp['status'] = true;
                $resp['data'] = $fetch_res_data;
                $resp['message']['success'] = $retrive_succ_message;
                return response()->json($resp);
            } else {
                $resp['status'] = false;
                $resp['data'] = NULL;
                $resp['message']['error'] = $err_trans_empty;
                return response()->json($resp);
            }
 
    }
}