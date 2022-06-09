import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import { faPerson, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import style from './Login.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Login() {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isShow, setIsShow] = useState(false);

    const handleOnChangeUser = (event) => {
        setUsername(event.target.value);
        console.log(event.target.value);
    };

    const handleOnChangePassword = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value);
    };

    const handleLogin = () => {
        //alert(`user name: ${userName}`);
    };

    const handleShowHidePassword = () => {
        setIsShow(!isShow);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-form')}>
                <div className={cx('login-title')}>LOGIN</div>
                <div className={cx('login-input')}>
                    <div className={cx('input-user')}>
                        <div className={cx('form-icon')}>
                            <FontAwesomeIcon className={cx('form-icon-in')} icon={faPerson}></FontAwesomeIcon>
                        </div>
                        <input
                            placeholder="enter user"
                            value={userName}
                            onChange={(event) => handleOnChangeUser(event)}
                        ></input>
                    </div>
                </div>
                <div className={cx('login-input')}>
                    <div className={cx('input-password')}>
                        <div className={cx('form-icon')}>
                            <FontAwesomeIcon className={cx('form-icon-in')} icon={faKey}></FontAwesomeIcon>
                        </div>
                        <input
                            placeholder="enter password"
                            type={isShow ? 'text' : 'password'}
                            value={password}
                            onChange={(event) => handleOnChangePassword(event)}
                        ></input>
                        <span className={cx('form-icon')} onClick={() => handleShowHidePassword()}>
                            <FontAwesomeIcon
                                className={cx('form-icon-in')}
                                icon={isShow ? faEye : faEyeSlash}
                            ></FontAwesomeIcon>
                        </span>
                    </div>
                </div>

                <button className={cx('btn-login')} onClick={() => handleLogin()}>
                    <Link to={'/admin'}>Login</Link>
                </button>
            </div>
        </div>
    );
}

export default Login;
