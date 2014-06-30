all:
	jekyll build --drafts

start:
	@echo "=> starting server and watching for changes"
	@mkdir -p _site
	make && make watch & (cd _site && python -m SimpleHTTPServer)

watch:
	@echo "=> watching for changes"
	@git ls-files | entr make

deploy:
	git push origin `git rev-parse --abbrev-ref HEAD`:gh-pages

