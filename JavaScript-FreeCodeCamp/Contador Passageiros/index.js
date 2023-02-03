//document.getElementById("count-el").innerText = 5;

//ctrl+k+c envelopa tudo selecionado para ser comentario
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch
// console.log(count)

// 1. Create two variable, my Age and humanDogRatio
// 2. Multiply the two together and store the result in myDoAge
// 3. Log myDogAge to the console

// let myAge = 32;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);



// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);


// function increment(){
//     console.log("The burron was clicked")
// }


// Setting up the the race 🏎 🏎 🏎

// function countdown(){
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown();



// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

// function logNumber(){
//     console.log(32)
// }

// logNumber();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

//Create a function that logs out the sum of all the lap times

//Como eu fiz:
// let laptotal = lap1+lap2+lap3;

// console.log(laptotal);

//Como o professor fez:
// function logLapTime(){
//     //let totalTime = lap1 + lap2 + lap3
//     console.log(lap1 + lap2 + lap3)
// }

// logLapTime()



// let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
// Run it threee times

// function laps(){
//     lapsCompleted = lapsCompleted +1;
//     console.log(lapsCompleted)
// }

// laps()

// function laps(){
//     lapsCompleted = lapsCompleted +1;
//     console.log(lapsCompleted)
// }

// laps()

// function laps(){
//     lapsCompleted = lapsCompleted +1;
//     console.log(lapsCompleted)
// }

// laps()

let saveEl = document.getElementById('save-el');
let count = 0;

function increment(){
    count += 1;
    document.getElementById("count-el").innerText = count;
}

function decrement (){
    if (count > 0){
        count -= 1;
        document.getElementById ("count-el").innerText = count;
    }
}

function zerar(){
    count = 0;
    document.getElementById ("count-el").innerText = count;
}

function save(){
    saveEl.textContent += " "+ count + " -";
    count = 0;
    document.getElementById ("count-el").innerText = count;

}
