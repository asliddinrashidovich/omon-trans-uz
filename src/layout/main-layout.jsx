import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
