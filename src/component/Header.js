import React, { useState } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Login from './Login';
import Signup from './SignUp';

function Header() {
    // const [isLoginVisible, SetisLoginVisible] = useState(false);
    // function Loginfun() {
    //     return (
    //         SetisLoginVisible(true)
    //     )
    // }
    function SignUpfun() {
        return <Signup />
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><LocalMallIcon />  LazyBuyer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="d-flex">
                            <Login />
                            <Signup />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header;
