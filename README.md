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


## Usage
### Install app packages
```
npm install express mongoose body-parser dotenv
```
### Install Nodemon For Development
```
npm install -D nodemon
```
Add mongoURI to connect to the database


