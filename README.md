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

Use the branch gh-pages.

```sh
gem install github-pages   # install jekyll and other gems
make watch                 # starts the server
open http://localhost:3000
```

### Starting work on a new meetup

 * Tag the current meetup (`git tag meetup-009; git push --tags`)
 * Edit `index.html` to comment out the venue, drinkup, speakers, etc

### Deploying

Just git push.

Be sure to update Facebook's cache before sharing:

 * https://developers.facebook.com/tools/debug/og/object?q=http%3A%2F%2Fmanilajs.com

### Images

Header images are here:

    /images/header

Be sure to annotate:

    /images/header/README
