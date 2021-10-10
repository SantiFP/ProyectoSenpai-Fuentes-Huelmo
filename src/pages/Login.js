import React from 'react';
import { HeaderLogin } from '../components/Header';
import { FormLogin } from '../components/Form';
import  Footer  from '../components/Footer';
import Button from '../components/Button';
import { Link } from 'react-router-dom';



export const Login = () => {

    return ( 
        <>
            <div >
                <HeaderLogin text ="SIGN UP"/>
                <div className="md:mt-44"> 
                    <FormLogin placeHolder="Email" />
                    <FormLogin placeHolder="Password" />
                </div>
                <div className="mt-8 md:mt-12"><Link to="/movies"><Button text="LOG IN NOW" /></Link></div>
                <div className="mt-10 mb-5 font-medium text-sm md:hidden"><Footer /></div>
                
            </div>
        </>
    )
}

