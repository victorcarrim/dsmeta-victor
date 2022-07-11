import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
import NotificationButton from "./components/NotificationButton"
import "./index.css"

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
