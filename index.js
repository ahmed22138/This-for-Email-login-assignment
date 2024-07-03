let email = "ahmedzahid1149@gmail.com";
let password = 123;
import inquirer from "inquirer";
import chalk from "chalk";
const login = await inquirer.prompt([
    {
        name: "email",
        type: "input",
        message: "Enter your email",
    },
    {
        name: "password",
        type: "number",
        message: "Enter your password",
    },
]);
if (login.email === "ahmedzahid1149@gmail.com") {
    console.log(chalk.greenBright("login successfuly"));
}
else if (login.password === 123456) {
    console.log("login successfuly");
}
else {
    console.log(chalk.red("login failed"));
}
