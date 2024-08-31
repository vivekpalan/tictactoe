import React, { useState } from "react";

import './style.css'

const ToDo = ()=>{
    const [blogs,setBlogs] = useState([
        {id:101,author:'mario',content:'lorem ipsum....',contentType:'Tech'},
        {id:102,author:'luigi',content:'lorem ipsum....',contentType:'Finance'},
        {id:103,author:'mario',content:'lorem ipsum....',contentType:'Tech'},
        {id:104,author:'steve',content:'lorem ipsum....',contentType:'Marketing'},
        {id:105,author:'mark',content:'lorem ipsum....',contentType:'Physics'},
        {id:106,author:'robert',content:'lorem ipsum....',contentType:'Grooming'},
        {id:107,author:'chris',content:'lorem ipsum....',contentType:'Marketing'},
    ])

    function handleDelete(id){
        setBlogs(blogs.filter(b => id !== b.id))
    }

    return(
        <>
            <h3>Hello this is to do component</h3>
            <ul>
                {blogs.map(b => <li key={b.id}>
                    <div className="user-details">
                        <h3>{b.name}</h3>
                        <h4>{b.contentType}</h4>
                    </div>
                    <p>{b.content}</p>   
                    <button onClick={()=>handleDelete(b.id)}>Delete</button> 
                </li>)}
            </ul>
        </>
       
    )
}

export default ToDo;