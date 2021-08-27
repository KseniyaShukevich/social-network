run: 
	sudo docker run -d -p 3000:3000 --name test --rm kseniyashukevich/test
stop:
	sudo docker stop test