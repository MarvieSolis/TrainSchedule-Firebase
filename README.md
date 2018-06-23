# TrainSchedule-Firebase

## The Function of This Program
This is a real-time train schedule that utilizes **Firebase** to store and receive information from a database. This allows all users who visit the website to see the same train schedule. All trains listed can be edited or deleted by using the buttons located at the very right-hand column. When choosing to edit a train, a modal will pop up with a form similar to the one on the bottom of the page. When choosing to delete a train, a prompt will pop up, asking th user if they are sure they want to delete train. At the bottom of the page, users can fill out the form in order to add another train.

The layout and design of the website was created using **Bootstrap** through HTML and CSS. It is themed after the video game franchise Fallout by Bethesda game studios. Fonts were pulled from [Goolgle Fonts](fonts.google.com) for the clock and headings and icons were used from [Fontawesome](fontawesome.com) for the edit and remove buttons.

To go further into the functionality, the use of **Javascript** and **jQuery** allows the use of an internet database to store and recieve information. An *On-click* function is used on the submit button to gather the information in the input fields on the new train. The information is then stored into multiple variables and sent to Firebase. The information is then retrieved from Firebase and sent back to the website appending new rows onto the table to display the train information. The edit and remove buttons are appended as well but containing the Firebase key to enable the functionality to deleting and editing the Firebase information.

The timing information is done using *Moment.js*. THis allows websites to gather information about time and perform computations such as adding or subtracting time, converting, or even changing time zones.


## The Usefulness
Using this website and upon inspection of the code can help people understand how to utilize Firebase to store and receive data to display information realtime. This website also shows how to use jQuery to create On-Click functions and generate elements and buttons dynamically. As for general use, this website is good creating a routine schedule.


## Getting started
People can learn more about using jQuery by looking through websites such as [jQuery.com](https://www.jquery.com/) or [w3schools](https://www.w3schools.com/jquery/default.asp). To learn more about Firebase, visit this page for [Firebase](https://firebase.google.com/).


##The Site is live!
[Click here to see the page!](https://marviesolis.github.io/TrainSchedule-Firebase/)