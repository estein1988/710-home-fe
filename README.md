# 7-10 Home Split

7-10 Home Split is a developed as a full CRUD application to help users connect with each other in the Denver area to purchase a home together. As with many metropolitan areas in the United States Denver real estate prices have continued to skyrocket. Even in 2020, the year of the pandemic and unstable economic conditions, home prices have continued on an upward trajectory. This prices many millennials and Gen-xers out of the market, having them gain little to no equity in the early-stages of their career. This app is intended as a way for them to connect with each other based on liked-budgets and hobbies. 

## Built With
Frontend: React 17.0.1, Google Maps API, Semantic UI, Material UI<br>
Backend: Python 3.7.9, Django v3.1.2, Django Rest Framework v3.12.1, Django Rest Framework Simple JWT 4.4.0, PostgreSQL v13.0

### Backend Repository
https://github.com/estein1988/710_home_split_be

### Demo Video
[Demo Video](https://www.youtube.com/watch?v=qRIJAES9l9E&feature=youtu.be)

### API Sources
- Realtor.com API for Real Estate Listings: [Realtor API](https://rapidapi.com/apidojo/api/realtor/endpoints)
- Google Maps API for map interface: [Google Maps API](https://developers.google.com/maps/documentation)

## App Features

### Registration
New users can register and gain access through a local storage JWT access token. Users develop a profile with their budget in-mind, hobbies, interests and when their current lease-ends. Following registration, the new user can log-in through the site's home page.

### Listings 
The listings page shows 100 live listings through the Realator.com API. Each listing is plotted dynamically on the Google Map interface. Users can run a search through each listing's address, which filters down both the cards and the map icons. The green icons on the map are under the user's budget, while the red icons are over their budget. Users can like listings, and see which other users have liked the same listing. Finally, after toggling-down the listing card, the user can pop-up a modal which shows all other users who have liked the same listing with their profile information. 
<br>

![Alt Text](https://media.giphy.com/media/XIaQdDJB4YB8MMBFgw/giphy.gif)
<br>
![Alt Text](https://media.giphy.com/media/AvQlwWiLFWHujfJCkI/giphy.gif)

### Mortgage Calculator
On the left side of the calculator, the user is shown a form which calculates their monthly payment if they were buying a home entirely on their own. The right form shows the same home purchase, but taxes, insurance and monthly payments split in half. The two totals show a stark difference between monthly payments. The suggested income is calculated under the assumption the user will not want to spend more than 3x of their monthly gross pay on a mortgage payment. The user is allowed to change certain assumptions (e.g. purchase price), considering their own circumstances. The pie charts dynamically render based on the new form inputs and there is a feature to fetch today's mortgage rates by zip code. 
<br>
![Alt Text](https://media.giphy.com/media/OOLzssLllrCMF5EKDm/giphy.gif)

### User Profiles
The user can view their individual profile and make updates if they need to based on a new budget or hobbies. The user is able to see all their past likes to-date too and remove each one individually as they wish. There is also a global search feature, which all users can search other users by hobby and view their budgets to see if they may be a good partner for a home purchase.
<br>
![Alt Text](https://media.giphy.com/media/vl9IUahOto5fMVcHEX/giphy.gif)

## Challenges
- Building a Django backend for the first-time.

- Django JWT with protected end-points.

- Finding good, reliable real estate data at a low cost. 

## Future Implementation

- Pay for MLS data so listings can update in real-time. The listings I used were all real from the Realator.com API, but my subscription was only intended to be for a one-time use. I hit the API once, and folded the response into my data. 
- Develop app a React-native for iPhone use.
- Deployment is always an option for any of my projects.

## Collaboration

1. Fork and/or clone this repo & the backend repo: [Backend Repo](https://github.com/estein1988/710_home_split_be)
2. Create PostgreSQL database: `createdb homesplit`
3. Migrate database tables in backend: `python3 manage.py migrate` and `python3 manage.py loaddata home`
4. Run backend server: `python3 manage.py runserver`
5. Install dependencies on frontend: `npm install`
6. Run frontend server: `npm start`
7. Checkout new branch
   

If you'd like to collaborate on this project, please email me: estein1988@gmail.com or at https://www.linkedin.com/in/steinelliott/ 