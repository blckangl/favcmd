import fsa from 'fs/promises'; // Import fs from 'fs/promises'

import { ICommand } from '../interfaces/command';
export const saveCommands = (filePath: string, commands: Array<ICommand>) => {
  return fsa.writeFile(filePath, JSON.stringify(commands, null, 2));
};

export const loadCommandsAsync = async (
  filePath: string
): Promise<Array<ICommand>> => {
  const data = await fsa.readFile(filePath, 'utf-8');
  return JSON.parse(data) as Array<ICommand>;
};
