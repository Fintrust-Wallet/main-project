import { Footer } from "../Footer";
import { NavBar } from "../navbar";

export default function Layout({ children }) {
  return (
    <div>
      {/* <NavBar /> */}

      <main>{children}</main>

      <Footer />
    </div>
  );
}
