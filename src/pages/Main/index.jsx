import React from 'react'
import c from './Main.module.scss'
import { LuTimerOff } from 'react-icons/lu'
import { FaRegFolderOpen } from 'react-icons/fa'
import { BsReceipt } from 'react-icons/bs'
import { MdRestaurantMenu } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const Navigate = useNavigate()


  return (
    <div className={c.main}>
      <div className={c.up}>
        {/* <button>
          <LuTimerOff /> Закрыть смену  
        </button> */}
      </div>
      <div className={c.body}>
        <img
          src="https://cdn1.iconfinder.com/data/icons/rcons-drink/16/coffee-1024.png"
          alt="image"
        />
      </div>
      <div className={c.footer}>
        <button onClick={() => {
          Navigate('/open/')
          localStorage.setItem('newOrder', JSON.stringify([]))
        }}>
          <FaRegFolderOpen /> Открыть заказ
        </button>
        <button onClick={() => Navigate('/orders/')}>
          <BsReceipt /> Посмотреть заказы
        </button>
        <button onClick={() => Navigate('/products/')}>
          <MdRestaurantMenu /> Посмотреть меню
        </button>
      </div>
    </div>
  )
}

export default Main