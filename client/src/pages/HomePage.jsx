import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Link } from "react-router-dom";
export default function HomePage() {
    
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Link to='/login' className="flex flex-grow">
        <button className="m-auto" type="button">Click me</button>
      </Link>
      <Footer />
    </div>
  );
}
