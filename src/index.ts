#!/usr/bin/env node

import figlet from 'figlet';
import { Command } from 'commander';
import chalk from 'chalk';
import os from 'os';
import path from 'path';
import fs from 'fs';
import { addCat, clearCat, getCommands } from './services/commands-service';

const program = new Command();
const dir = path.join(os.homedir(), '.favcmd');
const filePath = path.join(dir, 'fav-cmd.json');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

console.log(figlet.textSync('favcmd'));
console.info(chalk.bgGray('Config file loaded ', filePath));
program
  .version('0.1.1')
  .description('A CLI tool to manage your favorite commands.')
  .option(
    '-l, --ls [filter]',
    'List saved commands. Use a filter to narrow results.'
  )
  .option(
    '-a, --add <args...>',
    'AAdd a new command with an alias, description, and category.'
  )
  .option(
    '-c, --clear',
    'lear all saved commands. This action is irreversible.'
  )

  .parse(process.argv);

const { ls, add, clear } = program.opts();

if (ls) {
  const lsVal = typeof ls === 'string' ? ls : '';
  getCommands(filePath, lsVal).subscribe({
    next: (commands) => console.table(commands),
    error: (err) => {
      console.error(
        chalk.red(
          'An error occurred while retrieving commands:',
          err.message || err
        )
      );
    },
  });
}
if (add) {
  const args = add as Array<string>;
  if (args.length >= 2) {
    const cName = args[0];
    const cDescription = args.slice(1, -1).join(' '); // Join all parts except the last one as description
    const cCat = args.length > 2 ? args[args.length - 1] : ''; // Use the last argument as category if available

    addCat(filePath, cName, cDescription, cCat).subscribe({
      next: () => console.log(chalk.green('Command added')),
      error: (err) => {
        console.error(
          chalk.red(
            'An error occurred while adding the command:',
            err.message || err
          )
        );
      },
    });
  } else {
    console.log(
      'Invalid input. Expected: <alias> <description> [category] Got: ',
      add
    );
  }
}
if (clear) {
  clearCat(filePath).subscribe({
    next: () => console.log(chalk.yellow('Commands cleared successfully.')),
    error: (err) => {
      console.error(
        chalk.red(
          'An error occurred while clearing commands:',
          err.message || err
        )
      );
    },
  });
}
