#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");

const y = chalk.yellow;
const g = chalk.green;
const c = chalk.cyan;
const b = chalk.bold;
const i = chalk.italic;

const cardOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "blue",
    title: `${b("Mohit Kr Verma")} - ${i("An Associate Consultant (Senior Developer) at Cognizant")}`,
    titleAlignment: 'center'
};

const content = `${b("Social links")}

${g("Twitter")}            ${y("https://twitter.com/9t_mohitkumar")}
${g("GitHub")}             ${y("https://github.com/mohitkumar215")}
${g("LinkedIn")}           ${y("https://www.linkedin.com/in/mohit-kr-verma/")}

${b("Known Technologies")}

${g("Frontend Framwork")}  ${y("Angular, AngularJs")}
${g("Hybrid Framework")}   ${y("Ionic, Elctron")}
${g("Google Techs")}       ${y("AppsScript, Spreadsheet, Sites")}
${g("Node")}               ${y("node.js, express.js")}
${g("Database")}           ${y("SQL, Sqlite")}
${g("Library")}            ${y("AmCharts, Jquery")}
and much more...

${b("Experiments")}

${c("This is first with npm.")}`;

const card = boxen(content, cardOptions);

console.log(card);