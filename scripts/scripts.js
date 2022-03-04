function display (){
//Variable declaration
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var sexMale = document.getElementById("male").checked;
  var sexFemale = document.getElementById("female").checked;
  var centuryOfBirth = parseInt(dateOfBirth.slice(0,2)); /**cc */
  var yearOfBirth = parseInt(dateOfBirth.slice(2,4)); /**yy */
  var monthOfBirth = parseInt(dateOfBirth.slice(5,7)); /**mm */ 
  var dayOfBirth =  parseInt(dateOfBirth.slice(8,11));  /**dd */
//calculation to get the day of the week
  var  dayOfTheWeek =  parseInt(Math.ceil((((centuryOfBirth/4) -2*centuryOfBirth-1) + ((5*yearOfBirth/4)) + ((26*(monthOfBirth+1)/10)) + dayOfBirth ) % 7)); 
 //collection of male and female Akan names 
  var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
  var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  //Business Logic
    if(sexMale == true){
      if(dayOfTheWeek == 1) {
        // alert(maleAkanNames[0] + dayOfTheWeek);
        alert("You are male and you were born on Sunday therefore your Akan name is "+maleAkanNames[0]);
      } else if(dayOfTheWeek == 2){
        alert("You are male and you were born on Monday therefore your Akan name is "+maleAkanNames[1]);
      }
      else if(dayOfTheWeek == 3){
        alert("You are male and you were born on Tuesday therefore your Akan name is "+maleAkanNames[2]);
      } else if(dayOfTheWeek == 4){
        alert("You are male and you were born on Wednesday therefore your Akan name is "+maleAkanNames[3]);
      } else if(dayOfTheWeek == 5){
        alert("You are male and you were born on Thursday therefore your Akan name is "+maleAkanNames[4]);
      } else if(dayOfTheWeek == 6){
        alert("You are male and you were born on Friday therefore your Akan name is "+maleAkanNames[5]);
      } else if(dayOfTheWeek == 7){
        alert("You are male and you were born on Saturday therefore your Akan name is "+maleAkanNames[6]);
      } else {
        alert("Invalid Entry");
      }
    } else if(sexFemale == true) {
      if(dayOfTheWeek == 1) {
        alert("You are female and you were born on Sunday therefore your Akan name is "+femaleAkanNames[0]);
      } else if(dayOfTheWeek == 2){
        alert("You are female and you were born on Monday therefore your Akan name is "+femaleAkanNames[1]);
      } else if(dayOfTheWeek == 3){
        alert("You are female and you were born on Tuesday therefore your Akan name is "+femaleAkanNames[2]);
      } else if(dayOfTheWeek == 4){
        alert("You are female and you were born on Wednesday therefore your Akan name is "+femaleAkanNames[3]);
      } else if(dayOfTheWeek == 5){
        alert("You are female and you were born on Thursday therefore your Akan name is "+femaleAkanNames[4]);
      } else if(dayOfTheWeek == 6){
        alert("You are female and you were born on Friday therefore your Akan name is "+femaleAkanNames[5]);
      } else if(dayOfTheWeek == 7){
        alert("You are female and you were born on Saturday therefore your Akan name is "+femaleAkanNames[6]);
      } else {
        alert("Invalid Entry");
      }
    }else {
      alert("invalid input: Kindly insert the date and also select your gender.");
    }
  
}