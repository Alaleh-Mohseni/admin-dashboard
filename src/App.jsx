import { RouterProvider } from "react-router-dom";
import { Container } from 'react-bootstrap';
import AuthProvider from "@contexts/auth-provider";
import router from "@config/router";

function App() {
  return (
    <Container>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Container>
  )
}

export default App
