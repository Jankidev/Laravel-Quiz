<?php 
namespace App\Http\Controllers\User; 

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\User\UserQuiz\Service;
use App\Services\User\UserQuiz\FetchService;

class UserQuizController extends Controller {

public function service (Request $request) {
   
$resp = "";
$service = new Service();
$resp = $service->execute($request->all());

return $resp;
}

public function fetchrating(Request $request){

$resp = "";
$service = new FetchService();
$resp = $service->execute($request->all());

return $resp;

}

}