import React, { useEffect, useState } from 'react';
import { db } from '../segs-firebase'
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { productsArray } from '../productsStore';
import { addDoc, collection, deleteDoc, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'

function ProductItem(props) {
    const shoppingCartRef = collection(db, 'Cart');
    const addToCart = async () => {
        await addDoc(shoppingCartRef, {
            id: props.id,
            name: props.text,
            price: props.label
        });
    }

    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link'>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img
                    className='cards__item__img'
                    src={props.src}
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
                <Button buttonStyle='add-to-cart--button' onClick={addToCart}>Add to Cart</Button>
                </Link>
            </li>
        </>
    );
}

export default ProductItem;
