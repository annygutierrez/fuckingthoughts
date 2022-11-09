import React from 'react';
import LogoSVG from '../../images/svgs/logo.svg';
import './styles.css';

const MainHeade = () => {
    return (
        <div style={{ display: 'flex', width: '100vw', position: 'fixed' }}>
            <div style={{ backgroundColor: 'black', padding: '1.8em' }}>
                <img className="Logo" src={LogoSVG} alt="logo" />
            </div>
        </div>
    )
}

export default MainHeade;