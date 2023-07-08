import React from 'react'
import c from './orders.module.scss'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import Card from './card'

const Orders = () => {
  const [ orders, setOrders ] = React.useState(null)
  const [ dep, setDep ] = React.useState('')

  React.useEffect(() => {
    setOrders(JSON.parse(localStorage.getItem('orders')))
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])

  const Navigate = useNavigate()
  return (
    <div className={c.orders}>
      <button className={c.back} onClick={() => Navigate('/')}>
        <IoIosArrowRoundBack />
      </button>
      <div className={c.cards}>
        {
          orders?.map((item, i) => (
            <Card 
              key={i}
              item={item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Orders