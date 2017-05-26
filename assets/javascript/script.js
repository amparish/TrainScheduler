// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQagGKej2dMlvxZWMtCCcoXjF9PxsV-Sk",
  authDomain: "train-scheduler-21fac.firebaseapp.com",
  databaseURL: "https://train-scheduler-21fac.firebaseio.com",
  projectId: "train-scheduler-21fac",
  storageBucket: "train-scheduler-21fac.appspot.com",
  messagingSenderId: "221213216943"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#addTrainBtn").on("click", function(event){
  event.preventDefault();

  var trainName = $("#train-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var trainTime = $("#time-input").val().trim();
  var freq = $("#freq-input").val().trim();

  var newTrain = {
    name: trainName,
    destination: destination,
    time: trainTime,
    frequency: freq
  };

  database.ref().push(newTrain);

  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  $("#train-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#freq-input").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildKey){

  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var freq = childSnapshot.val().frequency;

  console.log(trainName);
  console.log(destination);
  console.log(trainTime);
  console.log(freq);

  var trainTimePretty = moment.unix(trainTime).format("HH:mm");
});