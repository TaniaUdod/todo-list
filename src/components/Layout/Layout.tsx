import { Suspense } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";
import css from "./Layout.module.scss";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink
            to="/"
            className={location.pathname === "/" ? css.active : ""}
          >
            All
          </NavLink>
          <NavLink
            to="/deleted"
            className={location.pathname === "/deleted" ? css.active : ""}
          >
            Deleted
          </NavLink>
        </nav>
      </header>

      <main className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
