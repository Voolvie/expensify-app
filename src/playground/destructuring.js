import React, { Component } from 'react'
import ReactDOM from "react-dom"

//OBJECT DESTRUCTURING

// const person = {
//     name: 'Bocian',
//     age: 27,
//     location: {
//         city: 'City',
//         temp: 92
//     }
// }

// const { name: firstname = 'Kalak', age} = person

// console.log(`${firstname} is ${age}.`)

// const {temp: temperature, city} = person.location

// if(city && temperature) {

// console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Prince of persia',
//     author: 'Prince khaled',
//     publisher: {
//         name: 'Penguin',
//     }
// }

// const {name: publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)

//ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Gliwice', 'Slaskie', '44-100']

const [,city ,state = 'New York'] = address

const item = ['kawka', '2zl', '3zl', '4zl']

const [coffee, ,cenaSrednia] = item

const Appka = () => (
    <div>
        <h1>You are in {city} {state}</h1>
        <p>Srednia {coffee} jest po {cenaSrednia}</p>
     </div>
)

ReactDOM.render(<Appka/>, document.getElementById('app'))


