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

// const firebaseConfig = {
//   apiKey: "AIzaSyDc3tnL2Orz2D1VEqpPGfSAxs9pl2n-xZ4",
//   authDomain: "fir-e37dc.firebaseapp.com",
//   projectId: "fir-e37dc",
//   storageBucket: "fir-e37dc.appspot.com",
//   messagingSenderId: "844241449581",
//   appId: "1:844241449581:web:bbe2c611a4a387f16bc564",
//   measurementId: "G-CLJX96CB5Q"
// };

export const auth = app.auth()
export default app
