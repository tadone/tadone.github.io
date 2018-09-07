---
title: Docker
sidebarDepth: 2
---

# Docker
---
**Version**
```bash
docker version
docker info
```
**Network**
* Docker uses ``docker0`` virtual bridge interface. Each new container gets one interface automatically attached to the ``docker0`` virtual bridge.
* Create network that other container will attach to and will be visible via name: ``docker network create -d bridge my-net`` (``-d`` Network Driver: bridge)
* Attach container to custom network: ``docker run --network my-net ...``

**Socket**  
Docker socket from within a container: ``-v /run/docker.sock:/run/docker.sock``


**Manage Docker as a non-root user**
The docker daemon binds to a Unix socket instead of a TCP port. By default that Unix socket is owned by the user root and other users can only access it using sudo. The docker daemon always runs as the root user.

If you don’t want to use sudo when you use the docker command, create a Unix group called docker and add users to it. When the docker daemon starts, it makes the ownership of the Unix socket read/writable by the docker group.

* Add the docker group if it doesn't already exist:
```bash
sudo groupadd docker
```
* Add the connected user "$USER" to the docker group. Change the user name to match your preferred user if you do not want to use your current user:
```bash
sudo gpasswd -a $USER docker
```
* Log out/in to activate the changes to groups.

* You can use ``docker run hello-world`` to check if you can run docker without sudo.

## Dockerfile
Better way of installing things when building docker images:

```Bash
RUN set -ex; \ # Fail when exit status not 0, print each command (debug)
	apt-get update; \
	apt-get install -y --no-install-recommends \
```

## Build & Push
Run docker build inside a directory containing single file called **Dockerfile**

| Command                                                                                | What it does                              |
| -------------------------------------------------------------------------------------- |:----------------------------------------- |
| ``docker build -t Registry/Image:tag . ``                                              | Build Docker image (-t with tag)          |
| ``docker build -t registry/image:tag registry/image:another_tag .``                    | Build image and use multiple tags         |
| ``docker build -f Dockerfile_custom -t docker.mot-solutions.com/msi/sessionmanager .`` | Specify custom Dockerfile                 |
| ``docker push docker.mot-solutions.com/msi/sessionmanager``                            | Push built image to registry              |
| ``docker build --no-cache ...``                                                        | Force Docker to clean rebuild every layer |
| ``docker tag 0e5574283393 fedora/httpd:version1.0``                                    | Tag an image referenced by ID             |
| ``docker tag httpd fedora/httpd:version1.0``                                           | Tag an image referenced by Name           |
| ``docker tag httpd:test fedora/httpd:version1.0.test``                                 | Tag an image referenced by Name and Tag   |

## Run



| docker run ...                           | Explained                                                      |
| ---------------------------------------- | -------------------------------------------------------------- |
| ``-d``                                   | In background, detached                                        |
| ``--name some-name``                     | Use some-name for container Name                               |
| ``-ti``                                  | Interactive, with pseudo terminal                              |
| ``-p HOST:CONTAINER``                    | Port mapping Ex. ``-p 8080:80``                                |
| ``--rm``                                 | Remove after container stops                                   |
| ``--privileged``                         | Disable SELinux protection for this container                  |
| ``ctrl+p ctrl+q``                        | Detach from container without stopping it                      |
| ``-v``                                   | Volume Mapping Ex. ``-v ${PWD}/config:/config``                |
| ``-v /run/docker.sock:/run/docker.sock`` | Map Docker socket                                              |
| ``--network my-net``                     | Use "my-net" network                                           |
| ``--restart``                            | Specify restart policy: no, on-failure, always, unless-stopped |


**Examples:**
```bash
# RUN
docker run -d --name my_container -v $PWD:/directory image:tag # Detached (in background)
docker run -it image:tag bash # Run bash shell inside of a container
docker run -d alpine:latest sh -c 'while true; do date; sleep 1; done'
docker run -p 8080:80 --name -e VAR=Value my_container image:tag  # docker run -p 8080:80
docker run --restart=always redis

# COPY
docker cp foo.txt mycontainer:/foo.txt                        # Copy from host to container
docker cp mycontainer:/foo.txt foo.txt                        # Copy form container to host
```

## Manage
| Command                                 | What it does                                                  |
| --------------------------------------- |:------------------------------------------------------------- |
| ``docker newtork ls``                   | List Docker networks                                          |
| ``docker volume ls``                    | List Docker volumes                                           |
| ``docker ps``                           | Show running containers                                       |
| ``docker ps -a ``                       | Show all containers (including stopped)                       |
| ``docker exec -it <my_container> bash`` | Attach to a running container with BASH shell                 |
| ``docker kill <my_container>``          | Kill running container                                        |
| ``docker rm <my_container>``            | Remove the container (including data inside)                  |
| ``docker stats``                        | Show Docker container system stats (CPU, Mem, IOs)            |
| ``docker stats <my_container>``         | Show stats for a single container                             |
| ``docker logs <my_container>``          | Show logs from a container                                    |
| ``docker inspect <my_container>``       | Return low-level information on Docker objects in JSON format |
| ``docker history <image>``              | Show the history of an image                                  |



## System

| Command                 | What it does                    |
| ----------------------- |:------------------------------- |
| ``docker system df``    | Show Docker disk usage          |
| ``docker system info``  | Display system-wide information |
| ``docker system prune`` | Remove unused data              |



## Docker-Compose
User version 2 over version 3. The version 3 is used when using docker swarm and removes syntax used in version 2.

| What it does                                   | Command                                |
| ---------------------------------------------- |:-------------------------------------- |
| Stand Up docker-compose.yml stack              | ``docker-compose up -d``               |
| Restart single service from docker-compose.yml | ``docker-compose restart <service>``   |
| Add service to docker-compose.yml and start it | ``docker-compose up -d --no-recreate`` |

### Logs
Show last 100 logs from docker-compose deployment
```bash
docker-compose logs
-f            # Follow log output
-t            # Show timestamps
--tail="100"  # Number of lines to show from the end of the logs
              # for each container
```

## Tips & Tricks
```bash
# ALIASES in .bashrc or .zshrc
alias dps='docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Ports}}"'
```
