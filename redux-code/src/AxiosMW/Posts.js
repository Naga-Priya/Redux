import { useDispatch } from "react-redux";
import React from 'react';
import {fetchPostAction} from './fetchPostAction.js';
import { useEffect } from "react";
import {useSelector} from 'react-redux';

function Posts(props) {
    const dispatch = useDispatch();
    
    const values = useSelector(state=>state);
    console.log("Values :$$$" , values);
    const titles = values?values.map((val)=>
        <li key={val.id}>{val.title}</li>):"No Data Found"
    console.log({titles});
    useEffect(() => {
        dispatch(fetchPostAction());
    },[])
    return (
        <div>
            <h1>Getting data from API: </h1>
            <p>
            {titles}
            </p>
        </div>
    );
}

export default Posts;