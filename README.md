# Blackthorn-Coding-Challenge

- set up 

	1) `git clone https://github.com/adeojoemmanuel/Blackthorn-api-test.git`

	2) `cd Blackthorn-api-test`

	3) `npm install`

- serve project 

	`node server`

# Create Cart Endpoints

## Base URL : 'https://blackthorn-entry-test.herokuapp.com/api/'

- *POST* `/create_cart`
```js
{
    userId : required, 11, int
    subtotal : required, 11, int
    discounts : required, 11, int
    taxes : required, 11, int
    total : required, 11, int
    productId : required, 11, int
    quantity : required, 11, int
    name : required, 11, character
    price : required, 11, int
}
```

# Update Cart Endpoints

- *POST* `/update_cart`
```js
{
    shoppingCartId : required, 11, int
    productId : required, 11, int
    quantity : required, 11, int
    name : required, 11, character
    price : required, 11, int
}
```

# Get Cart By User Id Endpoints

- *POST* `/get_cart_user_id`
```js
{
    userId : required, 11, int
}
```

# Get Cart By Cart Id Endpoints

- *POST* `/get_cart_id`
```js
{
    shoppingCartId : required, 11, int
}
```



- run test

	`npm test`


