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


# Resources
1. https://aws.plainenglish.io/building-a-stunning-ci-cd-pipeline-for-your-nodejs-app-using-jenkins-and-docker-f100a901c51f
2. 
