let selectedType;
let type1 = document.getElementById("type1").innerHTML;
let type2 = document.getElementById("type2").innerHTML;
let celsius, fahrenheit, text1, convertresult;

function change(){
  selectedType = document.getElementById("temps").value;
  console.log("Selected:", selectedType);
  changetype(selectedType);
}

function changetype(value){
  if (!value){
    alert("no value");
    return;
  }

  console.log("changing");

  if (value === "c"){
    document.getElementById("type1").innerHTML = type2;
    document.getElementById("type2").innerHTML = type1;
  } else {
    document.getElementById("type1").innerHTML = type1;
    document.getElementById("type2").innerHTML = type2;
  }

  if (text1) convert();
}

function convert(){
  text1 = document.getElementById("text1").value;

  if (!selectedType){
    console.log("have no value");
    return;
  }

  if (!text1){
    alert("Error: No input");
    return;
  }

  if (selectedType === "c"){
    celsius = Number(text1);
    convertresult = celsius * 9 / 5 + 32;
  } 
  if(selectedType === "f"){
    fahrenheit = Number(text1);
    convertresult = (fahrenheit - 32) * 5 / 9;
  }

  console.log(convertresult);
  document.getElementById("result").innerHTML = convertresult;
}
