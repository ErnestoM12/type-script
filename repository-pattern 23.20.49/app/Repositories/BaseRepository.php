<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class BaseRepository
{
    protected $model;
    private $relations;

    public function __construct(Model $model, array $relations = [])
    {
        $this->model = $model;
        $this->relations = $relations;
    }


    public function all()
    {
        $query = $this->model;

        $query->with(relations: $this->relations);

        return $query->get();
    }

    public function get(int $id)
    {

        return $this->model->find($id);
    }


    public function save(Model $model)
    {
        $model->save();
        return $model;
    }
}
