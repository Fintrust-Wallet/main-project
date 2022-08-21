import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/navbar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
