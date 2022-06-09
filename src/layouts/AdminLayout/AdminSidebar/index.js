import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
//import avatar from '@mui/material';
import style from './AdminSidebar.module.scss';

const cx = classNames.bind(style);

function AdminSidebar() {
    return (
        <div className={cx('sidebar')}>
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className="logo">lamadmin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        {/* <DashboardIcon className="icon" /> */}
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            {/* <PersonOutlineIcon className="icon" /> */}
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            {/* <StoreIcon className="icon" /> */}
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        {/* <CreditCardIcon className="icon" /> */}
                        <span>Orders</span>
                    </li>
                    <li>
                        {/* <LocalShippingIcon className="icon" /> */}
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                </ul>
            </div>
            {/* <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
            </div> */}
        </div>
    );
}

export default AdminSidebar;
