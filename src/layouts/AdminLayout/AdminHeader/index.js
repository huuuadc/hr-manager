import classNames from 'classnames/bind';

import style from './AdminHeader.module.scss';

const cx = classNames.bind(style);

function AdminHeader() {
    return (
        <div className={cx('navbar')}>
            <div className={cx('wrapper')}>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search..." />
                </div>
                <div className={cx('items')}>
                    <div className={cx('item')}>English</div>
                    <div className={cx('item')}></div>
                    <div className={cx('item')}></div>
                    <div className={cx('item')}>
                        <div className={cx('counter')}>1</div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('counter')}>2</div>
                    </div>
                    <div className={cx('item')}></div>
                    <div className={cx('item')}>
                        <img
                            src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/70480554_1399181460230802_460530320739926016_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fxV4wYB9tkMAX-Eyw9M&tn=lbirjpHfSvak-q_O&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-wddju3ykrsw1SbbIA1bgT1OJPT2DZMQwFH91KnA0VqA&oe=62C320F1"
                            alt=""
                            className={cx('avatar')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminHeader;
