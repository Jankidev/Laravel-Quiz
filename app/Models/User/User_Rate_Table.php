<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Model;

class User_Rate_Table extends Model
{
    protected $table = 'user_rate';
    //protected $guarded = [];


    public function insert_data($inputs)
    {
        //return User_Rate_Table::create($inputs);
        try {
            return User_Rate_Table::create($inputs);
          } catch (\Exception $ex) {  
            //\Log::info($ex->getMessage());
            //dd($ex);
            return null; } 
            
    }

    public function view_data()
    {
      try {
        $data = User_Rate_Table::select('good','fair','neu','bad')
            ->where('good',1) -> count()
            ->where('fair',2) -> count()
            ->where('neu',3) -> count()
            ->where('bad',0) -> count();
            

        if (!empty($data)) {
            $res_of_rating = $data->toArray();
            $sum_of_result = array_sum($res_of_rating);
            $total = 4;

            $percentage_good = $res_of_rating['good'] / $total * $sum_of_result;
            $percentage_fair = $res_of_rating['fair'] / $total * $sum_of_result;
            $percentage_neu = $res_of_rating['neu'] / $total * $sum_of_result;
            $percentage_bad = $res_of_rating['bad'] / $total * $sum_of_result;

            $data = array("Good"=>$percentage_good."-".$res_of_rating['good']. "Result",
                          "Fair"=>$percentage_fair."-".$res_of_rating['fair']. "Result" ,
                          "Neurtal"=>$percentage_neu."-".$res_of_rating['neu']. "Result" ,
                          "Bad"=>$percentage_bad."-".$res_of_rating['bad']. "Result" 
                         );

        }

        return $data;
    } catch (\Exception $ex) {return null;}
    }

    
}   
