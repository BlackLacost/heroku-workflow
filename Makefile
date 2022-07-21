include .env
dir_name = $(notdir $(abspath .))
site_name = ${PREFIX}-${PROJECT_NAME}
postgres_name = ${site_name}-db

create:
	heroku create ${site_name} --region eu

push:
	git push heroku main

deploy: create push

destroy:
	heroku destroy ${site_name} --confirm=${site_name}

redeploy: destroy deploy