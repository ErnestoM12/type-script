<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreprofessionRequest;
use App\Http\Requests\UpdateprofessionRequest;
use App\Models\profession;

class ProfessionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreprofessionRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreprofessionRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\profession  $profession
     * @return \Illuminate\Http\Response
     */
    public function show(profession $profession)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateprofessionRequest  $request
     * @param  \App\Models\profession  $profession
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateprofessionRequest $request, profession $profession)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\profession  $profession
     * @return \Illuminate\Http\Response
     */
    public function destroy(profession $profession)
    {
        //
    }
}
