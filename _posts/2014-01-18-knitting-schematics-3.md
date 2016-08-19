---
layout: post
title:  "How to Create Knitting Schematics with Inkscape: Part 3"
date: 2014-01-18 19:04:35
tags: knitting design tutorial
---
![knitting-schematics-how-to](/uploads/2014/01/knitting-schematics-how-to.jpg)

# Part Three: Adding Measurements

This is part two of  a three part tutorial series in which you will learn how to create knitting diagrams (or schematics) with [Inkscape](http://inkscape.org/), a free vector editing program. These are the technical drawings that  go with your knitting or crochet designs. They give the people who are making the pattern idea of how everything should measure up.

[Part One]({% post_url 2014-01-08-knitting-schematics-1 %})
Introduction to Inkscape and basic tools

[Part Two]({% post_url 2014-01-15-knitting-schematics-2 %})
How to draw the outline of your design

**Part Three**
How to add measurements

If you have never used a vector editing program before, you should start at [part one]({% post_url 2014-01-08-knitting-schematics-1 %}) before reading this tutorial and learn to use the basic tools. This part of the tutorial will show you how to add your final measurements onto your schematics. I am assuming that you have a chart with all of your measurements calculated out for your pattern already.

# Adding Guides

If you open up your file from [Part Two]({% post_url 2014-01-15-knitting-schematics-2 %}) in Inkscape, you'll see on the top and left side of the screen some rulers. (If for some reason you don't, go to View > Show/Hide > Rulers and maker sure it has a check mark next to it. Or press **[ctrl + R]**) If you click and drag off of one of these rulers you will bring onto the screen what is called a guide. Guides are handy little devices for making measurements or "snapping" elements in a specific place on your drawing, and they're very handy for adding measurements to your schematics.

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-01.jpg)

Drag guides in for any key points on your pattern. Some horizontal points I usually like to add are the shoulder to the underarm and the underarm to the bottom (and sometimes a line at the hem as well, if it's notable)

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-02.jpg)

For the vertical points I like to add them on either side of the neckline and shoulders, at the chest width, if the waist width is different I'd add them there too. In the case of this sweater the sleeves are laid out horizontally, if they were on a slope I would just skip them for this step because dealing with diagonal guides isn't really worth the trouble for that one measurement.

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-03.jpg)

It's up to you how many guides & measurement lines you add in the end. I'm of the opinion that more measurements are better than less as long as they are clearly marked. (Particularly after having gone back to some of my earlier designs to reference something only to find I mysteriously decided not to include some measurement.) It's really easy for knitters to ignore measurements they don't want to deal with, it's really frustrating to be looking for a measurement to see if you've done it right only to find it's not there.

Once you have all your measurement guides in, you now want to drag in guides on each side of your design to box it in, giving a little space. These guides are what we'll use to draw our measurement lines on.

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-04.jpg)

# Adding Measurement Lines

Now pick up your handy dandy bezier tool (**[shift + f6]**) Now, go hover over any intersection between guides and you'll notice a little thing pop up that says "Handle to Guide Origin" and your cursor will snap to this point. This is great, because the snap means your point will be right on that intersection. So now draw a line, clicking on any intersections along the way that are pertinent (as we will add dots to these later) and then hit **[enter]** to complete the segment.

For example, on my sweater here I want to indicate the width of each shoulder as well as the width of the neckline, so I'll click on each intersection along the top to create a line that has four points (which you won't see just yet, it will just look like a line)

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-05.jpg)

After you've drawn lines for all your important measurements, you now want to hide your guides. By pressing **[shift]** + **[]** (that is to say, |. Not I as in I am, but the vertical line above the back-slash) you can toggle between showing and hiding the guides. This is handy because if you need to bring them back to draw another measurement, you can.

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-06.jpg)

So you should have a number of lines around your design, kind of like this.

What we want to do now is add those cute little dots that indicate all of those points we worked so hard to click on. To do that we need to bring up our Fill & Stroke menu. (You remember that from parts one and two, don't you?)

Select all of the lines you just made by holding shift and clicking on each one. Open up Path > Fill & Stroke and click on the Stroke Style tab.

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-07.jpg)

Now under the Start, Mid, and End Markers tabs, select whatever little marker you find to be the cutest. I always go with DotM, but there are obviously a plethora of options. You could even use different ones for each, though I don't recommend it for professionalism sake.

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-08.jpg)

It's important that you put something on the "Mid Marker" one because when you do...

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-09.jpg)All those little hidden intersection points will magically appear.

How about that?

# Add the Numbers

This next part is pretty straight forward. Now you just need to grab that text tool and start adding your measurements. I can't speak to what system of design you have, but for this project I do all of my calculations in a spread sheets, so all of my measurements are already written out there and I just re-type them in Inkscape. I have all the pattern written for 5 sizes so all of my measurements take the form of 3 (6, 12, 18, 24) months. I do them in inches, and I generally round to either the nearest 1/4" or 1/2" depending on the measurement.

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-10.jpg)

It's really your choice how you want to format it, which way you want your text to go, etc, but I suggest looking at knitting magazines and books to get an idea of how it should look. I've seen schematics with different colors for each size, schematics with the number inside the design, etc.  If you want to indicate a measurement taken in the round versus flat that's easy to do too: Simply drag on the line using the edit paths (**[F2]**) tool until it's a nice little semi-circle and that shows that this measurement is taken around.

![How to make knitting diagrams](/uploads/2014/01/adding-measurements-11.jpg)

# Adding it to your Pattern

Okay, so this part could be a little bit of a headache depending on your situation. For me, it's actually really really easy because I use [LibreOffice](http://www.libreoffice.org/) (another free program, heyo!) and with that, you can directly import the default Inkscape SVG file format as an image and it's all hunky dory. I just scale my image to be as wide as the page (which defaults to 8.5", which is perfect for my 8.5" wide LibreWriter file), edit the height of the page until it fits my schematic in File > Document Properties, save it and I'm good to go.

I don't know if MS Word handles SVG files or not, but my hunch is that it's a no-go. If you have Photoshop, one option is to save the file as a Encapsulated Post Script EPS file (at at least 300 DPI), open it in Photoshop (at at least 300 DPI) and save it as a PNG, JPEG, or GIF. This is what I was doing before I discovered that LibreOffice imports SVG files.

The other option that I can suggest, if you don't have either LibreOffice or Photoshop, is to simply take a screen capture of your finished schematic (zoomed in to a reasonable degree) by hitting your **[Print Screen]** button on your keyboard. This will copy your screen to your clip board. You can then paste this screen capture into whatever image editing software you DO use, and crop it. Then you save it as a PNG, JPEG, or GIF and import it into your Word file. There are a number of other file types that Inkscape can save your image as, but I don't really know what ones work for what so if you have a better idea, please do let me know in the comments :)
