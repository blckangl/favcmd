import { from, map, Observable, of, tap } from 'rxjs';
import { ICommand } from '../interfaces/command';
import { loadCommandsAsync, saveCommands } from '../utils/fileio';

export const getCommands = (
  filePath: string,
  filter = ''
): Observable<Array<ICommand>> => {
  return from(loadCommandsAsync(filePath)).pipe(
    map((commands: Array<ICommand>) => {
      return filter
        ? commands.filter(
            (x) =>
              x.alias.toLowerCase().includes(filter.trim().toLowerCase()) ||
              x.description
                .toLowerCase()
                .includes(filter.trim().toLowerCase()) ||
              x.category.toLowerCase().includes(filter.trim().toLowerCase())
          )
        : commands;
    })
  );
};

export const addCat = (
  filePath: string,
  alias: string,
  description: string,
  category: string = ''
) => {
  return from(loadCommandsAsync(filePath)).pipe(
    tap((commands: Array<ICommand>) => {
      let cToAdd = {
        alias: alias,
        description: description,
        category: category,
      };
      return saveCommands(filePath, [...commands, cToAdd]);
    })
  );
};

export const clearCat = (filePath: string) => {
  return from(loadCommandsAsync(filePath)).pipe(
    tap((commands: Array<ICommand>) => {
      return saveCommands(filePath, []);
    })
  );
};
