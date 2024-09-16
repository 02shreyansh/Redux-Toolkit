import { Provider } from "react-redux"
import { store } from "./app/store"
import AddTodo from "./Components/AddTodo"

function App() {
  return (
    <Provider store={store}>
      <AddTodo/>
    </Provider>
  )
}

export default App
