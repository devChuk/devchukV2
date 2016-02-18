---
layout: post
title: My hackNY Application
---

![](http://www.brianch.uk/res/img/blog/hackny.png)

A good number of people have asked for advice in applying to hackNY, so instead of copying & pasting the same things over and over I've decided to just post it here. If you're an aspiring developer or software engineer, the hackNY fellowship is **the best thing you can do with your summer**.

Students who are accepted into the fellowship get to

- work in a cutting-edge startup in NYC (like Kickstarter, MongoDB, and Foursquare)
- learn from founders, VCs, CEOs, & CTOS in hackNY exclusive talks
- enjoy free housing at Union Square, New York City with 33 other talented and extraordinary fellows

It really is a great opportunity. I've made friends for life and had to think critically about what I actually want to do in the long run. Feel free to tweet at me on @devchuk or send an email if you have any questions.

#### Tell us about a time you built something awesome in code. How did you choose it? Why did you enjoy it?

So on one Friday night I was attacked by a large black Labrador on my way to college. I managed to grab its head so it wasn't able to bite me, but I still fell onto my left arm and ended up with several lacerations on it. As a result, it was impossible to use my left arm without feeling pain, so I only had one good arm.

I decided to still go to the HackRPI hackathon that following weekend. I had a C++ midterm that following Tuesday so I decided that the hack would be purely in C++. My hack: the Infinity Keyboard, a faster way to type with one hand with text prediction and a LEAP Motion. The idea is that instead of a 26-letter QWERTY layout, my keyboard would use only 10 keys. Each of these keys would represent columns of a QWERTY layout, for example Q would mean QAZ, W would be WSX, and U would be UJM. By pressing one of these ten keys, my program would look at the most likely combination of letters that spelled the word a user wanted.

I developed a text prediction algorithm by literally downloading as many books in .txt format as possible, parsing through all of them, and counting the frequency of each word with a C++ program. Then the C++ program combined the output with some word count files I found online to a file that listed all the words in ABC order with a "strength" next to it ([https://raw.githubusercontent.com/devChuk/InfinityKeyboard/master/new.txt](https://raw.githubusercontent.com/devChuk/InfinityKeyboard/master/new.txt)). I'm going to save you the details, but I used ternary trees, hash tables, binary searches. In other words, the hack was pure C++ with no SDKs/APIs other than the LEAP Motion SDK.

I enjoyed working on this project because it solved problems that matter. The Infinity Keyboard shows that it has the potential of being faster than using two hands on a QWERTY keyboard. With the LEAP Motion, it's also easier for those who have their hands dirty and don't want to dirty a laptop's keyboard by touching it (cooks, surgeons).

Another reason why I enjoyed this is because I enjoy programming itself. It's fun to solve puzzles & create clever and awesome things out of nothing.

#### Tell us about what you hope to learn this summer and why is hackNY right for you.

Since I am more interested in working in smaller companies instead of large corporate companies I would like to have some experience working in a startup. I also plan to found my own startup farther in the future and thus HackNY would provide invaluable knowledge for me.

#### Is there a particular technology or industry you're currently interested in? How come? Where do you see it heading in the future?

I’m more interested in hardware and Internet-of-things-related technology because I have experience in hardware and I’m using hardware to make my dorm room amazing. I think that there will be more appliances and objects connected to the Internet in the future.

Technology that provide valuable tools to people is also something that I am interested in.

#### Discuss your technical skills/proficiencies/languages and experience

I'm comfortable with C++, C, Java, Frontend development, JQuery, Javascript, UI design, electrical engineering, and Android app development.
I've been to around 18 hackathons so far, and it's only my freshman year. As a result, I'm a master of learning how to use a new language or tool in a very very short period of time. There's nothing I can't learn.

I've had jobs where I get paid to design, prototype, & build flying camera livestreaming devices from scratch all by myself.

#### When you're not coding, what do you like to do for fun?

I have woodworking as a hobby, but I find building normal chairs and tables a bit boring if I don't need them. So I build boats, bikes, and weapons:

- [http://brianch.uk/devchukV1/portfolio/miscellaneous/whitehall_gig.html](http://brianch.uk/devchukV1/portfolio/miscellaneous/whitehall_gig.html)
- [http://brianch.uk/devchukV1/portfolio/miscellaneous/the-wooden-trike.html](http://brianch.uk/devchukV1/portfolio/miscellaneous/the_wooden_trike.html)
- [http://brianch.uk/devchukV1/portfolio/miscellaneous/crossbows.html](http://brianch.uk/devchukV1/portfolio/miscellaneous/crossbows.html)

Speaking of boats, I row on the Hudson river on warmer days. Other things I enjoy are 8ball pool and learning how to do random things such as East Coast Swing and longboarding.

Electrical engineering doesn't really fully count as coding so I've made drones and robotic arms in my free time.

- [http://brianch.uk/devchukV1/portfolio/hardware/robot_arm.html](http://brianch.uk/devchukV1/portfolio/hardware/robot_arm.html)
- [http://brianch.uk/devchukV1/portfolio/hardware/quadcopter.html](http://brianch.uk/devchukV1/portfolio/hardware/quadcopter.html)

#### Code sample from two projects open source projects, side projects, hackathon hacks, professional work, etc. That said, if you have school projects that you think are exceptional, we'd love to see them.

[https://github.com/devChuk/InfinityKeyboard/blob/master/backend/textPredict.cpp](https://github.com/devChuk/InfinityKeyboard/blob/master/backend/textPredict.cpp)

This is the word prediction algorithm that is used in the Infinity Keyboard (mentioned in one of the questions above). I plan on optimizing it and making it an open source tool since there are no good open source text predictors out there. C++

[https://github.com/Lineless/battlehack-dream-team](https://github.com/Lineless/battlehack-dream-team)

Lineless (see [http://lineless.github.io/](http://lineless.github.io/)).<br>
The website is also designed by yours truly. NodeJS, Frontend dev

[https://github.com/devChuk/HackCODEDAY_NY](https://github.com/devChuk/HackCODEDAY_NY)<br>
A pool game. My partner and I made our own physics engine for the balls. Java

[https://github.com/AFARsystem/Android_app](https://github.com/AFARsystem/Android_app)<br>
An app for something called Afar. See [http://brianch.uk/devchukV1/portfolio/software/afar.html](http://brianch.uk/devchukV1/portfolio/software/afar.html)
Android

<hr>

What's interesting is that most of my responses are extremely brief. I think what truly showed my passion and technological prowess was the [old website](http://brianch.uk/devchukV1/) I had at the time.

If you need more inspiration, go read [Kevin's post](http://kyeh.me/2015/10/29/the-road-to-hackny/) and [Simon's post](https://medium.com/@simonayzman/how-i-hacked-ny-5589ca50ccc3#.8imf06ngs). You can also read more advice on [https://apply.hackny.org/](https://apply.hackny.org/). Good luck!

~ Brian Chuk