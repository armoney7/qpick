import React from 'react';
import { RiHeartLine as HeartIcon } from "react-icons/ri";
import { RiShoppingCart2Line as CartIcon  } from "react-icons/ri";
import { Link } from 'react-router-dom';


export default function Header({ cartCount }) {
  return (
    <header>
        <div>
            <Link to={"/"} className='logo' >QPICK</Link>
        </div>
        <div>
            <HeartIcon className='icon' size={31} fill='#838383' style={{marginRight: "45px"}} />
            <Link to={"/cart"}>
                <CartIcon className='icon' size={30} fill='#838383' />
                {cartCount > 0 && (
                  <span className='cart-count'>{cartCount}</span>
                )}
            </Link>
        </div>
    </header>
  )
}
