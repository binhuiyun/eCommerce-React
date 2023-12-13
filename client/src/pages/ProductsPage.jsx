import Header from "./layout/Header";
import Footer from "./layout/Footer";
import UserInfoForm from "./layout/UserInfoForm";

export default function ProductsPage() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <div class="bg-gray-200 flex-grow"></div>
      <Footer />
    </div>
  );
}
