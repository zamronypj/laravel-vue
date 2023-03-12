<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceToController extends Controller
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
                'name' => 'MITO',
            ],
            (object)[
                'id' => 2,
                'name' => 'MIO',
            ],
            (object)[
                'id' => 3,
                'name' => 'YAMAHA',
            ],
        ];
    }
}
