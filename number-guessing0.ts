#!/usr/bin/env node
function random(min:number , max:number):number{
    return Math.floor(Math.random()*(max-min+1)+min);
}
let randNum:number=random(1,1000)
const randomNum=random(1,1000);
import inquirer from 'inquirer';
async function getInput(): Promise<number> {
    const guess = await inquirer.prompt([
        {
            type: "input",
            name: "input1",
            message: "Guess a number : "
        }
    ]);
    return parseInt(guess.input1, 10);
}
async function compareInput(){
    let attempts:number=0; 
let guessedCorrectly:boolean=false;
while (!guessedCorrectly) {
    const userInput = await getInput();
    attempts++
    if(userInput==randNum){
        console.log("Congrulations! you guessed correctly in  ", + attempts +" attempts")
        guessedCorrectly=true;   
    }
    else if(userInput<randNum){
        console.log("Too low try again !!")
    }
    else{
    console.log("Too high try again !!")
};
}
}
compareInput();

