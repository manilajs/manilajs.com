---
layout: event

images:
  - http://manilajs.com/images/015/share/share-b.png
  - http://manilajs.com/images/015/share/share-c.png
  - http://manilajs.com/images/015/share/share-a.png
  - http://manilajs.com/images/015/share/see-you-later.png

event:
  series: "015"
  date: 2015-09-04
  time: 7PM
  location: Silicon Valley Insight, BGC

registration:
  date: 2015-08-03
  state: open # announce | open | closed | over
  signup: "http://goo.gl/forms/xH2LVnhmDl"

hero:
  color: "#203a4f"
  opacity: 0.20
  image: images/015/bg.jpg
  # attribution_source: ""
  # attribution_url: ""

# -- Comment out the venue if it's TBD --
venue:
  name: Silicon Valley Insight
  icon: images/015/v-svi.png
  url: http://siliconvalleyinsight.com/
  map: https://goo.gl/dGawZT
  address: |
    29th floor, Twenty-Four Seven McKinley<br>
    24th St cor. 7th ave cor. McKinley Parkway<br>
    BGC, Taguig

# -- Comment out the drinkup if it's not available --
# drinkup: <see above>

speakers:
- name: Michael Julio
  avatar: "images/015/u-michaeljulio.png"
  # title:
  # url:
  # github:
  twitter: mikejulio
  description: |-
    Michael is an experienced web developer, and he will be sharing about manipulating browser pushState history in conjunction with Bootstrap and Backbone.js.

- name: Andre Marcelo-Tanner
  avatar: "images/015/u-kzap.jpg"
  title: Examine.com
  url: http://examine.com/about
  # github:
  # twitter:
  description: |-
    Andre, a seasoned professional developer, will be telling us about his insights and experience on how to deal with clients and keep your sanity.

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

Special thanks to our generous venue sponsor, [{{ page.venue.name }}]({{ page.venue.url }}), for making our meetup possible.

* * * *

### Thanks!

Need directions or any help? Interested in speaking or sponsorship? Contact
Rico at [hi@ricostacruz.com](mailto:hi@ricostacruz.com) or 0908 864 8125.

Manila.js is made possible by the JS community volunteers who have been
organizing and volunteering to make Manila.js events possible.
