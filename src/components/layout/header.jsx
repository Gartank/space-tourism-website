import Nav from "./Nav.jsx";
import logo from "../../assets/shared/logo.svg";

const navLinks = [
        {
            title: "Home",
            index: 0,
            link: "",
        },
        {
            title: "Destination",
            index: 1,
            link: "",
        },
        {
            title: "Crew",
            index: 2,
            link: "",
        },
        {
            title: "Technology",
            index: 3,
            link: "",
        },
];

export function Header() {
    return (
        <header>
            <a href='' className='nav__return-to-main'>
                <img src={logo} alt='si' />
            </a>
            <Nav
                actualPage={"Home"}
                pageList={navLinks}
            />
        </header>
    );
}

export default Header;
