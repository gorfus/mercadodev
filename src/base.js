  var config = {
    apiKey: "AIzaSyBLS78vlwQZa5QGWOyC1r8pnqF0VIUVGqE",
    authDomain: "mercadodev-84db8.firebaseapp.com",
    databaseURL: "https://mercadodev-84db8.firebaseio.com",
    projectId: "mercadodev-84db8",
    storageBucket: "mercadodev-84db8.appspot.com",
    messagingSenderId: "611534175622"
  };
//   firebase.initializeApp(config);

const Rebase =  require('re-base')
const firebase = require('firebase/app')
require('firebase/database')
require('firebase/storage')
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database())

export default base
export const storage = app.storage();