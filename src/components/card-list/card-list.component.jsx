
import React from 'react';
import './card-list.styles.css'

export const CardList = (props)=>{
    //childrens=> whatever we have passed inside the coponent where we passed info
    return <div className="card-list">{props.children}</div>

}
