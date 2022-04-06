<?php 
namespace App\Constants; 

class SerConst {


const SER_REQ = array(
									"auth" => array( 
										"accesskey" => "QUIZ",
										"signature" => "JLGLq1x6E5W0EATMgmtgE0JBN2WfcCrODN0SBY9u0tojzHO03wrjJCL3jh3dZL94"
									),
									"data" => array()
);
	
     
const SER_RESP = array(
                    "status" => false,
                    "message" => array(
                          "success" => array(),
                          "error"  => array()
                    ),
                    "data" => array()
);

}
