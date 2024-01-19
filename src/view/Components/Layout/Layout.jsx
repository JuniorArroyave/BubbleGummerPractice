import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import './Layout.css'

export const Layout = () => {
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <div className="footer">
                <h3>That is footer</h3>
            </div>
        </footer>
        </>
    )
}