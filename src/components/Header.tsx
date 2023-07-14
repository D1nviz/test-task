import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../resources/logo.png";

const Header: FC = () => {
  return (
    <header className="bg-stone-900 text-slate-50 relative">
      <nav className="max-w-[90%] m-auto flex items-center justify-between py-3">
     
        <div className="w-12">
        <Link to="/" title="Back to home">
            <img src={logo} alt="logo" />
            
        </Link>
        </div>
        
        <div>Created by Dinviz</div>
      </nav>
    </header>
  );
};

export default Header;
