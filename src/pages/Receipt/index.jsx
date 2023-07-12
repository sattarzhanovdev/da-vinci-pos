import React from 'react'
import c from './check.module.scss'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { BiPrinter } from 'react-icons/bi'

const Receipt = () => {

  const item = JSON.parse(localStorage.getItem('receipt'))
  
  const navigate = useNavigate()

  const summa = item?.reduce((acc, obj) => acc + obj.count * obj.price, 0)
  const percent = summa * 0.1
  const newSumma = summa + percent

    
  return (
    <div id={c.invoicePos}>
      <div id={c.bot}>
        <div id={c.table}>
          <table>
            <tr className={c.tabletitle}>
              <td className={c.item}><h2>Название</h2></td>
              <td className={c.Hours}><h2>Кол-во</h2></td>
              <td className={c.Rate}><h2>Сумма</h2></td>
            </tr>

            {
              item?.map(value => (
                <tr className={c.service}>
                  <td className={c.tableitem}><p className={c.itemtext}>{value.title}</p></td>
                  <div>
                    <td className={c.tableitem}><p className={c.itemtext}>{value.count}</p></td>
                    <td className={c.tableitem}><p className={c.itemtext}>{value.count * value.price}</p></td>
                  </div>
                </tr>
              ))
            }

            <tr className={c.tabletitle} id={c.total}>
              <td></td>
              <td className={c.Rate}><h2>Всего:</h2></td>
              <td className={c.payment}><h2>{item?.reduce((acc, obj) => acc + obj.count * obj.price, 0)} сом </h2></td>
            </tr>
            <tr className={c.tabletitle} id={c.service}>
              <td>Обслуживание: 10%</td>
              <td className={c.Rate}><h2>Итого:</h2></td>
              <td className={c.payment}><h2>{Math.floor(newSumma)} сом </h2></td>
            </tr>

          </table>
        </div>
      </div>

      <div className={c.buttons}>
        <button className={c.back} onClick={() => navigate('/orders/')}>
          <IoIosArrowRoundBack />
        </button>
        <button className={c.print} onClick={() => window.print()}>
          <BiPrinter />
        </button>
      </div>
    </div>
  )
}

export default Receipt