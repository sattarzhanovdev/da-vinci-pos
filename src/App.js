import React from "react";
import MainRoutes from "./routes";
import './App.scss'
import axios from "axios";
import * as firebase from 'firebase/app'
import { firebaseConfig } from "./firebase";
import { getStorage } from 'firebase/storage'

axios.defaults.baseURL = 'https://da-vinci-29325-default-rtdb.asia-southeast1.firebasedatabase.app'

const app = firebase.initializeApp(firebaseConfig)
export const storage = getStorage(app);


function App() {
  const newOrder = localStorage.getItem('orders')

  React.useEffect(() => {
    !newOrder && localStorage.setItem('orders', JSON.stringify([]))
  })

  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
