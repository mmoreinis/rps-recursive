alert(uTurn());

function uTurn() {
    let choice = prompt("enter r, p, or s");
    if (choice != "r" && choice != "p" && choice != "s") {
        alert("must be r, p, or s");
        uTurn();
    }
    else return choice;
}
