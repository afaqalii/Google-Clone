// import { useEffect } from "react";
// import MicIcon from "@mui/icons-material/Mic";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import Search from "./search";
import { Link } from "react-router-dom";
import "./home.css";
// import { UseStateValue } from "../ContextApi";
const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/search">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <AccountCircleSharpIcon />
        </div>
      </div>
      <div className="home__body">
        <img src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo-500x281.png" />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
};
export default Home;
