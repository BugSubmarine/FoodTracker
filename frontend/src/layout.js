import Header from "./pages/navbar";
// import Footer from './page/Footer';
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            {/* <Footer/> */}
        </div>
    );
};

export default Layout;