#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("\x1b[1m\x1b[36m"); // Set text to bold and cyan color
console.log("*******************************************");
console.log("*                Quiz System              *");
console.log("*******************************************");
console.log("\x1b[0m"); // Reset text formatting
async function startQuiz() {
    const { name } = await inquirer.prompt({
        name: "name",
        type: "input",
        message: chalk.bold.blue("Enter Your Name:")
    });
    const quiz = await inquirer.prompt([
        {
            name: "question_1",
            type: "list",
            message: "\nQ1. What is the correct way to check if two values are not equal in Typescript?",
            choices: ['a == b', 'a === b', 'a = b', 'a !== b']
        },
        {
            name: "question_2",
            type: "list",
            message: "\nQ2. What is the output of the code: let arr = [10,20,30,40]; for (let val of arr) { console.log(val) }?;",
            choices: ['prints 1,2,3,4', 'prints 10,20,30,40', 'prints undefined', 'compiler error']
        },
        {
            name: "question_3",
            type: "list",
            message: "\nQ3. You need to compile a single TYpeScript file named (main.ts) into JavaScript. which of the following commands is used?;",
            choices: ['tsc main', 'run main.ts', 'tsc main.ts', 'compile main.ts']
        },
        {
            name: "question_4",
            type: "list",
            message: "\nQ4. Consider the code (let age = 25). What is the data type of the variable age?;",
            choices: ['number', 'boolean', 'string', 'any']
        },
        {
            name: "question_5",
            type: "list",
            message: "\nQ5. TypeScript compiler do?;",
            choices: ['Executes code directly', 'Transpiles TS to equivalent JS', 'Manages libraries', 'Provides a UI']
        },
        {
            name: "question_6",
            type: "list",
            message: "\nQ6. What is the correct syntax for a simple if statement in a function?;",
            choices: ['if (condition) { ... }', 'if (condition) ( ... )', 'if condition { ... }', 'if (condition) then { ... }']
        },
        {
            name: "question_7",
            type: "list",
            message: "\nQ7. What is the data type of the variable let isStudent = true;?;",
            choices: ['string', 'boolean', 'number', 'undefined']
        },
        {
            name: "question_8",
            type: "list",
            message: "\nQ8. What is the purpose of the logical AND operator (&&)?;",
            choices: ['To check if both conditions are true.', 'To check if both conditions are false.', 'To check if at least one condition is true.', 'All of the above']
        },
        {
            name: "question_9",
            type: "list",
            message: "\nQ9. What is the output of the expression true && false?;",
            choices: ['An error', 'false', 'true', 'The output depends on the variable values']
        },
        {
            name: "question_10",
            type: "list",
            message: "\nQ10. What is the logical NOT operator ( ! ) used for in TypeScript?;",
            choices: ['To perform arithmetic negation (e.g., !5 becomes -5).', 'To reverse the truth value of a condition (e.g., !true becomes false).', 'To compare two values for equality.e', 'undefined']
        }
    ]);
    let score = 0;
    switch (quiz.question_1) {
        case "a !== b":
            console.log(chalk.greenBright("1. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("1. Incorrect"));
    }
    switch (quiz.question_2) {
        case "prints 10,20,30,40":
            console.log(chalk.greenBright("2. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("2. Incorrect"));
    }
    switch (quiz.question_3) {
        case "tsc main.ts":
            console.log(chalk.greenBright("3. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("3. Incorrect"));
    }
    switch (quiz.question_4) {
        case "number":
            console.log(chalk.greenBright("4. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("4. Incorrect"));
    }
    switch (quiz.question_5) {
        case "Transpiles TS to equivalent JS":
            console.log(chalk.greenBright("5. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("5. Incorrect"));
    }
    switch (quiz.question_6) {
        case "if (condition) { ... }":
            console.log(chalk.greenBright("6. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("6. Incorrect"));
    }
    switch (quiz.question_7) {
        case "boolean":
            console.log(chalk.greenBright("7. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("7. Incorrect"));
    }
    switch (quiz.question_8) {
        case "To check if both conditions are true.":
            console.log(chalk.greenBright("8. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("8. Incorrect"));
    }
    switch (quiz.question_9) {
        case "false":
            console.log(chalk.greenBright("9. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("9. Incorrect"));
    }
    switch (quiz.question_10) {
        case "To reverse the truth value of a condition (e.g., !true becomes false).":
            console.log(chalk.greenBright("10. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.redBright("10. Incorrect"));
    }
    console.log(chalk.yellowBright(`\nResult: \nDear ${name}, you got ${score} marks out of 10.\n`));
    // Messages based on the score
    if (score === 10) {
        console.log(chalk.greenBright("Remarks: \nExcellent! Well done!"));
    }
    else if (score >= 7) {
        console.log(chalk.greenBright("Remarks: \nVery Good! Keep it up!"));
    }
    else if (score >= 5) {
        console.log(chalk.cyanBright("Remarks: \nGood, but needs improvement."));
    }
    else if (score >= 3) {
        console.log(chalk.redBright("Remarks: \nSatisfactory, but you need to work harder."));
    }
    else {
        console.log(chalk.redBright("Remarks: \nVery Poor. You need to pay attention to your studies."));
    }
}
startQuiz();
// "tsc && node index.js" command use to RUN the code on Terminal.
