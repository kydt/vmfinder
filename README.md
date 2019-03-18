# Set up
```
npm install
npm run start
```

# Go to
``` 
http://localhost:8000/
```

# REST Api Examples

## User table

**GET all users**
```
http://localhost:8000/api/users
```
**GET user by id**
```
http://localhost:8000/api/users/1
```
**POST create user**
```
http://localhost:8000/api/user?name=value
```
**PATCH update user** > User POSTMAN > body > 'x-www-form-urlencoded' > pass in name and value
```
http://localhost:8000/api/user/id
```
**DELETE user by id**
```
http://localhost:8000/api/user/id
```
