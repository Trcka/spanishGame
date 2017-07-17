// Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAUhckuI7eonmR3kNmUC3vBOrnoz2NLscY",
  //   authDomain: "yeah-8ac6b.firebaseapp.com",
  //   databaseURL: "https://yeah-8ac6b.firebaseio.com",
  //   projectId: "yeah-8ac6b",
  //   storageBucket: "yeah-8ac6b.appspot.com",
  //   messagingSenderId: "1051077492767"
  // };
  // var database = firebase.database();
  // var app = firebase.initializeApp(config, "app");
//First screen on click
$("#go").on("click", function(){
	//Save the name feild to firebase
	var name = $("#name").val();  //////////////Save Variable in firebase!
	
	$(".screen1").addClass("rotateOutUpRight");
	$(".screen1").removeClass("fadeIn");
	$(".name").hide(2000);
	$(".screen1").hide(2000);
	$(".screen2").show();
	$("#screen2").show();
	$("#camera").show();
	$("#camera").addClass("bounceIn");
	$("#screen2text").css("display", "inline-block");
	$("#screen2text").addClass("bounceIn");
	$("#hi").text("Hello, " + name);
});

//When user uploads a photo
$('input[name=userImage]').change(function(ev) {

    alert("image received");
    $(".screen2").hide(2000);
    $(".screen3").show(2000);
});

//Image Results-Show image
document.getElementById('file-input').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("file-input").files[0];
    var uploader = document.getElementById("file-input");

    // var storageRef = firebase.storage(app).ref(file.name);
    // storageRef.put(file);


    var reader = new FileReader();
    reader.onloadend = function(){
        document.getElementById('image').style.backgroundImage = "url(" + reader.result + ")";        
    };
    if(file){
        reader.readAsDataURL(file);
    }else{
    }
}

// on change function child snapshot
// $("word1").html(database.child)

//If you click a word to learn the rest disappear
$("#word1").on("click", function(){
	$("#word2,#word3,#word4").addClass("slideOutLeft");
	$("#word2,#word3,#word4").hide(2000);
});
$("#word2").on("click", function(){
	$("#word1,#word3,#word4").addClass("slideOutLeft");
	$("#word1,#word3,#word4").hide(2000);
});
$("#word3").on("click", function(){
	$("#word2,#word1,#word4").addClass("slideOutLeft");
	$("#word2,#word1,#word4").hide(2000);
});
$("#word4").on("click", function(){
	$("#word2,#word3,#word1").addClass("slideOutLeft");
	$("#word2,#word3,#word1").hide(2000);
});




