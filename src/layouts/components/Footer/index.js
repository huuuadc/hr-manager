import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import style from './Footer.module.scss';
import facebook from '~/assets/images';

const cx = classNames.bind(style);

const dataLogo = {
    url: 'https://demo.riotechz.com/img/home/logo.png',
    alt: 'RiotechLogo',
    contentLogo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
};

const dataLink = [
    { title: 'About Us', link: '/about' },
    { title: 'Reasons to shop', link: '/address' },
    { title: 'What our customers say', link: '/faq' },
    { title: 'Meet the teaml', link: '/team' },
    { title: 'Contact our buyers', link: '/contact' },
];

const dataContactUs = [
    {
        contactTitle: 'Address:',
        contactContent: '123 Suspendis matti, Visaosang Building VST District NY Accums, North American',
        icon: faHome,
    },
    { contactTitle: 'Email:', contactContent: 'huu.tran@riotechz.com', icon: faEnvelope },
    { contactTitle: 'Hotline:', contactContent: '+(84) 326 473 067', icon: faPhone },
    {
        contactTitle: 'Opening Hours:',
        contactContent: 'Monday - Sunday / 08.00AM - 19.00 (Except Holidays)',
        icon: faTimesCircle,
    },
];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <div className={cx('wrapper-content-item')}>
                    <div className={cx('block')}>
                        <div className={cx('block-content')}>
                            <a href="/#" className={cx('logo-footer')}>
                                <img src={dataLogo.url} alt={dataLogo.alt}></img>
                            </a>
                            <div className={cx('content-logo')}>{dataLogo.contentLogo}</div>
                        </div>
                    </div>
                    <div className={cx('block')}>
                        <div className={cx('block-content')}>
                            <ul>
                                {dataLink.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link to={item.link}>{item.title}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('block')}>
                        <a href="/#">
                            <img alt="logo" src={'https://demo.riotechz.com/img/home/payment-footer.png'}></img>
                        </a>
                    </div>
                </div>
                <div className={cx('wrapper-content-item')}>
                    <div className={cx('block-contact-title')}>CONTACT US</div>
                    <div className={cx('block-contact-content')}>
                        {dataContactUs.map((item, index) => {
                            return (
                                <div key={index} className={cx('contact-us')}>
                                    <div key={index + 100} className={cx('title-content')}>
                                        <span className={cx('icon')}>
                                            <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon>
                                        </span>
                                        <span>{item.contactTitle}</span>
                                    </div>
                                    <div key={index + 200} className={cx('content-contact')}>
                                        <p>{item.contactContent}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('wrapper-content-item')}>
                    <div className={cx('block-right')}>
                        <div className={cx('block-right-contact-1')}>
                            <div className={cx('block-contact-title')}>NEWSLETTER</div>
                            <div className={cx('block-sub-title')}>
                                Sign up to our newsletter to get the latest articles, lookbooks voucher codes direct to
                                your inbox
                            </div>
                            <div className={cx('input-subscribe')}>
                                <input placeholder="Enter your email"></input>
                                <button className={cx('btn-sunscribe')}>
                                    <span>SUBSCRIBE</span>
                                </button>
                            </div>
                        </div>
                        <div className={cx('block-right-contact-1')}>
                            <div className={cx('block-contact-title')}>FOLLOW US ON</div>
                            <div className={cx('social')}>
                                <div className={cx('list-inline')}>
                                    <img src={facebook.facebook} alt="Image1"></img>
                                </div>
                                <div className={cx('list-inline')}>
                                    <img src={facebook.google} alt="Image2"></img>
                                </div>
                                <div className={cx('list-inline')}>
                                    <img src={facebook.twiter} alt="Image3"></img>
                                </div>
                                <div className={cx('list-inline')}>
                                    <img src={facebook.instagram} alt="Image4"></img>
                                </div>
                            </div>
                        </div>
                        <div className={cx('block-right-contact-2')}>
                            <div className={cx('block-contact-title')}>PAYMENT ACCEPT</div>
                            <img src={'https://demo.riotechz.com/img/home/payment.png'} alt="image21"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
