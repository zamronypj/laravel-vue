<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ContractController extends Controller
{

    /**
     * return UOMS data.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return [
            (object)[
                'id' => 1,
                'name' => 'ADNOC-ONSHORE',
            ],
            (object)[
                'id' => 2,
                'name' => 'ADNOC-OFFSHORE',
            ],
            (object)[
                'id' => 3,
                'name' => 'XXXXX',
            ],
        ];
    }
}
