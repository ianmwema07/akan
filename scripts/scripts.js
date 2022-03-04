function display (){
  var dateOfBirth = document.getElementById("dateOfBirth").value;
  var dateArray = [];
  dateArray.push(dateOfBirth);
  var sexMale = document.getElementById("male").checked;
  var sexFemale = document.getElementById("female").checked;

  if(sexMale == true){
    alert("Male");
  }else if(sexFemale == true) {
    alert("Female");
  }
  
}