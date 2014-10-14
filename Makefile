PORT ?= 3000
be := env BUNDLE_GEMFILE=./_/Gemfile bundle exec

all:
	${be} jekyll build --drafts

start:
	${be} jekyll serve --drafts --watch --port ${PORT}

deploy:
	@# git push origin meetup-009:gh-pages meetup-009
	git push origin `git rev-parse --abbrev-ref HEAD`:gh-pages `git rev-parse --abbrev-ref HEAD`

autoprefix:
	@# npm install -g autoprefixer
	autoprefixer assets/style.css
