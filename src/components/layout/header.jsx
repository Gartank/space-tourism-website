import Nav from "./nav.jsx";

const navLinks = {
    links: [
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
    ],
};

function Header() {
    return (
        <>
            <header>
                <a href='' className='nav__return-to-main'>
                    <img src={logo} alt='' />
                </a>
                <Nav />
            </header>
        </>
    );
}
