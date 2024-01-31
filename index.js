// Module package CORE

/*const fs = require('fs');
const data = fs.readFileSync('./input.txt', 'utf8');
console.log(data);

console.log('*********');

fs.writeFileSync("./input.txt", `${data} \n\t\t by Me`);
const new_data = fs.readFileSync("./input.txt", "utf8");
console.log(new_data);

let number = 0;
setInterval(function() {
    console.log("hisob", number);
    number++;
}, 1000);*/


// Module package External

/*const moment = require('moment');
const time = moment().format('YYY-MM-DD');


setInterval(() => {
    console.log(`Current time: ${time}`);
}, 5000);*/

/*const inquirer = require("inquirer");
inquirer
    .prompt([{ type: "input", name: "raqam", message: "raqamni kiriting? " }])
    .then((answer) => {
        console.log("Men kiritgan raqam qiymati: ", answer.raqam);
    })
    .catch((err) => console.log(err));*/

/*const validator = require('validator');
const test = validator.isEmail('foo@bar.com'); //=> true
const test = validator.isInt("100");
console.log("test:", test);*/

/*const { v4: uuidv4 } = require('uuid');
const random = uuidv4();
console.log("random:", random);*/

const chalk = require('chalk');
const log = console.log;

log(chalk.blue('Hello') + random + chalk.red('!'));