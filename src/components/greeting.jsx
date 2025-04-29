import { useEffect, useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import railsLogo from '/rails-1-logo.png' 
import wordpressLogo from '/wordpress.png' 
import './stylesheets/greeting.css'

function Greeting() {
    const a = [1,2,3,4,5]
    useEffect(()=>{
        a.forEach((Number, index)=>{
            console.log(Number)
        }, []);
    })


    return(
        <div className='greetingContainer'>
            <div>
                <a className='profileImageContainer' href="https://www.upwork.com/freelancers/~0161dfe63e133888ce" target='_blank'>
                    <img className='profileImage' style={{borderRadius:"1000px"}} src="/Freelance.jpg" alt="" />
                </a>
                <h1>Hey I'm <span className='sergio'>Sergio</span> <span className='martinez'>Martínez</span></h1>
            </div>
    
            <div className=''>
                <p className='p-tag'>I've worked with:</p>
                <div className='logoContainer'>
                    <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                    </a>
                    <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                    <a href="https://rubyonrails.org/" target="_blank">
                    <img src={railsLogo} className="logo rails" alt="Rails logo" />
                    </a>
                    <a href="https://wordpress.com/" target="_blank">
                    <img src={wordpressLogo} className="logo wordpress" alt="Rails logo" />
                    </a>
                </div>
            </div>
            <div className='box-div'></div>
            <div className='box-div'></div>
            <div className='box-div'></div>
            <div className='box-div'></div>
            <div className='box-div'></div>
            <div className='box-div'></div>
        </div>
    )

}
export default Greeting;