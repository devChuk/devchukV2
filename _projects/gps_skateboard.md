---
layout: project
title: GPS Skateboard
description: Skating-friendly Navigation
date: Nov 2014
img: http://devchuk.github.io/devchukV1/res/img/portimg/pennypimping/ride2.png
category: hardware
order: 18
---

![](http://devchuk.github.io/devchukV1/res/img/portimg/pennypimping/bot.jpg)

I've always wanted to do a hardware hack at a hackathon. So what better idea than to try one out at [YHack](http://www.yhack.org/)? I had a friend who was an Electrical Engineer major coming. We didn't have any ideas for our hack, but we knew we wanted to work on a crazy and challenging idea.

We got really lucky with the idea. The YHack organizers ran out of hardware devices, so our options were severely limited. However, two things happened. Intel was giving out Intel Maker Kits, which had plenty of electrical components to use. Also, I had brought my penny board to YHack because I bring it with me everwhere. That was it. We were going to hack on a skateboard. After some more brainstorming, we decided on one idea.

###GPS nagivation on a penny board

We decided on the materials as we went along:

>		an Intel Edison
>		a Grove starter kit plus – Intel IoT Edition for Intel Galileo Gen 2
>		an Android device with data and GPS capabilities
>		some form of lighting in preferably red because I like red

The idea was to get out on the street, take out your phone, and input a destination onto our app. Then, the phone will transmit information to the board so as you're riding it towards an intersection, the board will tell you if you need to turn in order to get to your destination. If a red underglow on the right side appears, it's telling you to turn right. If the left side lit up, turn left. If both sides were off, go straight ahead.

![](http://devchuk.github.io/devchukV1/res/img/portimg/pennypimping/held.png)

For the first 29 hours of the hackathon, we made absolutely no progress and had no idea what we were doing. It was only in the following 7 hours did everything go extremely smoothly.

![](http://devchuk.github.io/devchukV1/res/img/portimg/pennypimping/setup.png)

It took a while to figure out how to communicate between the board and the phone. Since the bluetooth doesn't work, I had the Edison host its own WiFi network for devices to connect to. Then, I created a server that would do an action depending on what web page a GET request was sent to. The website was http://192.168.42.1:1337/, so if a device sent a GET request to http://192.168.42.1:1337/0, the server would return a 0. If the request was sent to http://192.168.42.1:1337/1, a 1 would be returned. Then I mapped numbers to commands.

0 would mean that both side lights would be off. 

1 would mean that the right side would be on. 

2 would mean that the left side would be on.

Then, I wired the microcontroller to as many LEDs as possible—we ended up with 3 red LEDs on each side. I then <strike>gracefully</strike> attached the hardware to the bottom of the board with tape. 

In order to protect the Edison from debris & water that gets kicked up by the front wheels or collisions, we cut out a totally secure, custom-built cardboard box from a pizza box. It turns out that it was very easy to short the device because of all the naked electrical contact points, so we used tape in order to minimize that risk.

After some testing, the hack was complete. We ran out of the building at freezing cold weather right before the submission deadline to test it. Everything worked *beautifully*. As I chose a random destination close by and approached intersections, the sides of the board lit up and told me to turn when I had to.

![](http://devchuk.github.io/devchukV1/res/img/portimg/pennypimping/side.jpg)

We ended up winning in the Google API category :)

**Tech:** Intel Edison, Basic circuitry knowledge, NodeJS, Android, Javascript, Java, Google Maps API, skating skills

[The Android source code](https://github.com/PennyPimping/android)

[The Edison source code](https://github.com/PennyPimping/Edison)

[Our Challengepost page](http://challengepost.com/software/penny-pimping)