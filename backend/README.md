```
## spin up mysql docker container
docker-compose up -d

## build artifact
mvn clean package

## start up spring boot app
java -jar target/accessing-data-mysql-complete-0.0.1-SNAPSHOT.jar 

## testing add user
$ curl localhost:8080/demo/add -d name=First -d email=someemail@someemailprovider.com

## testing get user
$ curl 'localhost:8080/demo/all'

```