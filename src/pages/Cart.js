import React, { useState, useEffect } from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../segs-firebase'

function Cart() {

    const [cart, setCart] = useState([]);

    const shoppingCartRef = collection(db, 'Cart');
    useEffect(() => {
        const getCart = async () => {
            const data = await getDocs(shoppingCartRef);
            setCart(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        };

        getCart();
    });

    const deleteFromCart = async (id) => {
        const cartItem = doc(db, 'Cart', id);
        await deleteDoc(cartItem);
    };

  return (
    <div className='blogPage'>
      {cart.map((item) => {
        return (
        <div className='post'>
          <div className='postHeader'>
            <div className='title'>
              <h5> {item.name} </h5>
            </div>
            <div className='deletePost'>
              <button onClick={() => {deleteFromCart(item.id);}}>&#10005;</button>
            </div>
          </div>

          <div className='postTextContainer'>
            {item.price}
          </div>
        </div>
        );
      })}
    </div>
  )
}

export default Cart
