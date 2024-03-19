import './App.css'
import Car from './components/Demo1';
import Header from './components/Demo2';
import Container from './components/UnmountDemo';
import useIdle from './hooks/useIdle';
import useLocalStorageWithExpiry from './hooks/useLocalStorageWithExpiry'
import useOnlineStatus from './hooks/useOnlineStatus';
import usePrevious from './hooks/usePrevious';

function App() {

  const [name,setName] = useLocalStorageWithExpiry('name','',0.1);
  const prevName = usePrevious(name);

  const isOnline = useOnlineStatus();

  const isIdle = useIdle();
  // name->shi  "sh" prevName->shi
  return (
    <>

      {/* <h1>Local Storage Hook</h1>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
      <p>{name}</p>


      <hr />

      <p>{prevName}</p>

      <hr />

      <p>You are {isOnline?"Online":"Offline"}</p>

      <hr />

      <p>You are: {isIdle ? "idle" : "not idle"}</p> */}

      {/* <Car name="Mustang"/> */}

      {/* <Header name="Mustang"/> */}

      <Container />

    </>
  )
}

export default App
