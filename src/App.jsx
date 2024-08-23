import { useLocation } from "react-router-dom"
import RouterController from "./routes"
import { useEffect } from "react"

function App() {
  const {pathname} = useLocation()

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])
  return (
    <>
      <RouterController/>
    </>
  )
}

export default App
