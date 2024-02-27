import NavBarPage from "./NavBarPage";
import "./HomePage.css";
import CategoryHomePage from "./CategoryHomePage";
import DashBoardNav from "./DashBoardNav";
import { useSelector } from "react-redux";
export default function HomePage() {
  const isLoggedIn = useSelector((state) => state.auth.user);
  return (
    <div>
      {isLoggedIn ? <DashBoardNav /> : <NavBarPage />}
      {/* <NavBarPage /> */}
      <CategoryHomePage/>
    </div>
  );
}
