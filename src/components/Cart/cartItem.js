import React from 'react';

const cartItem = ({id, productName, desc, img, price, units}) =>{
    return(
      <li
          className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
            <img className="w2 h2 w3-ns h3-ns br-100" src={img} />
            <div className="pl3 flex-auto">
              <span className="f6 db black-70">{productName}</span>
              <span className="f6 db black-70">{desc}</span>
            </div>
            <div>
              <span>Units : {units}</span>
            </div>
        </li>
    )
  }



export default cartItem;
