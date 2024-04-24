import { FC, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import "./App.css";

const AllTasks = lazy(() => import("./pages/AllTasks/AllTasks"));
const DeletedTasks = lazy(() => import("./pages/DeletedTasks/DeletedTasks"));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AllTasks />} />
        <Route path="deleted" element={<DeletedTasks />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
