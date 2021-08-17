import ReactDOM from "react-dom";
import "./index.css";
import { GlobalStyles } from "./global-styles";
import { FirebaseContext } from "./context/firebase";
import { App } from "./App";
// import { seedDatabase } from "./seed";

const config = {
  apiKey: "AIzaSyBb0A0-uLn_2g2wxdshlugEUL0aMETv-Lc",
  authDomain: "scrimba-netflix-clone-alberto.firebaseapp.com",
  projectId: "scrimba-netflix-clone-alberto",
  storageBucket: "scrimba-netflix-clone-alberto.appspot.com",
  messagingSenderId: "513280040047",
  appId: "1:513280040047:web:65632217c9ff5a5d70019a",
};

const firebase = window.firebase.initializeApp(config);
// seedDatabase(firebase);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
