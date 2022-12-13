import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GlobalNav from "./GlobalNav";
import Style from "./LayoutStyle.module.css";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <article className={Style.header}>
        <header>Welcome !</header>
      </article>

      <section className={Style["content-section"]}>
        <GlobalNav />
        <main className={Style["main-content"]}>
          <Outlet />
        </main>
      </section>
      <article className={Style.footer}>
      <footer>Nguyen Duc Tuan PH16237</footer>
      </article>
      <ToastContainer />
    </>
  );
};

export default Layout;