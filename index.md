---
layout: event

images:
  - http://www.manilajs.com/images/016/share/share-a.png
  - http://www.manilajs.com/images/016/share/share-b.png
  - http://www.manilajs.com/images/016/share/share-c.png
  - http://www.manilajs.com/images/016/share/share-d.png
  - http://www.manilajs.com/images/016/share/see-you-later.png

event:
  series: "016"
  date: 2016-02-05
  time: 7PM
  location: VentureSpace PH, Shaw Boulevard

registration:
  date: 2016-02-01
  state: closed # announce | open | closed | over
  signup: http://goo.gl/forms/ZNHNImCMrR

hero:
  color: "#203a4f"
  opacity: 0.20
  image: images/016/bg.jpg
  # :: current image is under Creative Commons Zero however,
  #    so no attribution is required. Might as well though, yeah?
  attribution_source: "NASA"
  attribution_url: "https://unsplash.com/photos/NuE8Nu3otjo"

# -- Comment out the venue if it's TBD --
venue:
  name: VentureSpace PH
  icon: images/016/v-vs.png
  url: https://www.facebook.com/VentureSpacePH/
  map: https://goo.gl/maps/wbPWmDD9vn72
  address: |
    724 Shaw Boulevard<br>
    Mandaluyong City

# -- Comment out the drinkup if it's not available --
# drinkup: <see above>

speakers:
- name: Joe Palala
  avatar: "images/016/u-jpalabs.jpg"
  title: Cognizant
  url: http://jpalala.com
  github: jpalala
  twitter: jpalala
  description: |-
    Joe lovingly calls his talk "Asyncs, Promises, and avoiding callback hell."
    He'll talk about dealing with complexities in wrangling long-running functions, and harnessing Javascript's power to build fast, reliable apps using asynchronous callbacks.

- name: Rico Sta. Cruz
  avatar: "images/016/u-rstacruz.jpg"
  title: MashupGarage
  url: http://ricostacruz.com
  github: rstacruz
  twitter: rstacruz
  description: |-
    Are you wondering why npm is slow? Rico will be sharing his experiences in building <a href='https://github.com/rstacruz/pnpm'>pnpm</a>, a faster implementation of npm.

mailchimp:
  group_id: 4096 # typically 2^(series+3), not used

##############################################################################
---

Let's talk about the future of the web.
{:.pull-quote-heading.align-left.bottom-space-1}

Let's have an evening of updates from the JavaScript community. Join us for a
fun night of talks and camaraderie—beginners and experts welcome.
{:.sans-pull-quote.top-collapse-0}

<!-- Call to action -->
{% include register-cta.html %}

* * * *

## Speakers

{% include speaker-list.html %}

### Still open for speakers!
The floor is open to anyone who has something interesting to share.
[Here are some details.](p/submitting-a-talk.html)

Manila.js Fridays happens (usually) every first Friday of the month.
Everybody's welcome!  Expect learning, fun, and happy conversations from people
just like you.  This event is free. Bring your friends!

<!--
<br>
#### Manila JavaScript Community Meetup
{:.pull-quote-heading}

Let's have an evening of updates from the JavaScript community. Join us for a
fun night of talks and camaraderie—beginners and experts welcome.
{:.pull-quote}
-->

<!-- Big venue image -->
{% include panorama.html image="images/012/panorama.jpg" %}

#### Our venue is

{% if page.venue %}
{% include location-box.html venue=page.venue %}{% else %}
{% include location-box-tbd.html %}{% endif %}

{% if page.venue %}
Special thanks to our generous venue sponsor, [{{ page.venue.name }}]({{ page.venue.url }}), for making our meetup possible.
{% endif %}

* * * *

### Thanks!

Need directions or any help? Interested in speaking or sponsorship? Contact
Rico at [hi@ricostacruz.com](mailto:hi@ricostacruz.com) or 0908 864 8125.

Manila.js is made possible by the JS community volunteers who have been
organizing and volunteering to make Manila.js events possible.
