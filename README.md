# Shopify-Backend-Developer-Intern-Challenge


## TASK
Build an inventory tracking web application for a logistics company. We are looking for a web application that meets the requirements listed below, along with one additional feature, with the options also listed below. 

Basic CRUD Functionality. You should be able to:

- Create inventory items
- Edit Them
- Delete Them
- View a list of them
- When deleting, allow deletion comments and undeletion


## Routes 
- GET product/
- POST product/
- POST edit/
- GET delete/
- POST delete/
- POST delete/undo/:id


## Database diagram
<img width="431" alt="db_shopify" src="https://user-images.githubusercontent.com/21370009/172885646-9d311752-a98e-4555-9ce6-b5f06831cc91.png">

## Setup
### Install app packages
```
npm install express mongoose body-parser dotenv
```
### Install Nodemon For Development
```
npm install -D nodemon
```
Add mongoURI to connect to the database

## Usage

### GET product/
```
[

    {

        "_id": "62a02e9b5cce7264105f3ef4",

        "ItemId": "prod121",

        "Name": "Colgate Max Fresh",

        "quant": 10,

        "desc": "Keep your cool with fresh breath toothpastes and toothbrushes that give you the confidence to connect.",

        "price": 80,

        "updated": "2022-06-08T06:11:02.712Z",

        "created": "2022-06-08T05:07:39.966Z",

        "__v": 0,

        "brand": "Colgate"

    },

    {

        "_id": "62a03fc5479aa2bc6de53b78",

        "ItemId": "prod122",

        "Name": "Amut butter",

        "quant": 12,

        "desc": "Pasteurized Amul butter is a delicious bread spread, an essential ingredient of baking and a known enhancer for many food items.",

        "price": 60,

        "updated": "2022-06-08T06:21:40.595Z",

        "created": "2022-06-08T06:20:53.819Z",

        "__v": 0,

        "brand": "Amul"

    },

    {

        "_id": "62a179a3638c5105a9be4534",

        "ItemId": "prod123",

        "Name": "Optic White",

        "quant": 8,

        "brand": "Colgate",

        "desc": "Get a brighter, whiter smile when you use Colgate Optic White toothpaste, mouthwash, and toothbrush products during your oral care routine.",

        "price": 120,

        "updated": "2022-06-09T04:40:03.879Z",

        "created": "2022-06-09T04:40:03.887Z",

        "__v": 0

    }

]

```




