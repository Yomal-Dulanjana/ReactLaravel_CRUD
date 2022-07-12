<?php

namespace App\Http\Controllers\Api;

use App\Models\Shop;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShopController extends Controller
{
   
    public function index()
    {
        $shops = Shop::all();
        return $shops;
    }

    
    public function store(Request $request)
    {
        $shops = new Shop();
        $shops->shop_name = $request->shop_name;
        $shops->shop_address = $request->shop_address;
        $shops->contact_number = $request->contact_number;
        $shops->is_have_fax = $request->is_have_fax;
        $shops->fax_number = $request->fax_number;

        $shops->save();
    }

    
    public function show($id)
    {
        $shop = Shop::find($id);
        return $shop;
    }

    
    public function update(Request $request, $id)
    {
        $shop =Shop::findOrFail($request->id);
        $shop->shop_name = $request->shop_name;
        $shop->shop_address = $request->shop_address;
        $shop->contact_number = $request->contact_number;
        $shop->is_have_fax = $request->is_have_fax;
        $shop->fax_number = $request->fax_number;

        $shop->save();
        return $shop;
    }

    
    public function destroy($id)
    {
        $shop = Shop::destroy($id);
        return $shop;
    }
}
