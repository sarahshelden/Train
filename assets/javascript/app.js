
//firebase
var config = {
    apiKey: "AIzaSyCJ0zvx-iiVJY8CzPoYrRz8eWOTHflp4wc",
    authDomain: "train-5b4ea.firebaseapp.com",
    databaseURL: "https://train-5b4ea.firebaseio.com",
    projectId: "train-5b4ea",
    storageBucket: "train-5b4ea.appspot.com",
    messagingSenderId: "300013631447"
};
firebase.initializeApp(config);

//global variables
var database = firebase.database();

var name="";
var destination= "";
var time= "" ;
var frequency = 0;

// add train button

    $('#add-train-btn').on('click', function(event) {
    event.preventDefault();
    console.log("add train btn fired");


//user input

    var trainDestination = $('#destination-input').val().trim();
    var trainName = $('#train-name-input').val().trim();
    var trainFrequency = $("#frequency-input").val().trim();
    var trainTime = $("#start-input").val().trim();
        console.log(trainTime);
    //var trainStart = moment(trainTime, "HH:mm").format("X");
       // console.log(trainStart);



// local obj for storing train information
var newTrain = {

    destination: trainDestination,
    name: trainName,
    //start: trainStart,
    frequency: trainFrequency
};



//push data to server database

database.ref("/").push(newTrain);

$("#destination-input").val("");
$("#train-name-input").val("");
$("#start-input").val("");


});