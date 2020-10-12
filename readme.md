# Rethink Plaintext Editing

This is our frontend coding challenge. It gives us a chance to see your abilities and how you approach problems. It is designed to give you unlimited creative freedom as you develop a solution. Feel free to use any packages/tools/etc. you'd like to edit text as elegantly as possible. There are a variety of different file types to experiment with as you see fit.

To run the challenge:

- FORK this repo
- Download forked repo and run `npm install && npm run dev`
- Open `localhost:3000` in your browser
- Enjoy

Once complete, please email us a link to your forked repo with clean, tested code. We will use Chrome to run it.

- Rethink Engineering

![editor_1](https://github.com/Suyash906/book-search/blob/main/screenshots/editor_1.png)

![editor_2](https://github.com/Suyash906/book-search/blob/main/screenshots/editor_2.png)

## Solution approach
- _react-markdown_ npm package has been added to visualize the markdown changes.
- As per the requirements, txt file editor and markdown editor has been implemented.
- changes in the file have been made persistent by saving the data in MongoDB.

## Tech Spec
- Backend - Node.js
- Frontend - React.js
- Database - MongoDB

## Steps to run the project
- **Backend**
  - git clone https://github.com/Suyash906/planetext-editing-backend
  - switch to branch "main"
  - cd server
  - run "npm install"
  - run "node index.js"
- **Frontend**
  - git clone https://github.com/Suyash906/rethink-plaintext-editing.git
  - Switch to branch "backend_added"
  - cd client
  - run "npm install"
  - run "npm run dev"

## Limitations and Assumptions
- Localstorage can be used to save the data on client side only. There will be no need of backend in such a scenarion. But I feel saving the data in database would also allow the data to be persisted across sessions. Also, it is much closer to real-life implementation of online file editors.
- Since I mannualy copied the text of files and saved into the database, the next line delimter of js and json file got a little distorted.
