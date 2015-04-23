PORT ?= 3000
bundle := env BUNDLE_GEMFILE=./_/Gemfile bundle

start: bundle
	${bundle} exec jekyll serve --drafts --watch --port ${PORT}

build: bundle
	${bundle} exec jekyll build --drafts

bundle:
	${bundle}

autoprefix:
	@# npm install -g autoprefixer
	autoprefixer assets/style.css
