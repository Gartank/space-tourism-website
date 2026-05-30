import "../../utils/design-system.css";
import "./NavElem.css";

export const NavElem = ({ elem, actualPage }) => {
    const isActive =
        actualPage.toUpperCase() == elem.title.toUpperCase()
            ? `list__link list__link--active`
            : `list__link `;
    return (
        <li
            className={`${isActive} text-preset-8`}
            key={`link-0${elem.index}`}
        >
            <a href={elem.link} className="link">
                <span className='link__index'>{`0${elem.index}`}</span>
                {elem.title.toUpperCase()}
            </a>
        </li>
    );
};

export default NavElem;
