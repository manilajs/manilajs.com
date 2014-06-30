ManilaJS.com website
====================

Yes.

What's in here
--------------

 * http://manilajs.com/timer - Timer mini-app
 * http://manilajs.com/e/ - Email archive

Developer notes
---------------

### Working on the site locally

```js
gem install github-pages   # install jekyll and other gems
make watch                 # starts the server
open http://localhost:8000
```

### Starting work on a new meetup

    git checkout -b meetup-009

### Deploying

    git push origin meetup-009:gh-pages

### index.html

In index.html, you mostly only need to edit the `meta` and `link` tags up top.
