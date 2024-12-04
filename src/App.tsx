import React from 'react'
import './App.css';
import {Props} from './interfaces'
import EditModel from './components/EditModel.tsx';
// edit parameters
// all paameters must be displayed and all must be editable
let sample:Props = {
  params: [
    {"id": 1, "name":"purpose", type: "string"},
    {"id": 2, "name":"length", type: "string"},
  ],
  model: {
    paramValues: [
      {"paramId":1, value:"everyday"},
      {"paramId":2, value:"maxi"},

    ],
    colors: []
  }
}



function App() {
  return (
    <div className="App">
      <EditModel {...sample}></EditModel>
    </div>
  );
}

export default App;
