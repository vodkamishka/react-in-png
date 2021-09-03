import {useRef, useEffect} from 'react';
import {PDF} from "./components/pdf/pdf";

function App() {

  const app = useRef();

  return (

    <div className="App" ref={app}>
      <h1>Hello world</h1>
      <PDF />
    </div>


  );
}

export default App;
