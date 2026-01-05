# Notes

## Update Docker Container

1. `docker ps`
1. `docker exec -it <id> bash`
1. `apt-get install vim`
1. `vim dist/<file>`
1. Make changes
1. `exit`
1. `docker commit <id> <name>`
1. `docker run <new id>`

## Remove Docker Container

1. `docker stop <id>`
1. `docker rm <id>`

## Remove Image

1. `docker image rn <id>`
