import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'

const config = {

  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: process.env.FIREBASE_AUTH_DOMAIN,

  databaseURL: process.env.FIREBASE_DATABASE_URL,

  projectId: process.env.FIREBASE_PROJECT_ID,

  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.FIREBASE_APP_ID,

  measurementId: process.env.FIREBASE_MEASUREMENT_ID

};

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider

export { firebase, googleAuthProvider,  database as default }

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// const notes = [{
//   id: '12',
//   title: 'first title',
//   body: 'first body'
// }, {
//   id: '21',
//   title: 'second title',
//   body: 'second body'
// }]



// database.ref().on('value', (snapshot) => {
//   const expenses = []
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.age} bla bla, ${val.attributes.height}, blabla ${val.attributes.weight}`)
// }, (e) => {
//   console.log('This is error ')
// })

// setTimeout(() => {
//   database.ref().set({
//     age: 32,
//     attributes: {
//       height: 300,
//       weight: 500
//     }
//   })
// }, 3500);

// setTimeout(() => {
//   database.ref('age').off(onValueChange)
// }, 4500);

// setTimeout(() => {
//   database.ref('age').set(30)
// }, 5500);

// database.ref().set({
//   name: 'Dupa',
//   age: 26,
//   isSingle: true,
//   location: {
//     city: 'Polas',
//     country: 'Usa'
//   }
// })
// database.ref('attributes').set({
//   height: 200,
//   weight: 100
// }).then(()=>{
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('This failed', e)
// })
