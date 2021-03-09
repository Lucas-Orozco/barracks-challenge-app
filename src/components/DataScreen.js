import React from 'react'
import {  useHistory } from 'react-router';
import { Tabs } from './Tabs';


export const DataScreen = () => {
    
    let history = useHistory();
    const handleExit = () =>{
        localStorage.setItem('token','');
        history.push("/account/login");
    }
    const token = localStorage.getItem('token');
    document.body.style.backgroundImage = 'none';
    return (
        <div>
            <button href ='account/login' className='button-logout'  onClick={handleExit} ><span >Salir</span></button>
            <div className='token-container'>
                    <span className='token-text' >token: {token}</span>
            </div>
            <Tabs />
        </div>
    )
}
