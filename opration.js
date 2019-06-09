const inquirer = require("inquirer");
// const child_process = require("child_process");
const shell = require("shelljs");

const DEVELOPMENT = "development(开发)";
const PRODUCTION = "production(生产)";
const ENV_List = ["local", "dev", "sit", "uat", "pre", "prod"];


const questions = [
  {
    type: "list",
    name: "mode",
    message: "请选择开发模式",
    choices: [
      DEVELOPMENT,
      new inquirer.Separator("----------------"),
      PRODUCTION
    ]
  },
  {
    type: "rawlist",
    name: "env",
    message: "请选择接口环境",
    choices: ENV_List
  }
];

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers, null, 2));
  /* 执行相应的操作 */
  const { mode, env } = answers;
  
  if (mode === DEVELOPMENT) {
    shell.exec(`cross-env API_ENV=${env} react-app-rewired start`);
  } else {
    shell.exec(`cross-env API_ENV=${env} react-app-rewired build`);
  }
});