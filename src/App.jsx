import { RouterProvider } from "react-router-dom";
import { Container } from 'react-bootstrap'
import router from "./config/router";

function App() {

  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  )
}

export default App
