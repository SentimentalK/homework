build:
	docker build . --network=host -t homework
run:
	docker run --net=host --name homework homework
rerun:
	docker restart $$(docker ps -a --filter "name=homework" -q)
clean:
	docker rmi $$(docker images --filter "dangling=true" -q --no-trunc)
stop:
	docker stop $$(docker ps -a --filter "name=homework" -q)
	docker rm $$(docker ps -a --filter "name=homework" -q)
cypress-dev:
	yarn run cypress open
docker-run:
	make build
	make run