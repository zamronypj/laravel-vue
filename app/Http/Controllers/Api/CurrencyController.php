<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CurrencyController extends Controller
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
                'id' => 'usd',
                'name' => 'USD',
            ],
            (object)[
                'id' => 'idr',
                'name' => 'IDR',
            ],
            (object)[
                'id' => 'eur',
                'name' => 'EUR',
            ],
        ];
    }
}
