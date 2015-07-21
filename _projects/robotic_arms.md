---
layout: project
title: Robotic Arms
description: A Science Olympiad project
date: Jun 2012 - Mar 2013
img: http://devchuk.github.io/devchukV1/res/img/portimg/robot_arm/rszz_robot_arm.jpg
category: hardware
order: 2
---



<img class="cimg" src="http://devchuk.github.io/devchukV1/res/img/portimg/robot_arm/full.jpg">

I built robotic arms with friends during my sophomore and junior year in high school. They were entered into the New York Science Olympiad competitions where it placed 8th at both the regional and state level. The competition was meant for one robotic arm, but we realized that we were able to fit two of them into the maximum dimensions.

<object type="application/x-shockwave-flash" width="800" height="450" data="https://www.flickr.com/apps/video/stewart.swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">
	<param name="flashvars" value="intl_lang=en-US&photo_secret=037e94cdaf&photo_id=9670597738&hd_default=false"></param>
	<param name="movie" value="https://www.flickr.com/apps/video/stewart.swf"></param><param name="bgcolor" value="#000000"></param>
	<param name="allowFullScreen" value="true"></param>
	<embed type="application/x-shockwave-flash" src="https://www.flickr.com/apps/video/stewart.swf" bgcolor="#000000" allowfullscreen="true" flashvars="intl_lang=en-US&photo_secret=037e94cdaf&photo_id=9670597738&hd_default=false" width="100%" height="450"></embed>
</object>

Potentiometers were attached to each joint, thus allowing us to find the position of each joint and make the arms autonomous. We also took advantage of a phenomena called rheostatic braking. Basically, when you shunt the ground and power pins of a motor together, the motor becomes a lot more resistant to turning. The robotic arm kept drooping under its own weight, so we used a microcontroller to shunt the terminals with a relay while simultaneoulsy cutting power to prevent short circuits.

An Arduino mega was used to control the robotic arms, and two custom controllers was built to communicate with it. We used Ethernet ports and cables for easy detaching and reattaching.

![Image Not Found](http://devchuk.github.io/devchukV1/res/img/portimg/robot_arm/inside.jpg)
![Image Not Found](http://devchuk.github.io/devchukV1/res/img/portimg/robot_arm/control.jpg)
![Image Not Found](http://devchuk.github.io/devchukV1/res/img/portimg/robot_arm/top.jpg)

*Credits to the Science Olmypiad Robot Arm Team*

**Tech:** Arduino, Electrical Engineering