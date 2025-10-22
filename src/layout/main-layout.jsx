import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

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
