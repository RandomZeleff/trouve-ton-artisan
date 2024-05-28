import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";

export default function Layout() {
  return (
    <Container>
      <header>
        <Navbar />
      </header>

      <Outlet />
    </Container>
  );
}
