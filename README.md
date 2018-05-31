# NODE NOTES
Note taking application to practice node fundamentals. Add, read, list and remove notes from the command line.

## Installation

Install modules

`npm install`

## Getting Started Guide

Simply run `node app.js` followed by the command and the available options and values.

**Help**

`node app.js --help`

**Commands**
- add
- read
- list
- remove

**Options**

`--title` or alias `-t`

`--body` or alias `-b`


### Examples

Add a note:

`node app.js add --title="Todo" --body="Hire Mark Tice"`

Read a note:

`node app.js read --title="Todo"`

List all notes:

`node app.js list`

Remove a note:

`node app.js remove --title="Todo"`

## Modules

Inbuilt modules
- file system
  - read and write notes to json file

Third party modules
- yargs
  - easy key value pair for arguments