# favcmd

**favcmd** is a simple CLI tool that helps you save and manage your favorite commands. With this tool, you can quickly access frequently used commands, making your workflow more efficient.

## Features

- **List Commands**: View all your saved commands, with optional filtering.
- **Add Command**: Save a new favorite command with an alias, description, and category.
- **Clear Commands**: Remove all saved commands with a single command.

## Installation

To install `favcmd`, follow these steps:

1.  Clone the repository:

        git clone https://github.com/blckangl/favcmd.git
        cd favcmd

2.  Install the dependencies:

        npm install

3.  Build the project:

        npm run build

4.  Optionally, link the command globally:

        npm link

## Usage

After installation, you can use the following commands:

### List Commands

To list all your saved commands:

    favcmd --ls

You can filter the list by providing a keyword:

    favcmd --ls [filter]

`[filter]`: A keyword to filter commands by alias or description.

### Add Command

To add a new favorite command, use:

    favcmd --add <alias> <description> <category>

`<alias>`: The alias for your command.  
`<description>`: A brief description of the command.  
`<category>`: The category for the command.

**Example:**

    favcmd --add ll "List files with detailed info" "file management"

### Clear Commands

To clear all saved commands:

    favcmd --clear

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue for any suggestions or improvements.

## Acknowledgments

- Inspired by the need to streamline command usage in daily tasks.
- Built with [Node.js](https://nodejs.org/) and [TypeScript](https://www.typescriptlang.org/).

## Contact

If you have any questions or feedback, feel free to reach out to me at [dhiaa.kahri@gmail.com](mailto:your-email@example.com).
