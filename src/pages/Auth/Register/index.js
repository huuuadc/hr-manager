import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import { faPerson, faKey, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import style from './Register.module.scss';
import userApi from '~/apiServices/userApi';

const cx = classNames.bind(style);

function Register() {
    const [formRegister, setFormRegister] = useState({
        userName: '',
        password: '',
        email: '',
        name: '',
        mobileNo: '',
    });
    const [isShow, setIsShow] = useState(false);

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormRegister((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const handleLogin = () => {
        // alert(`user name: ${formRegister.userName}`);

        if (!formRegister.userName) {
            return alert('No data');
        }

        const data = userApi
            .register({
                username: formRegister.userName,
                password: formRegister.password,
                email: formRegister.email,
                mobileNo: formRegister.mobileNo,
            })
            .then((e) => {
                console.log(e.data);
                alert('Register Success');
            })
            .catch((err) => alert(err.message));
    };

    const handleShowHidePassword = () => {
        setIsShow(!isShow);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-form')}>
                <div className={cx('login-title')}>REGISTER</div>
                <div className={cx('login-input')}>
                    <div className={cx('input-user')}>
                        <div className={cx('form-icon')}>
                            <FontAwesomeIcon className={cx('form-icon-in')} icon={faPerson}></FontAwesomeIcon>
                        </div>
                        <input
                            placeholder="enter user"
                            name="userName"
                            value={formRegister.userName}
                            onChange={handleChangeForm}
                        ></input>
                    </div>
                </div>
                <div className={cx('login-input')}>
                    <div className={cx('input-user')}>
                        <div className={cx('form-icon')}>
                            <FontAwesomeIcon className={cx('form-icon-in')} icon={faPerson}></FontAwesomeIcon>
                        </div>
                        <input
                            placeholder="enter email"
                            name="email"
                            value={formRegister.email}
                            onChange={handleChangeForm}
                        ></input>
                    </div>
                </div>
                <div className={cx('login-input')}>
                    <div className={cx('input-user')}>
                        <div className={cx('form-icon')}>
                            <FontAwesomeIcon className={cx('form-icon-in')} icon={faPerson}></FontAwesomeIcon>
                        </div>
                        <input
                            placeholder="enter name"
                            name="name"
                            value={formRegister.name}
                            onChange={handleChangeForm}
                        ></input>
                    </div>
                </div>
                <div className={cx('login-input')}>
                    <div className={cx('input-user')}>
                        <div className={cx('form-icon')}>
                            <FontAwesomeIcon className={cx('form-icon-in')} icon={faPerson}></FontAwesomeIcon>
                        </div>
                        <input
                            placeholder="enter mobile no"
                            name="mobileNo"
                            value={formRegister.mobileNo}
                            onChange={handleChangeForm}
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
                            id="password"
                            name="password"
                            value={formRegister.password}
                            onChange={handleChangeForm}
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
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register;
