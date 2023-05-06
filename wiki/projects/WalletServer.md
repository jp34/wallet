# wallet-server

This project is a REST api server as part of the larger Healthcare Wallet project. This api manages interactions with our database and provides CRUD functionality on all datatypes. This api can be tested using the postman suite which is linked below. A list of available endpoints is also available below.

## Links

* Postman - [Suite](https://solar-robot-553185.postman.co/workspace/HealthcareWallet~5c32121d-1a2f-41a9-8e71-b2777d4ca75e/overview?ctx=settings) | [Invite](https://app.getpostman.com/join-team?invite_code=73f482e8b415f088198fa71e98d3b3a0&target_code=d43c921445a3143426480b792569e8ca)
* Docker - [Image]()

## Endpoints

### Auth
Signup => POST /auth/signup  
Login  => POST /auth/login  
Refresh Token => POST /auth/refresh  

### Users
GetAll => GET /users  
GetOne => GET /users/:id  
Update => PUT /users/:id  
Delete => DELETE /users/:id  

### Patients
Create => POST /patients/:id  
GetAll => GET /patients  
GetOne => GET /patients/:id  
Update => PUT /patients/:id  
Delete => DELETE /patients/:id  

### Patient Allergies
Create => POST /patients/:id/allergies  
GetAll => GET /patients/:id/allergies  
GetOne => GET /patients/:id/allergies/:name  
Update => PUT /patients/:id/allergies/:name  
Delete => DELETE /patients/:id/allergies/:name  

### Patient Medications
Create => POST /patients/:id/medications  
GetAll => GET /patients/:id/medications  
GetOne => GET /patients/:id/medications/:name  
Update => PUT /patients/:id/medications/:name  
Delete => DELETE /patients/:id/medications/:name  

### Patient Medical Encounters
Create => POST /patients/:id/encounters  
GetAll => GET  /patients/:id/encounters  
GetOne => GET /patients/:id/encounters/:date  
Update => PUT /patients/:id/encounters/:date  
Delete => DELETE /patients/:id/encounters/:date  
