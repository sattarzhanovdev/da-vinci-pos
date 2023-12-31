import React from 'react'
import { useNavigate } from 'react-router-dom';
import c from './card.module.scss'

const Card = ({item}) => {
  const orders = JSON.parse(localStorage.getItem('orders'))
  const [ table, setTable ] = React.useState(0)

  const Navigate = useNavigate()

  const deleteItem = () => {
    const index = orders?.findIndex(obj => obj.id === item.id);
    if (index !== -1) {
      orders.splice(index, 1);
    }
    localStorage.setItem('orders', JSON.stringify(orders));
  }

  
  
  const toReceipt = () => {
    localStorage.setItem('receipt', JSON.stringify(item.data))
    Navigate('/check/')
  }
  return (
    <div className={c.card} style={{width: '250px', border: '1px solid black'}}>
      <div className="card-header border-0">
        <h5 className="card-title">№{item.table}</h5>
      </div>
      <div className={c.cardBody}>
        <button onClick={() => deleteItem()}>Отменен</button>
        <button onClick={() => toReceipt()}>Посмотреть</button>
        <button onClick={() => deleteItem()}>Удалить</button>
      </div>
    </div>
  )
}

export default Card