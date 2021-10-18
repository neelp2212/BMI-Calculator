function calculate()
{
    var height = parseInt(document.getElementById("heightInputId").value);
    var width = parseInt(document.getElementById("weightInputId").value);
    var y = converter(height);
    var calculation = width / (y*y);
    document.getElementById("result").innerHTML = calculation;
    overviewResult(calculation);

}
function converter(x)
{
   var a = x/100;
   return a;
}

function overviewResult(calculation)
{
    if (calculation < 18.6) {
            document.getElementById("print").innerHTML = "Under Weight (Less than 18.6)";
    }
    else if(calculation >= 18.6 && calculation <= 24.9 ){
            document.getElementById("print").innerHTML = "Normal Range (18.6 and 24.9)";
    }
     else {
        document.getElementById("print").innerHTML = "Over Weight (greater than 24.9)";
    }
}


