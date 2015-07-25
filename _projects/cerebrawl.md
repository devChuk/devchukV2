---
layout: project
title: Cerebrawl
description: Tug of War with Brainwaves
date: Apr 2015
img: http://devchuk.github.io/devchukV1/res/img/portimg/cerebrawl/prof.png
category: hardware
order: 21
---

![](http://devchuk.github.io/devchukV1/res/img/portimg/cerebrawl/cere.png)

In the hackNY Spring 2015 hackathon, my friend Timotius and I built Cerebrawl, a tug of war game that uses brain waves instead of physical pulling.

This was achieved by a new piece of hardware called the Muse headband. It only returns the raw brain wave readings from its electrodes, so I had to spend hours reading up on neuroscience papers to learn about EEG interfaces and the different types of brain waves.

We had to use an Android app to connect to the Muse headband via Bluetooth since it had issues connecting directly to a laptop. Then we used the Android app update values in the server with our own API.

**Tech:** Android, NodeJS, Muse Headband, Java, Javascript, HTML, CSS

[Challengepost page](http://challengepost.com/software/cere-brawl)

[Android source code](https://github.com/devChuk/cerebrawl-android)

[Web app source code](https://github.com/timotius02/cerebrawl)
