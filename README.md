# Kamel.Adjei-DAT405-2
Simple sketch of four locations displaying time

This work was inspired by the works of  Daniel Shiffman, John Maeda and Caleb Brewer, who have all made examples of clocks similar to my work.
In this assignment, I decided to use an API based on timezones.The development of this work was very time-consuming but fun and educational, I spent hours trying to come up with the best concept on how to portray the times of different locations.
My first idea was to display the text with an animated background where a sun-shaped object would rise and set based on the timezone of the location, simultaneously changing the background if it was the evening dark-blue or morning, bright -orange.
Initially, I also wanted the locations to switch everytime the browser was refreshed or toggle or switch between locations when or if the mouse button was pressed.
but I came to a conclusion that “keyPressed” would be the most appropriate event for this work.
I started by loading the four “urls” I would be using for the four locations, I then proceeded to create variables for the videos that would appear when the code would be called.
I used “console.log” to print out the most important details from the timezone database I received.I used  “time-lapse” videos for all the locations I would be using which were America, Tawai, Ghana and Russia.To check these, simply  right-click your mouse on the webpage and when the options appear, click “Inspect”.This will open up a side window with tabs on top.Click the second tab named “Console” to view this information and also inspect other details of the code.
I encountered some problems because I did not know how to link some of the code together for example “thisthing.formatted”, but after I researched more I understood how to display the code.
I also had some minor issues with “Timezonedb” because normal users had a rate limit when sending a request to the server.This prevented me from loading more than two URLs so I had to upgrade to a premium user which cost money.
After thinking and planning, I came up with the idea or concept to display the text of a location, date, time and display a video of that location when a particular set of keys were pressed.
I made a simple clock which can be seen above the text.This was done to also add a more aesthetic look to the viewer.Each clock was coded to move based on the country displayed.
I used an image pattern with colour for the background of the webpage since it looked appealing with the sketch.
The basic instructions to use the sketch can be seen on the canvas.Press and hold “q” to show Tawai, Press and hold “w” to show Ghana and press and hold “e” to show Russia.It should be known that America will always be displayed until one of the events occur.
In summary, this sketch is a simple portrayal of switching between  locations.
