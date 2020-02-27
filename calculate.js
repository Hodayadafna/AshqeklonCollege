
function calcLapland() {
     var numPeople = document.getElementById("numpeople").value;
    var price= 150;
    var finalPrice = numPeople*price;
    if(numPeople == 0)
        alert("נא הקלד את מספר הנוסעים");
    else
        alert("מחיר לאדם בודד הינו " + price + " USD " + "\nמחיר סופי הינו " + finalPrice + " USD");
}

function calcMadrid() {
    var numPeople = document.getElementById("numpeople").value;
    var price= 50;
    var finalPrice = numPeople*price;
    if(numPeople == 0)
        alert("נא הקלד את מספר הנוסעים");
    else
        alert("מחיר לאדם בודד הינו " + price + " USD " + "\nמחיר סופי הינו " + finalPrice + " USD");
}
  function calcRoma() {
    var numPeople = document.getElementById("numpeople").value;
    var price= 100;
    var finalPrice = numPeople*price;
    if(numPeople == 0)
        alert("נא הקלד את מספר הנוסעים");
    else
        alert("מחיר לאדם בודד הינו " + price + " USD " + "\nמחיר סופי הינו " + finalPrice + " USD");
}
function calcPrague() {
    var numPeople = document.getElementById("numpeople").value;
    var price= 80;
    var finalPrice = numPeople*price;
    if(numPeople == 0)
        alert("נא הקלד את מספר הנוסעים");
    else
        alert("מחיר לאדם בודד הינו " + price + " USD " + "\nמחיר סופי הינו " + finalPrice + " USD");
}