import React, { Component } from 'react';
import { AtiHeader } from 'ati-react-web'
import profile from '../../assets/images/index.jpg'
import { Menu } from 'antd';

export default class navbar extends Component{
    render(){
        return(
            <AtiHeader style={{background:'#E0FFFF',width:'100%'}}>
                <div className='row'>
                <div className='col-6'>
                    <div className="text-left">
                        <a className='navbar-brand' href='#'>
                            DOMPET SAYA
                        </a>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-6 text-right'>
                        <img className='rounded-circle' src={profile} style={{width:'45px',height:'45px'}} />

                        </div>
                        <div className='col-6 text-left'>
                        <p className='text-dark'>Fatan Aminullah</p>

                        </div>
                    </div>
                </div>
                </div>


            </AtiHeader>
        )
    }
}


