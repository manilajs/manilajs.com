---
layout: event

images:
  - http://manilajs.com/images/share/012-sky.png
  - http://manilajs.com/images/share/012-testing.png
  - http://manilajs.com/images/share/012-future-2.png
  - http://manilajs.com/images/share/012-landscape.png
  # http://manilajs.com/images/share/012-white-a.png
  # http://manilajs.com/images/share/011-generic.png
  # http://manilajs.com/images/share/012-landscape.png
  # http://manilajs.com/images/share/012-white-b.png
  # http://manilajs.com/images/share/012-see-you-later.png
  # http://manilajs.com/images/share/012-see-you-later-2.png

event:
  series: "012"
  date: 2015-06-05
  time: 7PM
  location: Clinic+, Makati

mailchimp:
  group_id: 4096 # typically 2^(series+3), not used

registration:
  date: 2015-06-01
  state: closed # announce | open | closed | over
  signup: "http://goo.gl/forms/mOzG0q7Vzf"

hero:
  color: "#203a4f"
  opacity: 0.30
  image: images/012-bg.jpg
  # attribution_source: "aspacemanila.com"
  # attribution_url: "https://www.flickr.com/photos/hackny/7033121879/"

# -- Comment out the venue if it's TBD --
venue:
  name: Clinic+ Offices
  # icon: images/aspace.jpg
  url: http://clinicny.com
  map: https://goo.gl/maps/H4m8n
  address: Unit 5B L&F Building, Aguirre Street, Legazpi Village, Makati

# -- Comment out the drinkup if it's not available --
# drinkup: <see above>

speakers:
- name: Alistair Roche
  # url: ...
  avatar: "images/012-u-atroche.png"
  title: Zendesk
  github: atroche
  twitter: atroche
  description: |-
    Alistair is visiting from Melbourne and he'll be talking about some pretty mind-blowing things.
    He's been using Babel + Webpack + React on a sideproject, so he's total badass.

- name: Joshua Lat
  # url: ...
  avatar: "images/012-u-joshualat.png"
  title: Dealgrocer
  url: http://joshualat.com/
  # github: 
  # twitter: username
  description: |-
    Josh will be speaking about some wicked wonderful things that will really impress you.
    He's totally all about AngularJS's life cycle, and you're gonna love his work.

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
{% include panorama.html image="images/header/011-panorama.jpg" %}

#### Our venue is

{% if page.venue %}
{% include location-box.html venue=page.venue %}{% else %}
{% include location-box-tbd.html %}{% endif %}

Special thanks to our generous venue sponsor, [Clinic+](http://clinicny.com/what),
for making our meetup possible.

* * * *

### Thanks!

Need directions or any help? Interested in speaking or sponsorship? Contact
Rico at [hi@ricostacruz.com](mailto:hi@ricostacruz.com) or 0908 864 8125.

Manila.js is made possible by the JS community volunteers who have been
organizing and volunteering to make Manila.js events possible. 
