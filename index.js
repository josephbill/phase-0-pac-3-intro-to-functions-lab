//function shout 
function shout(string){
   return string.toUpperCase();
}

//whisper
function whisper (string){
	return string.toLowerCase();
}

//function logshout
function logShout(string){
	console.log(string.toUpperCase());
}

//logWhisper
function logWhisper(string){
	console.log(string.toLowerCase());
}

//sayHiToHeadphonedRoommate
function sayHiToHeadphonedRoommate(string){
    let message = "";
	if (string == string.toLowerCase()) {
          message = "I can't hear you!";
	} else if (string == string.toUpperCase()) {
          message = "YES INDEED!";
	} else if (string == "Let's have dinner together!") {
		message = "I would love to!";
	}


	return message;


}
























