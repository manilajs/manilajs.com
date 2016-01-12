---
layout: event

# images:
#   - http://www.manilajs.com/images/015/share/share-e.png
#   - http://www.manilajs.com/images/015/share/share-f.png
#   - http://www.manilajs.com/images/015/share/share-d.png
#   - http://www.manilajs.com/images/015/share/see-you-later.png

event:
  series: "016"
  date: 2016-02-05
  time: 7PM
  location: TBD

registration:
  # date:
  state: announce # announce | open | closed | over
  # signup:

hero:
  color: "#203a4f"
  opacity: 0.20
  image: images/016/bg.jpg
  # :: current image is under Creative Commons Zero however,
  #    so no attribution is required. Might as well though, yeah?
  attribution_source: "NASA"
  attribution_url: "https://unsplash.com/photos/NuE8Nu3otjo"

# -- Comment out the venue if it's TBD --
# venue:
#   name: Silicon Valley Insight
#   icon: images/015/v-svi.png
#   url: http://siliconvalleyinsight.com/
#   map: https://goo.gl/dGawZT
#   address: |
#     29th floor, Twenty-Four Seven McKinley<br>
#     24th St cor. 7th ave cor. McKinley Parkway<br>
#     BGC, Taguig

# -- Comment out the drinkup if it's not available --
# drinkup: <see above>

# speakers:
# - name: Michael Julio
#   avatar: "images/015/u-michaeljulio.png"
#   title:
#   url:
#   github:
#   twitter: mikejulio
#   description: |-
#     Michael is an experienced web developer, and he will be sharing about manipulating browser pushState history in conjunction with Bootstrap and Backbone.js.

# - name: Andre Marcelo-Tanner
#   avatar: "images/015/u-kzap.jpg"
#   title: Examine.com
#   url: http://examine.com/about
#   github:
#   twitter:
#   description: |-
#      Andre, a seasoned professional developer, will be telling us about his insights and experience on how to deal with clients and keep your sanity.

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
