#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, '..', 'oxlintrc.json');

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Usage: my-oxc <file|directory> [options]');
    console.error('');
    console.error('Options:');
    console.error('  --fix    Automatically fix problems');
    console.error('  --deny-warnings  Ensure warnings produce a non-zero exit code');
    console.error('  --quiet  Disable reporting on warnings, only errors are reported');
    console.error('');
    console.error('Examples:');
    console.error('  my-oxc /path/to/project/src/');
    console.error('  my-oxc /path/to/file.js --fix');
    console.error('  my-oxc /path/to/file.js --deny-warnings');
    process.exit(1);
  }

  const fixFlag = args.includes('--fix');
  const denyWarningsFlag = args.includes('--deny-warnings');
  const quietFlag = args.includes('--quiet');
  const files = args.filter(arg => !arg.startsWith('--'));

  try {
    const oxcArgs = [];
    
    if (fixFlag) {
      oxcArgs.push('--fix');
    }
    
    if (denyWarningsFlag) {
      oxcArgs.push('--deny-warnings');
    }
    
    if (quietFlag) {
      oxcArgs.push('--quiet');
    }
    
    oxcArgs.push('--config', configPath);
    oxcArgs.push(...files);

    const oxc = spawn('npx', ['oxlint', ...oxcArgs], {
      stdio: 'inherit',
      cwd: process.cwd()
    });

    oxc.on('close', (code) => {
      process.exit(code);
    });

    oxc.on('error', (error) => {
      console.error('Error running Oxc:', error.message);
      process.exit(1);
    });

  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

main();