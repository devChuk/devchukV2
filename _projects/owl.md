---
layout: project
title: Owl
description: Drunk detection app
date: Aug 2015
img: http://devchuk.github.io/devchukV1/res/img/portimg/owl/prof.png
category: software
order: 24
---

*I'm growing this habit of using animals for names now* :3

<img class= "himg" src="http://devchuk.github.io/devchukV1/res/img/portimg/owl/splash.jpg">
<img class="himg" src="http://devchuk.github.io/devchukV1/res/img/portimg/owl/start.jpg" style="float:right">

Owl is an Android app that makes sure people who go out drinking late at night get home safely. The way it works is by automating the concept of a designated driver. You just open up the app, designate a friend, and put your phone in your pocket. Whenever the app determines that you're drunk it alerts your friend & streams your location to him/her.

We detect intoxication by analyzing a user's gait with the same built-in sensors fitness pedometer apps use. Instead of just counting the amount of steps a user takes however, we map the footsteps over time and capture how long it takes to make each footstep.

<img class= "himg" src="http://devchuk.github.io/devchukV1/res/img/portimg/owl/drunk.jpg">
<img class="himg" src="http://devchuk.github.io/devchukV1/res/img/portimg/owl/sober.jpg" style="float:right">

If the amount of milliseconds it takes to take each step is pretty consistent or gradually changing (user may go from a stroll to a run), then you're probably sober. If the readings are all over the place, you're drunk. Looking at the raw data above, it's pretty clear to tell if a user was sober or intoxicated. Now let's look at the algorithm used to analyze the data:

	String[] msPerStepArray = msPerStep.toArray(new String[NUMBER_OF_STEPS_TRACKED + 1]);
	for (int i = 0; i < msPerStepArray.length; i++) {
	    if (i < msPerStepArray.length - 1) {
	        Long dx_msPerStep = Math.abs(Long.valueOf(msPerStepArray[i]) - Long.valueOf(msPerStepArray[i + 1]));
	        if (dx_msPerStep > ABNORNAL_THRESHOLD) {
	            abnormals++;
	        }
	    }
	}

It's a simple algorithm. The app stores the last several hundred times it takes for each step and finds the differences between each adjacent step time. If the time goes over a certain threshold, we count it as an abormal difference. Then we divide the abnormal count by the amount of total steps recorded. So if half of all the changes in step times are abnormal, then the abnormal percentage is 50%.

<img class= "himg" src="http://devchuk.github.io/devchukV1/res/img/portimg/owl/main.jpg">
<img class="himg" src="http://devchuk.github.io/devchukV1/res/img/portimg/owl/owl.jpg" style="float:right">

There are also some other triggers in place for alerts. If the user is travelling very quickly&mdash;which may mean that the user is driving a car&mdash;then we send an alert. Alerts are also sent if the user is still out of home by a certain time.

**Tech:** Android, NodeJS, Photoshop, Google Maps API

[See the Battlehack page](https://2015.battlehack.org/dashboard/teams/802ad003-7b4a-4dc4-9fc5-c3d668a95d99)

[Source code](https://github.com/owl-nyc)