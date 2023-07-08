import React from 'react'
import c from './open.module.scss'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { REQUEST } from '../../api'
import CardProduct from '../../components/card'
import Order from './order'

const OpenOrder = () => {
  const [ products, setProducts ] = React.useState(null)
  const [ data, setData ] = React.useState(null)
  const [ dep, setDep ] = React.useState(null)
  const [ table, setTable ] = React.useState(0)

  const Navigate = useNavigate()

  React.useEffect(() => {
    REQUEST.getProducts()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id,
              ...item
            }
          })

        setProducts(result.reverse())
      })
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setData(JSON.parse(localStorage.getItem('newOrder')))
      setDep(Math.random())
    }, 100)
  }, [dep])

  const orders = JSON.parse(localStorage.getItem('orders'))

  const postToOrders = () => {
    orders?.push({data, table: table})
    localStorage.setItem('orders',  JSON.stringify(orders))
    localStorage.setItem('newOrder',  JSON.stringify([]))
    Navigate('/')
  }

  return (
    <div className={c.open}>
      <button className={c.back} onClick={() => Navigate('/')}>
        <IoIosArrowRoundBack />
      </button>
      <div className={c.left}>
        <h2>Чек</h2>
        <table>
          <thead>
            <th>Название</th>
            <div className={c.pad}>
              <th>Кол-во</th>
              <th>Сумма</th>
            </div>
          </thead>
          <tbody>
            {
              data ?
              data?.map((item, i) => (
                <Order key={i} cart={data} item={item}/>
              )) :
              <tr>
                <td>
                  Пусто
                </td>
                <div className={c.pad}>
                  <td>ㅤ</td>
                  <td>ㅤ</td>
                </div>
              </tr>
            }
            <tr className={c.total}>
              <td>
              ㅤ
              </td>
              <div className={c.pad}>
                <td>ㅤ</td>
                <td>Всего: </td>
                <td>{data?.reduce((acc, obj) => acc + obj.count * obj.price, 0)}  сом</td>
              </div>
            </tr>
          </tbody>
          <button
            onClick={() => postToOrders()}
          >
            Отправить
          </button>
          <input type="number" onChange={e => setTable(e.target.value)} placeholder='№ стола' />
        </table>
      </div>
      <div className={c.right}>
        {
          products?.length !== 0 ?
          products?.map((item, i) => (
            <CardProduct 
              key={i}
              item={item}
            />
          )) :
          <h3>Ничего нету</h3>
        }
      </div>
    </div>
  )
}

export default OpenOrder



