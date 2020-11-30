import React, { useState } from 'react'
import './PopupCreateNews.css'
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../Store/Actions/usersActions";
import { createNews } from "../../Store/Actions/newsActions";

export const PopupCreateNews = ({ currentUser, isOpen, openPopupCreateNews }) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.root.news.getError);

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [createNewsError, setCreateNewsError] = useState('');
  const [closing, setClosing] = useState(false)

  const handleCreate = (e) => {
    e.preventDefault()

    if (content  !== '' && title !== '') {
      setClosing(true)
      createNewsError === '' && dispatch(createNews(title, content, currentUser))
      closeHandler()
    } else {
      if (title === '') {
        setCreateNewsError('Пожалуйста, введите заголовок новости')
      }
      if (content === '') {
        setCreateNewsError('Пожалуйста, напишите содержимое новости')
      }
    }

  }

  const closeHandler = () => {
    setClosing(true)
    setTimeout(() => { openPopupCreateNews() }, 300) // I'll fix this
  }

  return (
    <>
      {isOpen
      &&
      <div className={'PopupCreateNews ' + (!closing ? 'PopupCreateNews--transitionIn' : 'PopupCreateNews--transitionOut')}>
        <button className={'PopupCreateNews__close'} onClick={() => closeHandler()}>
          X
        </button>

        <h3>Создание новости</h3>

        {createNewsError &&
        <div className={'PopupCreateNews__error'}>
          {createNewsError}
        </div>
        }
        <form onSubmit={e => handleCreate(e)} className={'PopupCreateNews__form'}>
          <input className={'PopupCreateNews__input input--title'}  type="text" placeholder={'Заголовок'} onChange={(e) => setTitle(e.target.value)} />
          <textarea className={'PopupCreateNews__input input--content'} placeholder={'Содержание'} onChange={(e) => setContent(e.target.value)} >
          </textarea>
          <input className={'PopupCreateNews__input input--submit'}  type={'submit'} value={'Опубликовать новость'} />
        </form>

      </div>
      }
    </>
  )
}
