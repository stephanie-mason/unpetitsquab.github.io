---
layout: post
title:  "How to Create Knitting Schematics with Inkscape: Part 1"
date: 2014-01-08 18:00:08
tags: knitting design tutorial
---
![How to create Knitting Schematics using Inkscape](/uploads/2014/01/header.jpg)

# Part One: An Introduction to Vectors

This is a three part tutorial series in which I am going to teach you how to create knitting schematics with [Inkscape](http://inkscape.org/), a free vector editing program. These are the technical drawings that  go with your knitting or crochet designs. They give the people who are making the pattern idea of how everything should measure up.

**Part One**
Introduction to Inkscape and basic tools

[Part Two]({% post_url 2014-01-15-knitting-schematics-2 %})
How to draw the outline of your design

[Part Three]({% post_url 2014-01-18-knitting-schematics-3 %})
How to add measurements

Please be aware that while I try to keep in mind that you may or may not be technically proficient with computers when I'm writing this, it isn't super in-depth totally for newbies tutorial. I'd have to create a whole course for what I'm going to pretty well condense into three parts if I covered every detail. And hey--Maybe someday I'll do just that.

For now I'm not assuming you know _everything_ about computers, but I AM assuming that you are adventurous and confident enough to try and figure a few things out on your own. The best way to learn how to use **any** program is to just get in there and start messing with tools, experimenting with buttons, and seeing what happens. Then create a small objective (like, say, a drawing that looks like a sweater) and try to figure out what buttons you need to push to make that objective happen. That's how I've learned how to use pretty much every computer program I've ever used, and that's how I came to figure out how to make these things myself. I'm just hoping to show you the basics so you can feel confident enough to get started.

# Wait, wait, wait. What the hell _is_ a vector anyway?

If you already know the answer to these questions then you should just skip on ahead to the next part. But if you're totally new to the world of graphics, here is a little break down for you. Most images you see on your computer screen, whether it be on your camera or the internet, are one of three formats: JPEGs (.jpg), GIFs (.gif), or PNG (.png). Each of these files has their own characteristics, which you can [read more about here](http://www.sitepoint.com/gif-jpg-png-whats-difference/) if you're curious, but in the end they're all made up of pixels--in other words they have millions of tiny little squares and each square holds information about a color to display on your screen, and all these little squares make up a picture.

This is why when you have a really big picture and you scale it down, it works really well because for the smaller picture you have an excessive amount of pixels and therefore information for your computer to work with to create a really nice looking smaller photo--it just gets rid of the extra pixels.

![smaller-jpg](/uploads/2014/01/smaller-jpg.jpg)

It is also why when you try to create a bigger picture from a really small, low resolution image it gets either pixelated or blurry. Since whatever program is resizing the image only has a limited number of pixels to work with to begin with, when it has to fill in all the extra information for the bigger picture it has to guess what to put in.Some programs are much better at this than others, but in the end a bigger picture made from a smaller one will never look as good.

![make-bigger](/uploads/2014/01/make-bigger.jpg)

This is where vectors come in. You see, vectors are images that aren't made up of pixels at all. While the finished image you may seen in a file or on the computer might end up being one of those JPEGs, GIFs, or PNGs, filled with pixels, the original vector file that you can edit is actually made up of mathematical relationships. This is what makes them scalable--each point in a vector drawing has a specific relation to another point. So when you move one point out to make it bigger, the computer moves all of the other points out proportionally and the whole picture scales up without losing any resolution.

![vector-resize](/uploads/2014/01/vector-resize.jpg)

Vector images are very important in design because when you're designing, say, a logo you need it to look good on everything from a 2"x3" business card to a 12'x24' billboard. The scalability of vectors, however, isn't the reason why they're so great for knitting schematics. While this can come in handy for designing pattern layouts, the real reason why they're very useful is because the tools you use to create vectors lend themselves very well to the purpose.

They are very good for making technical drawings because it is very easy to create smooth, straight lines and to control the weight of those lines, as well as change the proportions as needed to match the scale of your actual item.

# Inkscape

[Inkscape](http://inkscape.org/en/) is an open-source (in other words, free) vector editing program. [Adobe Illustrator](http://www.adobe.com/products/illustrator.html?sdid=JRSIH&kw=semgeneric&skwcid=AL!3085!3!36018636876!e!!g!!adobe%20illustrator&ef_id=UiZRmAAAAcR3JbXJ:20140107204742:s) is the big name out there in vector editing land. But Inkscape is also very useful, has more than enough tools to make schematics, and it's free.

# Toolkit and HotKey Basics

Vector software has tons of tools and complicated dealie-os that can be used to make [gorgeous vector illustrations](http://cid-moreira12.deviantart.com/art/Quorra-TRON-Legacy-195816382) and all sorts of fancy graphics.

We don't actually need most of those tools for our purposes, though. This is a run down of the tools I use all the time for my schematic drawings, and a few of the hot keys that I find to be very useful. Don't know what a [hot key](https://asana.com/guide/tags-email/keyboard) is? Girl, you better get reading because you will be saving yourself hours and hours of your life if you learn how to use hot keys.

I use Windows so all the hotkeys I use may be a little different if you use Mac. (If you're totally awesome and use Linux, your hotkeys should be the same.) When you first open Inkscape, you'll see a screen that looks like this.

![Inkscape tutorial for knitters](/uploads/2014/01/001_blank.jpg)

The rectangle in the middle is representative of your printing dimensions, which you don't necessarily have to worry about if you're putting the final schematic into, say, a word processor to format your pattern. On the left is your main toolbar. Here is a breakdown of the tools I'll be using in this tutorial, which are the only tools I ever really use for schematics. For a full list of hotkeys see the [Inkscape manual here.](http://inkscape.org/doc/keys048.html) Once you've messed around for a bit, it behooths you to look through this list because you will definitely learn a lot more about what you can do just by skimming down the hot key list.

![Inkscape tutorial for knitters](/uploads/2014/01/002_toolkit.jpg)

Lets break down what each of these tools does. We're going to start with the [shift+f6] Bezier & straight lines tool, which is the tool that looks like a little pen. This is the most important tool you will use, because it is what you will be using to draw your shapes.

# Bezier Curves & Straight Lines Tool

Most vector shapes are made up of these things called paths. Paths are lines that are connected by two nodes, they can be straight lines or they can be curved. Pick out your bezier curve tool and click around a bit. You will find that if you click in two spots, you'll create a straight line. If you click again and drag the mouse while you hold down the button, you'll create a curve. Start clicking around a bunch and see what happens, both when you drag your mouse and don't. When you've done this a few times, press enter. You'll now have your first path.

![how to create knitting schematics](/uploads/2014/01/003_bezier.jpg)

Now press **[delete]** and draw something a little more intentional. Draw yourself a quick polygon. (It doesn't matter how many sides, we just need it so we can explore other tools.) Close this polygon by clicking on the first node that you created. Before you do this your polygon should have several green sides, and one red side (which indicates you are about to close your shape.) Now, on to our arrow tools. ![003_trap](/uploads/2014/01/003_trap.jpg)

# The Arrow Tools: Select and Edit

The first arrow tool in the top left is the **select and transform** tool. What this tool does is allows you to move around objects, scale them, skew them, and rotate them. Select this tool and click on your polygon (you'll have to click on the lines, not the middle.) What you'll see is little arrows surrounding it with a dashed box. ![005_select01](/uploads/2014/01/005_select01.jpg) Click on these arrows and drag your mouse around to see what happens. See how you can scale your object? Now hold **[ctrl] **and do it. This maintains the proportions of your shape when you scale it. Now, click once on the shape (again: on the lines) The arrows should now change to allow you to rotate and skew the object. ![005_select02](/uploads/2014/01/005_select02.jpg) Experiment with these arrows and see what they do. Now hold **[shift] **and do it. Now **[ctrl]**. Holding shift allows you to rotate & skew the shape around a given point. Holding ctrl allows you to rotate it at 15 degree intervals (this comes in handy when you want to quickly rotate something, say, 90 degrees.)

Now that we're done skewing and rotating our shape, we're going to mess with our paths and nodes for a bit. Go ahead and select the second little arrow tool, the **edit paths by nodes** tool. What you'll now see happen is little dots will appear at each of the points on your polygon.

![006_nodes](/uploads/2014/01/006_nodes.jpg) These are your nodes. Try clicking on a node and dragging it around, see what happens. Now, click somewhere outside one node and drag your mouse across the screen (you should see a box form). Drag this box so it surrounds two nodes and let go (they should turn blue) Click on one of your blue nodes and try dragging it around. See how you can move more than one node at a time? See how it changes the shape?

Hold down the **[shift]** key and click on a third node. Start dragging these nodes around. You can shift click nodes at any time to select or deselect them. Now, try clicking and holding on one of your paths. See how you can create a curve by dragging a path?

![007_bezier-curve](/uploads/2014/01/007_bezier-curve.jpg)Hold **[ctrl] **and hit **[Z] **to undo what you just did until you have a straight-lined polygon again. (If you don't already know about ctrl-z, well, I just introduced you to your new best friend.)

Alright, now for something a little different. Now you're going to hold **[ctrl]** and click once on one of your nodes. You probably now have a curved line, but it's a little different than your bezier. What's going on here?

![008_smooth](/uploads/2014/01/008_smooth.jpg)

What you just did by ctrl-clicking your node is you converted it to a different kind of nodes. There are several kinds of nodes, but the only ones that I really understand the difference between are cusp nodes and smooth nodes.

![how to create knitting schematics](/uploads/2014/01/003_smooth-cusp.jpg)

As you can see, smooth nodes are nodes that have curved points coming out from them, and cusps are basically like corners. This is very handy to know because when you are drawing, say, a sweater, it's easiest to block it out with a bunch of straight lines and then convert some of your points to smooth nodes to create nice smooth shoulders or slopes. Fun, eh?

Alright, delete your beloved polygon.  Oh wait--when you press delete and you still have the **node tool** selected, it will only delete a node. If you don't have any nodes selected it won't do anything.

So go ahead and press **[F1] **to get the select tool, then press **[delete]. **Voila, polygon is gone. We're going to mess around with circles for a bit while we explore a few more concepts.

# Circles, Strokes, and Fills

Next we're going to explore what paths, strokes, and fills are and how they differ from each other. We're going to do this with circles so that you have a chance to mess around with that tool too.

Go ahead and select the circle tool, and draw yourself an ellipse. If you want your ellipse to actually be a circle, all you have to do is press and hold **[ctrl]**, which will lock 1:1 proportions. If you hold **[shift]**, it will draw your ellipse from the center. (Can you see how handy the ctrl & shift buttons are? I'm going to stop mentioning them now, but you should definitely continue to experiment with what happens when you use them.)

![009_circle](/uploads/2014/01/009_circle.jpg)

Now, go up to your top menu and select Object > Fill and Stroke

![010_fill-stroke-menu](/uploads/2014/01/010_fill-stroke-menu.jpg)

This will open a box on the right side of the screen. I want you to take note of the fact that there are opacity and blur sliders at the bottom.

I never use the blur slider. The opacity slider however,  can be handy when you want to de-emphasize lines (like if you want to show where ribbing ends, or the shape of a set-in sleeve. Anything that isn't super important to finished measurements but might be worth having in the schematic.)

![011_fill](/uploads/2014/01/011_fill.jpg)

Now lets talk about what "fills" and "strokes" are. You may know by now that your shapes are made up of paths, which are more or less lines. What you probably don't know is that your shapes have already had **strokes** applied to them automatically by the program.

What does this mean? Well, a path isn't technically something that is "visible." It's really just the information the computer uses to connect two points in a certain way. When there is no stroke, it still gets displayed as a very thin line, but if you were to save the file it would be invisible. A stroke is what it sounds like, it's a stroke of color being applied to the path to give it an outline.

A fill is also what it sounds like, it's color that fills the interior of a shape. You can create fills by clicking any of the buttons under the "fill" tab--from left to right each of the buttons will create: 1.a solid fill (this can also be accomplished by clicking any of those little colorful boxes at the bottom of the screen), 2. a gradient fill 3. a center weighted gradient fill, 4. a patterned fill 5. a swatch 6. an unset fill. Click around on each of these buttons and see what happens, see how you can change colors, see how you can fill in with patterns. Fills aren't terribly useful for most knitting schematics, but you may as well see how they work.

Now click over to the stroke paint tab. This tab has very similar options to the fill tab, and allows you to change the color of your outline. Again, not terribly useful for knitting schematics (black lines are really all you'll probably ever use) but still good to know.

Finally, the stroke style tab. This will come in very handy.

![012_stroke-style](/uploads/2014/01/012_stroke-style.jpg)

All kinds of goodies here. Let's go through them.

Width: This is how heavy your stroke line is. This is really important, because when you scale your drawing you might not want the weight of your lines to get all thick. You can thin them back down with this. Go ahead and make this number bigger and smaller and watch how it affects your circle's outline.

Join: This is how your stroke will look around corners.

Miter Limit: This has to do with joins and how curved or flat your corners will be.

Cap: How the end of your lines will look.

Dashes: Make your lines dashed, if you want.

Markers: These are great. This is what you can use to create cute little arrows (or end dots on your measurement lines.) Go ahead and click on some of these. Since you have a circle, they'll appear on the points around the circle, but you can always draw another bezier curve and see where they appear on there. Start markers will always affect your first node, end markers your last, and mid markers the nodes in between.

So at this point if you've been experimenting with all these features, you'll hopefully have a colorful circle with some fun features. Let's go ahead and mess with one more tool before we quit.

![013_strokesandmarkers](/uploads/2014/01/013_strokesandmarkers.jpg)

# The Text Tool

This one is going to come in handy when you need to add measurements to your schematics, and it's really easy to use. So go ahead and select the text tool from the left menu bar.

Click somewhere on your picture, and type something. Then click outside what you just typed. Then hit **[F1]**.

Your text is now an object, how handy. You can scale it, rotate it, change it's color, etc. etc. A good thing to note is that text is created as shapes, so when you change the fill color it will actually change the color of your letters. Each letter is made up of an outline of paths, so if you stroke it you'll create outlined text.

(This is actually true of all fonts. Fonts are vectors. This is why you can scale them. See how I am unlocking your understanding of the whole world?)

After you've messed with your text for awhile, take a step back and look at all that you've learned. Do you feel like a true-blue vector artist yet?

![art-so-beauty](/uploads/2014/01/art-so-beauty.jpg)

Okay so maybe I have a little ways to go before I truly master this whole vector thing. But everything _you've_ learned here in this tutorial is about 90% of what you'll need to know when we get down to drawing up our actual schematics. We'll learn a few more tricks along the way, but I don't want to slam your brain with too much minutiae just yet.

# In Closing

<span style="font-size: 14px; line-height: 1.5em;"> </span>That is all for this weeks tutorial. What you should do before the second part comes out next week is just sit down and start messing around with the program. Try out all those tools I showed you, get a feel for what everything does, and try just making some fun doodles. Try out the other tools too. Don't forget to use the hot keys and really get a feel for how they work--they will save you loads of time in the long run and you'll get a lot more use out of the program if you're not having to constantly click through menus. **[ctrl]** and **[shift]** click the %*^# out of everything, you'll discover all kinds of neat things you can do. Try out some of the tools I didn't cover here, try looking through the menu options.
