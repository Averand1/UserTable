# User Detail Table

This repository contains data related to users with different criteria. The following information will guide you on how to use the API endpoints to access this data:

# Project Overview


This project is a full-stack web application that utilizes MongoDB database, Node.js, Express, Next.js, React, and Material UI. The application uses the provided `sample-data.json` file to store user data in MongoDB, and exposes RESTful APIs to query and retrieve data. The frontend is built with Next.js, React, and Material UI, and displays all the data in table format.

You can run the **frontend** by `'npm run dev'`
You can run the **backend** by `'node server.js or nodemon server.js'`
## Backend

*I have ran all the API endpoints on `localhost` on port `5000`* and tested it on Postman and in `server.js` I have read the MongoDB_URL from environment variable


 ### 1. /api/lowincome

This API endpoint returns data related to users with income less than $5 and have a car of brand "BMW" or "Mercedes-Benz". You can access this data by sending a GET request to the URL `/api/lowincome`. The response will be in JSON format and will contain the following fields:

-   id: unique identifier for each user
-   first_name: first name of the user
-   last_name: last name of the user
-   email: email address of the user
-   car: brand of the user's car
-   income: income of the user in USD
-  gender: gender of the user
-  quote: quote of the user
-  phone_price: phone price of the user
-  city: city of the user

### 2. /api/expensive

This API endpoint returns data related to male users with phone price greater than $10,000. You can access this data by sending a GET request to the URL `/api/expensive`. The response will be in JSON format and will contain the following fields:

-   id: unique identifier for each user
-   first_name: first name of the user
-   last_name: last name of the user
-   email: email address of the user
-   car: brand of the user's car
-   income: income of the user in USD
-  gender: gender of the user
-  quote: quote of the user
-  phone_price: phone price of the user
-  city: city of the user

### 3. /api/quotes

This API endpoint returns data related to users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name. You can access this data by sending a GET request to the URL `/api/quotes`. The response will be in JSON format and will contain the following fields:

-   id: unique identifier for each user
-   first_name: first name of the user
-   last_name: last name of the user
-   email: email address of the user
-   car: brand of the user's car
-   income: income of the user in USD
-  gender: gender of the user
-  quote: quote of the user
-  phone_price: phone price of the user
-  city: city of the user

### 4. /api/nodigits

This API endpoint returns data related to users who have a car of brand "BMW", "Mercedes" or "Audi" and whose email does not include any digit. You can access this data by sending a GET request to the URL `/api/nodigits`. The response will be in JSON format and will contain the following fields:

-   id: unique identifier for each user
-   first_name: first name of the user
-   last_name: last name of the user
-   email: email address of the user
-   car: brand of the user's car
-   income: income of the user in USD
-  gender: gender of the user
-  quote: quote of the user
-  phone_price: phone price of the user
-  city: city of the user

### 5. /api/topcities

This API endpoint returns data related to the top 10 cities which have the highest number of users and their average income. You can access this data by sending a GET request to the URL `/api/topcities`. The response will be in JSON format and will contain the following fields:

-   _id: name of the city
-   count: total number of users in the city
-   avg_income: average income of the users in the city
## Frontend



### 1. PhonePrice.js

This component displays data related to male users with phone price greater than $10,000.

### 2. NoDigits.js

This component displays data related to users who have a car of brand "BMW", "Mercedes" or "Audi" and whose email does not include any digit. 

### 3. LowIncome.js

This component displays data related to users with income less than $5 and have a car of brand "BMW" or "Mercedes".

### 4. AverageIncome.js

This component displays data related to the top 10 cities which have the highest number of users and their average income.

### 5. BmwMercedes.js

This component displays data related to users with income less than $5 and have a car of brand "BMW" or "Mercedes". 

** **

 **Development Stack**: MongoDB, React, NextJS, Material UI, NodeJS, Express

