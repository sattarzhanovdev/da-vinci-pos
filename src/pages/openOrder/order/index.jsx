import React from 'react'
import { BiTrash } from 'react-icons/bi';
import c from './order.module.scss'


const Order = ({cart, item}) => {

  const deleteItem = () => {
    const index = cart?.findIndex(obj => obj.id === item.id);
    if (index !== -1) {
      cart.splice(index, 1);
    }
    localStorage.setItem('newOrder', JSON.stringify(cart));
  }

  return (
    <tr>
      <td>
        {item.title}
      </td>
      <div className={c.pad}>
        <td>{item.count}</td>
        <td>{item.count * item.price}</td>
        <td 
          className={c.trash}
          onClick={() => deleteItem()}
        >
          <BiTrash />
        </td>
      </div>
    </tr>
)
}

export default Order