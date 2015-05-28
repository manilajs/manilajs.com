---
layout: event

event:
  series: "012"
  date: 2015-06-05
  time: 7PM
  location: Clinic+, Makati
  share_image: "http://manilajs.com/images/share/011-landscape.png"

mailchimp:
  group_id: 4096 # typically 2^(series+3), not used

registration:
  date: 2015-06-01
  state: announce # announce | open | closed | over
  signup: "" #http://goo.gl/forms/ar9Mxnjnny"

hero:
  color: "#203a4f"
  opacity: 0.10
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
  avatar: ""
  title: Zendesk
  # github: kjcpaas
  # twitter: username
  description: |-
    Alistair will be talking about some pretty interesting things that will simply blow you mind away.

- name: Joshua Lat
  # url: ...
  avatar: ""
  title: Dealgrocer
  url: http://joshualat.com/
  # github: kjcpaas
  # twitter: username
  description: |-
    Josh will be speaking about some wicked wonderful things that will really impress you.

##############################################################################
---

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

<br>

#### Manila JavaScript Community Meetup
{:.pull-quote-heading}

Let's have an evening of updates from the JavaScript community. Join us for a
fun night of talks and camaraderie—beginners and experts welcome.
{:.pull-quote}

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
