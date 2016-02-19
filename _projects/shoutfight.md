---
layout: project
title: ShoutFight
description: Shout-powered fighting game
date: Nov 2015
img: http://www.brianch.uk/devchukV1/res/img/portimg/shoutfight/fireball3.png
category: software
order: 25
---

*I made this project with a couple friends mainly to have them learn web dev & Javascript, but it's so hilarious I had to put it up on here.*

![](http://devchuk.github.io/devchukV1/res/img/portimg/shoutfight/fireball.png)

Shoutfight is a two-player fighting game in the browser controlled by phones as game controllers. Here's the twist: the louder and longer you shout into your phone, the more powerful your game character becomes!

The fighting game was made with HTML Canvas and Javascript and the game controller apps were made in Android. I created the realtime connection between the game controllers and the game in node.js. The Android apps simply send POST requests to the server constantly, which updates several variables in the database. The game receives those updates by constantly sending GET requests.

Here's how the game works:

Game characters (Yoshis) are able to move sideways, block, and jump with four buttons. They are also able to do a melee move and shoot a fireball. When a player yells into her or his phone, the corresponding Yoshi's power level rises. Several stats rise accordingly, these stats are:

- speed 
- damage 
- knockback 
- defense 
- jump height 
- fireball rate of fire

Keep in mind that shouting for an extended period of time is more effective than a single loud yell. This achieves more of a [DragonBallZ effect](https://youtu.be/bH_CcJ-uBWI) and adds to the fun of the game.

The screen also shakes when the shouting become intense enough.

![](http://devchuk.github.io/devchukV1/res/img/portimg/shoutfight/gameover.png)

[Devpost](http://devpost.com/software/superloud)

**Tech:** Javascript, HTML5 Canvas, CSS, Android