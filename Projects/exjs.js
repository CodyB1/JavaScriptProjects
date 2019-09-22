var fortuneTeller =
  {
    nrOfChildren: 5,
    partnersNameF: "Bill",
    partnersNameM: "Linda",
    geoLocation: "Canada",
    profession: "Dentist"
  };
//console.log(fortuneTeller);




function whatSexisUser() {

      if (sexPrompt === "f"){
        console.log(futureF);
      } else if (sexPrompt === "m"){
        console.log(futureM);
      } else {
        alert("Try again with f for female and m for male.");
      }

 }


var futureF = 'You will be a ' + fortuneTeller.profession + ' in ' + fortuneTeller.geoLocation + ', and married to ' +
      fortuneTeller.partnersNameF + ' ' + ' with ' + fortuneTeller.nrOfChildren + ' kids.';
var futureM = 'You will be a ' + fortuneTeller.profession + ' in ' + fortuneTeller.geoLocation + ', and married to ' +
      fortuneTeller.partnersNameM + ' ' + ' with ' + fortuneTeller.nrOfChildren + ' kids.';
//console.log(futureF);


var sexPrompt = prompt("Please enter F for female or M or man");

//console.log(sexPrompt);
whatSexisUser();
