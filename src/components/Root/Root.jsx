import { Outlet } from "react-router-dom";
import Header from "../Header/Header";



const Root = () => {
    return (
        <div className="font-roboto">
            <div className="container mx-auto">
                <Header></Header>
                <Outlet></Outlet>
                
            </div>
            
            
        </div>
    );
};

export default Root;