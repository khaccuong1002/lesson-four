function myCurrency() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let Result;

    if (from == "USD" && to == "VND") {
        Result = "Result: " + (amount * 23000) + " VND";
    } else if(from == "VND" && to == "USD") {
        Result = "Result: " + (amount / 23000) + " $";
    } else if (from == "VND") {
        Result = "Result: " + amount + " VND";
    } else {
        Result = "Result: " + amount + " $";
    }
    document.getElementById("Result").innerHTML = Result;
}