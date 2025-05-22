import React from 'react'
import Form from './components/Form'
import Header from './components/Header'
import TaskList from './components/TaskList'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'

function App() {
  const input = React.useRef()

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='flex flex-col bg-blue-100 min-h-screen'>
          <div>
            <Header />
            <div className='max-w-xl mx-auto relative -top-50 flex flex-col gap-5'>
              <Form ref={input} />
              <div className='bg-white shadow rounded overflow-hidden mx-5 relative z-0'>
                <TaskList
                  inputRef={input}
                />
              </div>
            </div>
          </div>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App