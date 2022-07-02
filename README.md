# Nodejs Blog Using Microservices
In this simple example, we are going to design a simple blog system using the microservice architecture. There are only two entitties called posts and comments. This project is not a template for a real-world project.

1. Create a react project:
```bash 
$> npx create-react-app client
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