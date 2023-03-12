<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PurchaseOrderController extends Controller
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
                'name' => 'ASDASFD234',
            ],
            (object)[
                'id' => 2,
                'name' => 'ASDQWSFD453',
            ],
            (object)[
                'id' => 3,
                'name' => 'ZZZQWSFD423',
            ],
        ];
    }
}
