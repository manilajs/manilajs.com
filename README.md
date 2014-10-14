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

    # archive the old meetup into a branch
    # (eh, shouldn't we use tags instead? dunno)
      git push origin develop:meetup-010

### Deploying

    make deploy
    # ...or: git push origin develop:gh-pages develop

Be sure to update Facebook's cache before sharing:

 * https://developers.facebook.com/tools/debug
