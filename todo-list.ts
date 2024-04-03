#! /usr/bin/env node
/*  -:To-Do List Home Work Assignment with Chalk:-
    *Project Objectives*
    . Add
    . Delete
    . Update
    . Read
    . Exit
    1 Importing the 'inquirer' module for user interaction. Inquirer with TypeScript offers type safety, IntelliSense, readability, refactoring support, and better documentation for building command-line interfaces.
    2 Importing the chalk module for text styling and coloring
    3 let todoList: [] // Shopping Bag []
    4 let condition: // Variable to control the loop condition.
    5 while (condition) Loop to continuously prompt the user for input until condition is false.
    6 await - for user input from inquirer.prompt() before proceeding, and Prompting the user with questions to add To-Do List.
    7 type input - Prompting the user for freeform text input.
    8 NPM - Login & Publish
*/                                               

import inquirer from "inquirer";                           
import chalk from "chalk";                                  

let todoList: string[] = [];                                
let condition: boolean = true;                             

console.log(chalk.bgRed("\n\t\ Welcome to your To-Do List!"));

while (condition) {                            

let todoQuestions = await inquirer.prompt
    (
        
        [                 
            {
                name: "action",
                type: "list",
                message: "What would you like to do?",
                choices: ["Add", "Delete", "Update", "Read", "Exit"]
            }
        ]
    );

switch (todoQuestions.action){
    case "Add":
        let newTodo = await inquirer.prompt
        (    
            {
                name: "todo",
                type: "input",   
                message: chalk.green("Enter the task you want to add:")
            }
        );

        todoList.push(newTodo.todo);
        console.log(chalk.green("Task added successfully!"));
    break;

    case "Delete":
        if (todoList.length === 0)
        {
            console.log(chalk.red("Your To-Do List is empty. No tasks to delete."));
        } 
        else 
        { let deleteTodo = await inquirer.prompt
            (
                {
                    name: "index",
                    type: "input",
                    message: chalk.red("Enter the index of the task you want to delete:")
                }
            );

            // Complicated! Task Validation and Execution - Don't worry
            let indexToDelete = parseInt(deleteTodo.index);
            if (!isNaN(indexToDelete) && indexToDelete >= 0 && indexToDelete < todoList.length)
            {
                todoList.splice(indexToDelete, 1);
                console.log(chalk.red("Task deleted successfully!"));
            } 
            else
            { 
                console.log(chalk.red("Invalid index! Please enter a valid index."));
            }
        }
    break;
            

    case "Update":
        if (todoList.length === 0)
        {
            console.log(chalk.yellow("Your To-Do List is empty. No tasks to update."));
        } 
        else 
        {
            let updateTodo = await inquirer.prompt
            (
                [
                    {
                    name: "index",
                    type: "input",
                    message: chalk.yellow("Enter the index of the task you want to update:")
                    },
                    {
                    name: "newTask",
                    type: "input",
                    message: chalk.yellow("Enter the new task:")
                    }
                ]
            
            );

            // Complicated! Task Validation and Execution - Don't worry
            let indexToUpdate = parseInt(updateTodo.index);
            if (!isNaN(indexToUpdate) && indexToUpdate >= 0 && indexToUpdate < todoList.length)
            {
                todoList[indexToUpdate] = updateTodo.newTask;
                console.log(chalk.yellow("Task updated successfully!"));
            } else 
            {
                console.log(chalk.yellow("Invalid index! Please enter a valid index."));
            }
        }
    break;


    case "Read":
        if (todoList.length === 0)
        {
            console.log(chalk.blue("Your To-Do List is empty. No tasks to display."));
        } 
        else 
        {
            console.log(chalk.blue("Your To-Do List:"));
            todoList.forEach((task, index) => {
            console.log(chalk.blue(`${index + 1}. ${task}`));
            }
            );
        }
    break;

    case "Exit":
            condition = false;
    break;

    default:
            console.log(chalk.red("Invalid choice! Please select a valid action."));
    break;
    }
}

console.log(chalk.bgGreen("Thank you for using the To-Do List CLI!"));

