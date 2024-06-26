import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDuZ7nfBqJPIrNSNmdmRbrJDzMihvaV3lQ",
  authDomain: "candidate-bcca1.firebaseapp.com",
  projectId: "candidate-bcca1",
  storageBucket: "candidate-bcca1.appspot.com",
  messagingSenderId: "603777390956",
  appId: "1:603777390956:web:ec8bc812dba1562914bb49",
  measurementId: "G-R2EK3JBR5K"
})

export const auth = app.auth()
export default app
