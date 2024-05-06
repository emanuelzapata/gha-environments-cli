// NOTE: This will return error 500 but wil still create the environment

import { Octokit } from "@octokit/core";
import environments from "../environments.json" assert { type: "json" };
// import config from "../config.json" assert { type: "json" };
import yargs from 'yargs';

const options = yargs
 .usage("Usage: -c <config file>")
 .option("c", { alias: "config", describe: "Config json file path", type: "string", demandOption: true })
 .option('e', { alias: 'env', describe: 'Environment json file path', type: 'string', demandOption: true })
 .argv;


import config from options.config assert { type: "json" };

const greeting = `Hello, ${options.config}!`;

console.log(greeting);

// const octokit = new Octokit({
//   auth: config.AUTH_TOKEN
// })

// for (const environment of environments) {
//   octokit.request('PUT /repos/{owner}/{repo}/environments/{environment_name}', {
//     owner: config.OWNER,
//     repo: config.REPO,
//     environment_name: environment,
//     wait_timer: 30,
//     prevent_self_review: false,
//     reviewers: [
//       {
//         type: 'User',
//         id: 1
//       },
//       {
//         type: 'Team',
//         id: 1
//       }
//     ],
//     deployment_branch_policy: {
//       protected_branches: false,
//       custom_branch_policies: true
//     },
//     headers: {
//       'X-GitHub-Api-Version': '2022-11-28'
//     }
//   })
// }