import { useState } from 'react'
import DataFetcher from './components/DataFetcher'
import "./App.css";

function App(){
  const [userId, setUserId] = useState(1);

  return(
    <div className='app'>
       <h1>Data Fetcher</h1>
       <button onClick={()=>setUserId(prev=>prev+1)}> Next user </button>
       <DataFetcher userId={userId}m />
    </div>
  );
}

export default App;