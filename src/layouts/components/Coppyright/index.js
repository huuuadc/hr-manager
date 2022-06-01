import classNames from 'classnames/bind';

import style from './Coppyright.module.scss';

const cx = classNames.bind(style);

function Coppyright() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <a href="https://riotechz.com/">Coppyright @ Riotechz.com Design TCH</a>
            </div>
        </div>
    );
}

export default Coppyright;
