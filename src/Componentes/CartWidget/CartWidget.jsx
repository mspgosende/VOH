import './CartWidget.css'
import { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext) 

    return(
        <div className="widget">
          <div className="CartWidget"> 
            <Link className='carrito' to='/cart'>   <FontAwesomeIcon icon={faShoppingCart} id='CartIcon' /></Link>
            <span className='number' id='number'>{totalQuantity}</span>
          </div>
        </div>
    );
}

export default CartWidget

