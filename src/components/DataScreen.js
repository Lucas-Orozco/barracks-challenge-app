import React from 'react'
import { Tabs } from './Tabs';


export const DataScreen = () => {

    const token = localStorage.getItem('token');
    document.body.style.backgroundImage = 'none';
    return (
        <div>
            <button href ='account/login' className='button-logout' ><span >Salir</span></button>
            <div className='token-container'>
                    <p className='token-text' >token:{token}</p>
            </div>
            <Tabs />
        </div>
    )
}
