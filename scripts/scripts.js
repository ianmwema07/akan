function display (){
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var sexMale = document.getElementById("male").checked;
  var sexFemale = document.getElementById("female").checked;
 /**cc */ var centuryOfBirth = parseInt(dateOfBirth.slice(0,2)) ;
 /**yy */ var yearOfBirth = parseInt(dateOfBirth.slice(2,4));
 /**mm */ var monthOfBirth = parseInt(dateOfBirth.slice(5,7));
 /**dd */ var dayOfBirth =  parseInt(dateOfBirth.slice(8,11));

 var  dayOfTheWeek =  parseInt(Math.ceil((((centuryOfBirth/4) -2*centuryOfBirth-1) + ((5*yearOfBirth/4)) + ((26*(monthOfBirth+1)/10)) + dayOfBirth ) % 7)); 
 var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
 var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  if(sexMale == true){
    if(dayOfTheWeek == 1) {
      alert();
    } else if(dayOfTheWeek == 2){

    } else if(dayOfTheWeek == 2){
      
    } else if(dayOfTheWeek == 2){
      
    } else if(dayOfTheWeek == 2){
      
    } else if(dayOfTheWeek == 2){
      
    } else if(dayOfTheWeek == 2){
      
    }else {
      alert("Invalid Entry");
    }
  }else if(sexFemale == true) {
    alert("Female");
  }
  
}