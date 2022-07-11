# Nodejs Blog Using Microservices
In this simple example, we are going to design a simple blog system using the microservice architecture. There are only two entitties called posts and comments. This project is not a template for a real-world project.

1. Create a react project:
```bash 
$> npx create-react-app client
$> cd client
$> npm install axios
$> npm start
```

2. Create a directory for ==posts== and initialize it
```bash
$> mkdir posts
$> cd posts
$> npm init -y
$> npm install express cors axios nodemon
```

3. Create a directory for ==comments== and initialize it
```bash
$> mkdir comments
$> cd comments
$> npm init -y
$> npm install express cors axios nodemon
```

4. Create a directory for ==event-bus== and initialize it
```bash
$> mkdir event-bus
$> cd event-bus
$> npm init -y
$> npm install express nodemon axios
```

5. Create a directoy for ==query== service and initialize it:
```bash
$> mkdir query
$> cd query
$> npm init -y
$> npm install express cors nodemon axios
```

6. Create a directory for ==moderation== service and initialize it:
```bash
$> mkdir moderation
$> cd moderation
$> npm init -y
$> npm i axios express nodemon
```