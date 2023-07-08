import React from 'react'
import { useForm } from 'react-hook-form'
import cls from './Adding.module.scss'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../App'
import { REQUEST } from '../../api'
import { CircularProgress } from '@mui/material'

const Adding = () => {
  const [ active, setActive ] = React.useState(false)
  const [ value, setValue ] = React.useState(null)

  const {
    register,
    handleSubmit,
    reset
  } = useForm()

  const Navigate = useNavigate()
  
  const postProduct = (data) => {	
    setActive(!active)
    const storageRef = ref(storage, `${data.image[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, data.image[0]);
    uploadTask.on("state_changed",
    (snapshot) => {
      const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setValue(progress)
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          REQUEST.postProducts(
            {
              ...data,
              image: downloadURL,
            }
          ).then(() => {
            Navigate('/')
          })

        });
    })
  }

  return (
    <div 
      className={cls.adding}
    >
      <button className={cls.back} onClick={() => Navigate('/products/')}>
          <IoIosArrowRoundBack />
        </button>
      <form 
        className={cls.first} 
        onSubmit={handleSubmit(data => postProduct(data))}
      >
        <div>
          <p>Название</p>
          <input 
            type="text"
            {...register('title')}
          />
        </div>
        <div>
          <p>Цена</p>
          <input 
            type="text"
            {...register('price')}
          />
        </div>
        <div>
          <p>Фото</p>
          <input 
            type="file"
            className={cls.file}
            {...register('image')}
          />
        </div>
          
        <button type='sumbit'>
          Далее
        </button>
      </form> 
      { 
        active ?
        <div className={cls.loader}>
          <CircularProgress determinate value={value} />
          <h3>Подождите...</h3>
        </div> :
        null
      }
    </div>
  )
}

export default Adding