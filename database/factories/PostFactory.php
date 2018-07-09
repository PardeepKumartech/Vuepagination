<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence,
        'body' => $faker->realText(rand(100, 676)),
        'cover_pic' => $faker->imageUrl()
    ];
});