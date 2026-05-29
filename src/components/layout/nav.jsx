import { logo } from "../../assets/shared/logo.svg";

export function Nav({ actualPage, pageList }) {
    const listElement = pageList.map((elem) => {
        <li className={`list__link`}>
            <span className='link__index'>
                {`0${elem.index}`} {elem.title}
            </span>
        </li>;
    });
    return (
        <>
            <nav className='header__nav'>
                <ol className='nav__list'>{listElement}</ol>
            </nav>
        </>
    );
}

export default Nav;
