<?php 
namespace App\Services\User\UserQuiz; 

use App\User;
use App\Models\User\User_Rate_Table;
use App\Constants\SerConst;
use Illuminate\Support\Facades\Auth;



class Service {
    
    public function execute ($params) { 
        $resp = [];
        $resp = SerConst::SER_RESP;
        $err_trans_empty = ["ER0001"=>"Not Inserted"];
        $retrive_succ_message = ["TS0001"=>"User Rating Inserted !"];
        $user_model = new User_Rate_Table;
        
        if(isset($params["data"]['good']))
        {
            $Rate1 = $params["data"]['good'];
        }
        else{
            $Rate1 = NULL;
        }

        if(isset($params["data"]['fair']))
        {
            $Rate2 = $params["data"]['fair'];
        }
        else
        {
           $Rate2 = NULL; 
        }

        if(isset($params["data"]['neu']))
        {
            $Rate3 = $params["data"]['neu'];
        }
        else
        {
            $Rate3 = NULL;
        }

        if(isset($params["data"]['bad']))
        {
            $Rate4 = $params["data"]['bad'];
        }
        else
        {
            $Rate4 = NULL;
        }
        $good_rate = $Rate1;
        $fair_rate = $Rate2;
        $neu_rate = $Rate3;
        $bad_rate = $Rate4;

        $user_id = Auth::user()->id;    

        $insert_array = array("id"=>$user_id,
                              "good" =>$$good_rate,
                              "fair"=>$fair_rate,
                              "neu"=>$neu_rate,
                              "bad"=>$bad_rate
                                );

        $insert_rate_data = $user_model->insert_data($insert_array);

            if(insert_rate_data){
                $resp['status'] = true;
                $resp['message']['success'] = $retrive_succ_message;
                return response()->json($resp);
            } else {
                $resp['message']['error'] = $err_trans_empty;
                return response()->json($resp);
            }
        
        
        
    }
}