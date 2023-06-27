//import logo from './logo.svg'
import React from 'react';
import './App.css'
import HelloWorld from './components/HelloWorld';
import HelloWorld2 from './components/HelloWorld2';
import HelloWorld3 from './components/HelloWorld3';
import HelloWorld4 from './components/HelloWorld4';
import HelloWorld5 from './components/HelloWorld5';
import HelloWorld6 from './components/helloworld6.js/HelloWorld6';
import HelloWorld7 from './components/helloworld7/HelloWorld7';
import HelloWorld8 from './components/HelloWorld8';
const App = () => {
 return (
    <div className="Container">
    <div className="Column1">
    <HelloWorld8 />
    </div>
    <div className="Column2">
    <HelloWorld4 />
    </div>
    <div className="Column3">
    <HelloWorld3 />
    </div>
  </div>
 );
}
export default App;