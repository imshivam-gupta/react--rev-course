import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemoDemo from './component/MemoDemo'
import MemoDemo2 from './component/MemoDemo2'
import CallbackDemo from './component/CallbackDemo'
import CounterProvider from './contexts/CounterContext'
import ContextConsumerExample from './component/ContextConsumerExample'
import { Provider } from 'react-redux'
// import store from './redux/store'
import store from './redux-toolkit/store'
import ReduxConsumerExample from './component/ReduxConsumerExample'
import FetchUsersRedux from './component/FetchUsersRedux'
import CounterToolkit from './component/CounterToolkit'
import FetchUsersToolkit from './component/FetchUsersToolkit'
import BatchUpdateCounter from './component/BarchUpdateCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <MemoDemo /> */}
      {/* <MemoDemo2 /> */}
      {/* <CallbackDemo /> */}

      {/* <CounterProvider>
        <ContextConsumerExample />
      </CounterProvider> */}

      {/* <Provider store={store}> */}
        {/* <ReduxConsumerExample /> */}
        {/* <FetchUsersRedux /> */}
      {/* </Provider> */}

{/* Reduc toolkit provider */}
      {/* <Provider store={store}> */}
        {/* <CounterToolkit /> */}
        {/* <FetchUsersToolkit /> */}
      {/* </Provider> */}

      <BatchUpdateCounter />
    </>
  )
}

export default App
