import React from "react";
import Button from '../components/Button';
import { Link, useNavigate } from "react-router-dom";

export const Application = ({}) => {

    const navigate = useNavigate();

    const someEventHandler = (path) => {
        navigate(path);
    } 


    return <div>
        <h1>Стартовая страница.</h1>
        <h3>Здесь делать кнопки</h3>
        <Link to="/posts"  onClick={(e)=>{e.preventDefault()}} onDoubleClick={() => someEventHandler('/posts')} >
            <Button textBtn="posts"/>
        </Link>
        <Link to="/profile" onClick={(e)=>{e.preventDefault()}} onDoubleClick={() => someEventHandler('/profile')} >
            <Button textBtn="profile" />
        </Link>
    </div>;
}