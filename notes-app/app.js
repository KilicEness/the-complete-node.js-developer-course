const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

console.log(yargs.argv)

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title + ' Body: ' + argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler: function () {
        console.log('Listing your notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'reading notes',
    handler: function () {
        console.log('read your notes')
    }
})

yargs.parse()