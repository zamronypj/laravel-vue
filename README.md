# Laravel Vue Demo application

Demo web application to demonstrate how to use Vue.js in Laravel

## Requirement

- PHP >= 7.4
- Composer
- NPM

## Installation

```
$ git clone https://github.com/zamronypj/laravel-vue.git
$ cd laravel-vue
$ cp .env.example .env
$ composer install
$ npm install
$ php artisan key:generate
```

## Build

Build frontend JS, Sass etc

```
$ npm run dev
```

## Run

To run application,

```
$ php artisan serve
```

or using Laravel Sail

```
$ ./vendor/bin/sail up
```

But make sure you check if MySQL port and http port are not used. If used, you need to
change `FORWARD_DB_PORT`, `DB_PORT` and or `APP_PORT` environment variables so that it does not conflict.

To stop, just press Ctl+C or

```
$ ./vendor/bin/sail down
```
