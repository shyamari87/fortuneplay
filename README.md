# fortuneplay
For the Test related to Fortune of the day

Assumption :

Angular app - for scrapping
It assumes that devops member has local node js  & docker setup

Ngnix docker image to serve as web server

For docker capability, its being build as stand alone container.

However there could be options as  docker compose & docker stack with the help swarm cluster

Commands for the Angular Application Build & Docker image creation.

# ng build --prod
docker build . -t shyamari/fortuneplay:v1.0
docker push shyamari/fortuneplay:v1.0  # push to Docker Hub 
