<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VendorController extends Controller
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
                'name' => 'Aman & Associates Logistic, Ltd',
                'address' => 'Central Point Building 2nd Floor Unit 1A',
            ],
            (object)[
                'id' => 2,
                'name' => 'Dubai Logistic, Pte, Ltd',
                'address' => 'Central Avenue Building 32nd Floor Unit 3B',
            ],
            (object)[
                'id' => 3,
                'name' => 'PT. Maju Logistic',
                'address' => 'Kotabaru Gresik',
            ],
        ];
    }
}
