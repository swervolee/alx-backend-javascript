#!/usr/bin/node

const { execFile } = require('node:child_process');

execFile('cat', ['-n', 'utils.js'], (error, stdout, stderr) => {
  console.log(stdout);
});
