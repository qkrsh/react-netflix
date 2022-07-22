import React, { useEffect, useState } from 'react';
import "./Nav.css";
import {useNavigate} from "react-router-dom";

export default function Nav() {

    const [show,handleShow] = useState(false);
    const [searchValue, setSearchValue]= useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>50){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll",()=>{});
        }
    },[]);
    
    const handleChange = (e)=>{
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    };

  return (
    <nav className={`nav ${show && "nav_black"}`}>
        <img
            alt='Netflix logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
            className='nav_logo'
            onClick={()=>{navigate('/');setSearchValue("")}}
        />
        <input 
        value={searchValue} 
        onChange={handleChange} 
        className="nav_input" 
        type="text"
        placeholder='영화를 검색하세요'
        />

        <img alt="User logged"
        src="https://png.pngtree.com/element_our/20200702/ourlarge/pngtree-cartoon-character-icon-free-button-image_2291930.jpg"
        className='nav_avatar'
        />
    </nav>
  );
}
