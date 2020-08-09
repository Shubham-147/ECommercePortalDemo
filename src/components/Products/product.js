import React from 'react';

const product = ({id, productName, desc, img, price, addfunc}) =>{
  return (
    <article className = 'bg-white br3 pa3 pa4-ns mv3 ba b--black-10 ' id ={id}>
      <div className='tc'>
        <img src ={img} 
             className = 'br100 h4 w4 dib ba b--black05 pa2'
             title = {productName} />
        <h1 className ='f3 mb2'>{productName}</h1>
        <h3 className ='f5 fw4 gray mt0' >{desc}</h3>
        <h3 className ='f5 fw4 gray mt0'>{price}₹</h3>
        <button className = 'f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue bn' 
        onClick={()=>addfunc({id, productName, desc, img, price, units:1})}>
          Add
          </button>
      </div>
    </article>
    );
};

export default product;