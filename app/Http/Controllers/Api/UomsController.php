<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UomsController extends Controller
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
                'name' => 'Uoms 1',
            ],
            (object)[
                'id' => 2,
                'name' => 'Uoms 2',
            ],
            (object)[
                'id' => 3,
                'name' => 'Uoms 3',
            ],
        ];
    }
}
