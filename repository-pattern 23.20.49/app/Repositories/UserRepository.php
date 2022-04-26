<?php

namespace App\Repositories;

use App\Models\User;

//en este caso tenia relaciones con carros y los carros con multas




class UserRepository extends BaseRepository
{
    //un usuario tiene carros y los carros tickects
    const RELATIONS = ['professions'];

    public function __construct(User $user)
    {
        parent::__construct($user, self::RELATIONS);
    }
}
