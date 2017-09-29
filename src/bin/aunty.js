#!/usr/bin/env node

// External
const resolve = require('resolve');

// Ours
const { name } = require('../../package');
const { createErrorLogo } = require('../utils/branding');
const { error, log } = require('../utils/logging');

function exit(err) {
  if (err) {
    log(createErrorLogo());
    error(err);
    process.exit(1);
  }

  process.exit(0);
}

process.on('uncaughtException', exit);
process.on('unhandledRejection', exit);

let cli;
let isGlobal;

// Always prefer local CLI
try {
  cli = require(resolve.sync(`${name}/src/cli`, {basedir: process.cwd()})).cli;
} catch (err) {
  isGlobal = true;
  cli = require('../cli').cli;
}

(async () => {
  const [err] = await cli(process.argv.slice(2), isGlobal);

  exit(err);
})();
