
import MessageComponent from './components/Message'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {Navbar()}
      {MessageComponent("Message 1")}
      {MessageComponent("Message 2")}
      {MessageComponent("Message 3")}
      {Footer()}
    </>
  );
}

export default App
