import { Outlet } from "react-router-dom";
import Footer from "../components/home/footer";

function MainLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default MainLayout;
