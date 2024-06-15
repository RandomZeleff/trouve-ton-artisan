import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "react-bootstrap";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Container>
      <header>
        <Navbar />
      </header>

      <Outlet />

      <Footer />
    </Container>
  );
}
