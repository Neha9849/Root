# Root
---
## Demo

View on [Demo](https://root-blogging-app.herokuapp.com/)

---
## What is this Application?

 Root is a blogging Application where
- Users can sign in using google oauth.
- Users can create, read, update and delete blogs.
- Users has a dashboard where his/her activity and details will be Shown.
- Users can edit their Profile Details.
- Users can view others Profiles.
---
## Built with
NodeJs    - Runtime env

Express   - Backend Framework

Mongodb   - Database

EJS       - Templating Engine

CKEditor  - Editor for writing blogs

---
## Local Setup 👩‍💻
> Make sure to have Node and NPM installed
1. Clone this repo
   ``` git clone https://github.com/Neha9849/Root  ```
 2. Change directory
  ``` cd Root ```
 3. Install the dependencies
  ``` npm i ```
  
 4. Create a .env file with following keys
  ```
  PORT = 3000
  MONGO_URI = <mongodb key>
  GOOGLE_CLIENT_ID=<your client id>
  GOOGLE_CLIENT_SECRET=<your secret>

  ```
5. Start the server
   ```npm start ```
   
6. If you have nodemon than use ```npm run dev``` to start live server.
7. navigate to http://localhost:3000/
