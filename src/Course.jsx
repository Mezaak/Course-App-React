import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Course({course}) {
    const {id,title,description,price,link,image} = course;
  return (
    <div className='course'>
        
                <img className='resimler' src={image} width={200} height={100} />
                <h4 className='course-title'>{title}</h4>
                <h5 className='course-desc'>{description}</h5>
                <h3 className='course-price'>{price} $</h3>
                <div className='course-link'><a href={link}>Buy Now <FontAwesomeIcon icon={faCartShopping} /></a></div>
    </div>
  )
}

export default Course