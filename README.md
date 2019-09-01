hotel automate api
- set up for dev

	1) `git clone https://github.com/adeojoemmanuel/hotelautomate.git`

	2) `cd hotelautomate`

	3) `npm install`

- serve project 

	`node server`

# register account to device

## Base URL : 'https://hotelautomate.herokuapp.com/api/'

- *POST* `/register_occupants`

```js
{
    deviceid : required, 11, int
    guest_fname : required, 11, int
    guest_lname : required, 11, int
    guest_tag : required, 11, [list []
}
```

# list all screens

- *POST* `/list_screen`

```js
{
    empty
}
```

# create new screen 

- *POST* `/create_screen`

```js
{
    deviceId : required, 11, string
    uuid : required, 11, string
    room_class : required, 11, string
    room_num : required, 11, string
}
```

# list all available channels based on user tags

- *POST* `/available_channels`
```js
{
    tags : required, 11, list []
}
```



- run test

	`npm test`


<!-- https://stackoverflow.com/questions/11803496/dump-sql-file-to-cleardb-in-heroku -->