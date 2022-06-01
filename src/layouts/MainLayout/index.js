import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import Footer from '~/layouts/components/Footer';
import style from './MainLayout.module.scss';
import Coppyright from '~/layouts/components/Coppyright';

const cx = classNames.bind(style);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>{children}</div>
            <Footer></Footer>
            <Coppyright></Coppyright>
        </div>
    );
}

export default MainLayout;
