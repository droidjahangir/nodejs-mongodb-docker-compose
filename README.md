## Run this project
```
docker compose up -d --build
```

## install jenkins using docker
```
docker run -p 8080:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts-alpine
```
or can use with docker compose file
port 50000 for jenkins cluster worker node