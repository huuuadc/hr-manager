import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
//import Headless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import image from '~/assets/images';

const cx = classNames.bind(style);

const menuItem = [
    { title: 'TRANG CHỦ', link: '/', active: true },
    { title: 'SẢN PHẨM', link: '/blog' },
    { title: 'CHÍNH SÁCH', link: '/page' },
    { title: 'LIÊN HỆ', link: '/contact' },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={'/'}>
                        <img src={image.logoPNG} alt="ABCD"></img>
                    </Link>
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
                </div>
                <div className={cx('acctions')}>
                    <Link to={'/login'}>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Account
                    </Link>
                    <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    );
}

export default Header;
