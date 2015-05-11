---
layout: event

event:
  series: "011"
  date: 2015-05-08
  time: 7PM
  location: A Space, Makati
  share_image: "http://manilajs.com/images/share/011-landscape.png"

mailchimp:
  group_id: 4096 # typically 2^(series+3)

registration:
  date: 2014-04-28
  state: over # announce | open | closed | over
  signup: "http://goo.gl/forms/ar9Mxnjnny"

hero:
  color: "#203a4f"
  opacity: 0.40
  image: images/longexposure.jpg
  # attribution_source: "aspacemanila.com"
  # attribution_url: "https://www.flickr.com/photos/hackny/7033121879/"

# -- Comment out the venue if it's TBD --
venue:
  name: A Space Manila Coworking Studio
  panorama: images/bg-aspace.jpg
  icon: images/aspace.jpg
  url: http://aspacemanila.com/
  map: https://goo.gl/maps/kuhS4
  address: 110 Legazpi St., Makati City

# -- Comment out the drinkup if it's not available --
# drinkup: <see above>

speakers:
- name: Joy Paas
  # url: ...
  avatar: images/u-joypaas.png
  title: Quipper
  github: kjcpaas
  # twitter: username
  description: |-
    Joy will be sharing her experiences in building realtime applications using React.js and Pusher.com's realtime messaging service.

- name: Diwa del Mundo
  url: https://github.com/diwadm
  #avatar: http://www.gravatar.com/avatar/0cc0963379122e83693ee66d5b28ae37.png
  avatar: https://avatars0.githubusercontent.com/u/209127?v=3&s=400
  github: diwadm
  title: Voyager Innovations
  description: |-
    Diwa will be sharing some insights on his test-driven JavaScript development process using Mocha, Chai.js, and Sinon.

##############################################################################
---

## Let's try something different.
Instead of having speaking presentations, we'll have an open discussion to share how JavaScript has shaped our web development work. I'll be picking the brains of seasoned professionals on some relevant topics, such as:

* __ES6__: Have you adopted it? Why or why not? Has it helped?
* __Grunt/Gulp__: How has modern frontend development tools shaped your workflow?
* __io.js__: How is the future of Node.js going to be?
* __Anything else__: feel free to suggest topics!

<!-- Call to action -->
{% include register-cta.html %}

* * * *

## Speakers

{% include speaker-list.html %}

### Still open for speakers!
The floor is open to anyone who has something interesting to share.
[Here are some details.](p/submitting-a-talk.html).

Manila.js Fridays happens (usually) every first Friday of the month.
Everybody's welcome!  Expect learning, fun, and happy conversations from people
just like you.  This event is free. Bring your friends!

<br>

#### Manila JavaScript Community Meetup
{:.pull-quote-heading}

Let's have an evening of updates from the JavaScript community. Join us for a
fun night of talks and camaraderie—beginners and experts welcome.
{:.pull-quote}

<!-- Big venue image -->
{% if page.venue.panorama %}{% include panorama.html image=page.venue.panorama %}{% endif %}

#### Our venue is

{% if page.venue %}
{% include location-box.html venue=page.venue %}{% else %}
{% include location-box-tbd.html %}{% endif %}

Special thanks to our generous venue sponsor, [Quipper](http://quipper.com),
for making our meetup possible.

* * * *

### Thanks!

Need directions or any help? Interested in speaking or sponsorship? Contact
Rico at [hi@ricostacruz.com](mailto:hi@ricostacruz.com) or 0908 864 8125.

Manila.js is made possible by the JS community volunteers who have been
organizing and volunteering to make Manila.js events possible. 
