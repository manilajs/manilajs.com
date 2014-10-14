PORT ?= 3000
bundle := env BUNDLE_GEMFILE=./_/Gemfile bundle

all: bundle
	${bundle} exec jekyll build --drafts

start: bundle
	${bundle} exec jekyll serve --drafts --watch --port ${PORT}

bundle:
	${bundle}

deploy:
	@# git push origin meetup-009:gh-pages meetup-009
	git push origin `git rev-parse --abbrev-ref HEAD`:gh-pages `git rev-parse --abbrev-ref HEAD`

autoprefix:
	@# npm install -g autoprefixer
	autoprefixer assets/style.css
