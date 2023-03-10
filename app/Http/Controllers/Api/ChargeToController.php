<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ChargeToController extends Controller
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
                'name' => 'PT. Maju Mundur',
            ],
            (object)[
                'id' => 2,
                'name' => 'PT. Mundur Selalu',
            ],
            (object)[
                'id' => 3,
                'name' => 'PT. Maju Kena Mundur Kena',
            ],
        ];
    }
}
