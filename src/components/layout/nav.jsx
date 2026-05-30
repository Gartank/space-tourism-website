import NavElem from "./NavElem"
import "./Nav.css";

export function Nav({ actualPage, pageList = [] }) {
    const listElement = pageList.map((elem) => {
        return (
            <NavElem elem={elem} actualPage={actualPage}/>
        )
    });
    return (
        <>
            <nav className='header__nav'>
                <ul className='nav__list'>{listElement}</ul>
            </nav>
        </>
    );
}

export default Nav;
