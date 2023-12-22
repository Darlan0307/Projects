import './App.css'
import Container from './components/Container'
import {toast,ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT}/>
      <h1>Deixe sua avaliação</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, itaque.</p>
      <Container/>
    </>
  )
}

export default App
