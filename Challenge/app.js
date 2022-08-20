// Eduardo Rodriguez Tic tac toe challenge 
// started:6
//finsied :10

const statusDiv = document.querySelector('.status')
const resetDiv = document.querySelector('.reset')
const cells = document.querySelectorAll('.gamecell')


//making the game go live

let computerTurn=true
let humanTurn = true
let person = prompt("Type 'YES' to go first, type 'Pass' for the computer to go first.");
let text;
if (person.toUpperCase === "YES") {
  humanTurn;
} else {
    computerTurn;
}



//this is adding the x and os to the divs when they have been clicked on. and make sure it doesnt overide.

const CellClick = (e) => {
    console.log(e)
    const classList = e.target.classList


if (classList[2]==='x' || classList[2]==='o'){
    return;

}

if(humanTurn){
    classList.add("x")
    humanTurn= !humanTurn
    } else{
        classList.add("o")
        humanTurn= !humanTurn
    }


}


// run through all the div within the container and gives them an event handler to click on 
for (const cell of cells){
    cell.addEventListener('click', CellClick)
    
}




/* This is where I left off. At lot of what was ask was new to me (and humbled me) so a lot of my time went to figuring out 
how to make the x's and o's appear and the bugs I ran into.

If I had more time I would use a function to let the computer put an x/o in an empty cell, that I do not know how to do and I would youtube it. My guess to do that
would be to run through the "array' of the container, verify which is empty, and mark an o.

To see who won, I would make a function to see all the winning combos, using the indexes,keep track of the clicks, and have if statements verifying the winning 
combos, that woudl then prompt the winning funciton, if not then the losing function or tie function; all of which clears the makrs.





*/