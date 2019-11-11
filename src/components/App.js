import React from 'react';
import Reader from '../components/Reader/Reader.js'
import publications from '../publications.json';


function App() {
    return (
      <>
       <Reader items={publications}></Reader>
      </>
    );
  }
  
  export default App;