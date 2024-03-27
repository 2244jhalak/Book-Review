import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
    const [active,setActive] = useState('/');
    const handleActive=(path)=>{
      if(path){
        setActive(path);
      }
      
      
    }
    const list=
    <div className="items-center">
        <Link onClick={()=>handleActive('/')} className={`mr-10 ${active==='/'?`active border-green-500  border-2  px-4 py-1 rounded-md`:``}`} to='/'><a>Home</a></Link>
        <Link onClick={()=>handleActive('/listed')} className={`mr-10 ${active==='/listed'?`active border-green-500  border-2 px-4 py-1 rounded-md`:``}`} to='/listed'><a>Listed Books</a></Link>
        <Link onClick={()=>handleActive('/pages')} className={`mr-10 ${active==='/pages'?`active border-green-500  border-2 px-4 py-1 rounded-md`:``}`} to='/pages'><a>Pages to Read</a></Link>
        <Link onClick={()=>handleActive('/quotes')} className={`mr-10 ${active==='/quotes'?`active border-green-500  border-2 px-4 py-1 rounded-md`:``}`} to='/quotes'><a>Quotes</a></Link>
        <Link onClick={()=>handleActive('/author')} className={`${active==='/author'?`active border-green-500  border-2 px-4 py-1 rounded-md`:``}`} to='/author'><a>Author</a></Link>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {list}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl">ChapterCraft</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mr-5 bg-green-500 text-white">Sign In</a>
    <a className="btn text-white bg-blue-400">Sign Up</a>
  </div>
</div>
            
        </div>
    );
};

export default Header;