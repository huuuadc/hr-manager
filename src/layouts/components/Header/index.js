import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
//import Headless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import image from '~/assets/images';

const cx = classNames.bind(style);

const sty = {
    width: '70%',
    height: '70%',
};

const menuItem = [
    { title: 'HOME', link: '/', active: true },
    { title: 'BLOG', link: '/blog' },
    { title: 'PAGE', link: '/page' },
    { title: 'CONTACT US', link: '/contact' },
    { title: 'TCH', link: '/contact' },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/#">
                        <img style={sty} src={image.logoPNG} alt="ABCD"></img>
                    </a>
                </div>
                <div className={cx('main-menu')}>
                    {menuItem.map((item, index) => {
                        return (
                            <div key={index} className={cx('menu-item', 'border-line', { active: item.active })}>
                                <a href="/#" className="">
                                    {item.title}
                                </a>
                            </div>
                        );
                    })}
                </div>
                <div className={cx('right-menu')}>
                    <div className={cx('search')}>
                        <input placeholder="Search..." spellCheck={false}></input>
                        <Tippy content="Tìm Kiếm" placement="bottom">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                            </button>
                        </Tippy>
                    </div>
                    <div className={cx('acctions')}>
                        <span>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Account
                        </span>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
