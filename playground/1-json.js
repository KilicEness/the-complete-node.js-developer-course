const fs = require('fs')

/* const book = {
    title: 'Ego is the enemy',
    author: 'Ryan holiday'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON) */

/* const alien = {
    name: 'enes',
    planet: 'venus',
    age: 22
}

const alienJSON = JSON.stringify(alien)
fs.writeFileSync('1-json.json', alienJSON) */

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const alien = JSON.parse(dataJSON)

alien.name = 'enes'
alien.planet = 'venus'
alien.age = 22

const alienJSON = JSON.stringify(alien)
fs.writeFileSync('1-json.json', alienJSON)