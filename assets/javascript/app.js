// FIREBASE / JS

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBBdlXSlMNKmjCR3itcTiBcZn65zZu_I4w",
    authDomain: "commonwealth-train-schedule.firebaseapp.com",
    databaseURL: "https://commonwealth-train-schedule.firebaseio.com",
    projectId: "commonwealth-train-schedule",
    storageBucket: "",
    messagingSenderId: "171217221893"
};

firebase.initializeApp(config);

var database = firebase.database();

// Variable and Input
var trainName = "";
var destination = "";
var firstTrain = 0;
var freq = 0;
var currentTime = moment();


// Grabbing user input

$("#newTrain").on("click", function(event) {
    event.preventDefault();

    // Inputs into variables
    trainName = $("#nameInput").val().trim();

    destination = $("#destinationInput").val().trim();

    firstTrain = $("#firstInput").val().trim();

    freq = $("#frequencyInput").val().trim();





    // Send to Firebase Database
    database.ref().push({
        trainName: trainName,
        destination: destination,
        firstTrain: firstTrain,
        freq: freq
    });


    // Clear fields
    $('#myform')[0].reset();

    return false;

});

// Time conversions and calculations
database.ref().on("child_added", function(childSnapshot) {

    var freq = childSnapshot.val().freq;
    var NewFirstTrain = moment(firstTrain, "HH:mm").subtract("1, years");
    var difference = currentTime.diff(moment(NewFirstTrain), "minutes");
    var remainder = difference % freq;
    var newTrain = freq - remainder;
    var nextTrain = moment().add(newTrain, "minutes").format("hh:mm a");



    // Sending info to schedule

    var Name = childSnapshot.val().trainName;
    var Place = childSnapshot.val().destination;
    var Interval = childSnapshot.val().freq;

    
    $("#schedulePanel>tbody").append("<tr><td> >   " + Name  +  "</td><td>" + Place +  "</td><td>" + Interval + "</td><td>" + nextTrain + "</td><td>" + newTrain + " min</td></tr>");


    // Error check
}, function(errorObject) {
    console.log("Errors: " + errorObject.code);
  });



// Clock in header
setInterval(function(){
    $("#clock").html(moment(moment()).format("hh:mm:ss a"));
}, 1000);






