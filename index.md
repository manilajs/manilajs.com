---
layout: event

images:
  - http://manilajs.com/images/013/share/share-aa.png
  - http://manilajs.com/images/013/share/share-b.png
  - http://manilajs.com/images/013/share/share-c.png
  - http://manilajs.com/images/013/share/share-d.png
  - http://manilajs.com/images/013/share/see-you-later.png

event:
  series: "013"
  date: 2015-07-10
  time: 7PM
  location: Proudcloud, Eastwood

mailchimp:
  group_id: 4096 # typically 2^(series+3), not used

registration:
  date: 2015-07-01
  state: open # announce | open | closed | over
  signup: "http://goo.gl/forms/RseuyHDVw9"

hero:
  color: "#203a4f"
  opacity: 0.60
  image: images/013/bg.jpg
  # attribution_source: ""
  # attribution_url: ""

# -- Comment out the venue if it's TBD --
venue:
  name: Proudcloud, Inc.
  icon: images/013/v-proudcloud.png
  url: https://www.proudcloud.net
  map: https://goo.gl/maps/GKwHx
  address: |
    2/F Topy Building 1<br>
    No. 3 Economia Street, Bgy. Bagumbayan, QC

# -- Comment out the drinkup if it's not available --
# drinkup: <see above>

speakers:
- name: Noel del Castillo
  # url: ""
  avatar: "images/013/u-ngdelcastillo.jpg"
  title: Pragtechnologies
  # github: atroche
  twitter: ngdelcastillo
  description: |-
    Noel will be sharing his experiences with building scalable web apps using Ember CLI.

- name: Michael Julio
  # url: ""
  avatar: "images/013/u-michaeljulio.png"
  # title: Aelogica
  # url: ""
  # github: 
  twitter: mikejulio
  description: |-
    Michael will be sharing his learning experience in building realtime apps using AJAX long polling and Server-Side Events (SSE).

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

Special thanks to our generous venue sponsor, [{{ page.venue.name }}]({{ page.venue.url }}), for making our meetup possible.

* * * *

### Thanks!

Need directions or any help? Interested in speaking or sponsorship? Contact
Rico at [hi@ricostacruz.com](mailto:hi@ricostacruz.com) or 0908 864 8125.

Manila.js is made possible by the JS community volunteers who have been
organizing and volunteering to make Manila.js events possible. 
