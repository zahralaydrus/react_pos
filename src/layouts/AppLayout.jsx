import { Outlet } from "react-router-dom";
import Header from "./Header";
import Component from "./Header";

function AppLayout() {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            {/* <Component /> */}
            <main style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "1500px", width: "100%" }}>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default AppLayout;
