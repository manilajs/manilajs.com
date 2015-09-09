PORT ?= 3000
nom := ./node_modules/.bin

start: start-jekyll

start-serveur: bundle
	@if [ ! -x ${nom}/multiexec ]; then npm install multiexec; fi
	@if [ ! -x ${nom}/serveur ]; then npm install serveur; fi
	${nom}/multiexec \
		"bundle exec jekyll build --watch" \
		"${nom}/serveur -R _site --port ${PORT}"

start-jekyll: bundle
	bundle exec jekyll serve --safe --drafts --watch --port ${PORT}

build: bundle
	bundle exec jekyll build

bundle:
	@ruby -v
	@node -v
	bundle

test:
	test -f _site/index.html

fb:
	open "https://developers.facebook.com/tools/debug/og/object?q=http%3A%2F%2Fmanilajs.com"
