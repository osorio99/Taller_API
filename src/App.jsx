import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import MainContainer from "./Pages/MainContainer"


function App() {
 

  return (
    <>
       <div  className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <MainContainer />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
