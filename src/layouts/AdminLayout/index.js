import classNames from 'classnames/bind';

import AdminHeader from './AdminHeader';
import style from './AdminLayout.module.scss';
import AdminSidebar from './AdminSidebar';

const cx = classNames.bind(style);

function AdminLayout({ children }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <AdminSidebar />
                <div className={cx('inner')}>
                    <AdminHeader />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;
