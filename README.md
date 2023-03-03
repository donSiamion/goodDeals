# Plan
## ---Backend GoodDeals---

TS, NestJS, MongoDB, Docker
#### Users
actions  :
+ registration/authorization
+ updateSettings/deleteUser

table  users:
 ```
id
login
pass
name
frends
 ```
 
 ### Deals
 
 actions  :
  * create/edit/remove
 
table deals:
```
id
userId
heder
text
lastUpadteTime
```

start:
npm start


## ---Frontend GoodDeals---

TS, React, NextJS, Redux, Tailwind

actions: 
  * registration/authorization
  * updateSettings/deleteUser
  * editDeals
 
#### pages
auth:
registration/sign

listGoodDeeds:
create/edit/remove

## TODO:
1. test Docker image!!!
