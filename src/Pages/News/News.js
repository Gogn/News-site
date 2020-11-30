import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { approoveNews, getNews, deleteNews } from "../../Store/Actions/newsActions";
import { PopupCreateNews } from "../../Components/PopupCreateNews/PopupCreateNews";
import './News.css'
import moment from "moment";

export const News = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.root.users.currentUser);
  const news = useSelector(state => state.root.news.news);
  const themeDark = useSelector(state => state.root.app.colorsDark);

  const [search, setSearch] = useState('');
  const [popupCreateNews, setPopupCreateNews] = useState(false)


  useEffect(() => {
    dispatch(getNews())
  }, [])

  const handlePopupLogin = () => {
    setPopupCreateNews(!popupCreateNews)
  }
  const createItem = () => {
    return (
      <button className={'create-news'} onClick={() => handlePopupLogin()}>
        Добавить новость
      </button>
    )
  }

  const formNews = (search) => {
    let formNews = news

    if (search) {
      formNews = formNews.filter((item) => {
        return item.content.toLowerCase().includes(search.toLowerCase())
      })
    }

    return formNews.map((item, i) => {
      return (
        <div key={item + Math.random()}>
          {currentUser !== 'admin'
            ? item.approved === false
              ? item.author === currentUser
                ? <div key={i} className={'news ' + (!item.approved && 'news--unapproved')}>
                  <div className={'news__item news__title'}>
                    {item.title}
                  </div>
                  <div className={'news__item news__text'}>
                    {item.content}
                  </div>
                  <div className={'news__item news__date'}>
                    {moment(item.created).format('HH:mm:ss, YYYY-MM-DD')}
                  </div>
                </div>
                : ''
              : <div key={i} className={'news ' + (!item.approved && 'news--unapproved')}>
                <div className={'news__item news__title'}>
                  {item.title}
                </div>
                <div className={'news__item news__text'}>
                  {item.content}
                </div>
                <div className={'news__item news__date'}>
                  {moment(item.created).format('HH:mm:ss, YYYY-MM-DD')}
                </div>
              </div>
            : item.approved === false
              ? <div key={i} className={'news ' + (!item.approved && 'news--unapproved')}>
                <div className={'news__item news__title'}>
                  {item.title}
                </div>
                <div className={'news__item news__text'}>
                  {item.content}
                </div>
                <div className={'news__admin'}>
                    <button className={'news__button news__button--approve'} onClick={() => dispatch(approoveNews(item.id))}>
                      Одобрить новость
                    </button>
                    <button className={'news__button news__button--delete'} onClick={() => dispatch(deleteNews(item.id))}>
                      Удалить новость
                    </button>

                  <div className={'news__item news__date'}>
                    {moment(item.created).format('HH:mm:ss, YYYY-MM-DD')}
                  </div>
                </div>

              </div>
              : <div key={i} className={'news ' + (!item.approved && 'news--unapproved')}>
                <div className={'news__item news__title'}>
                  {item.title}
                </div>
                <div className={'news__item news__text'}>
                  {item.content}
                </div>
                <div className={'news__admin'}>
                    <button className={'news__button news__button--delete'} onClick={() => dispatch(deleteNews(item.id))}>
                      Удалить новость
                    </button>

                  <div className={'news__item news__date'}>
                    {moment(item.created).format('HH:mm:ss, YYYY-MM-DD')}
                  </div>
                </div>
              </div>
          }
        </div>
      )
    })
  }

  return (
    <div className={'news__container'}>
      <div className={'news__header'}>
        <input
          type="text"
          placeholder={'Поиск по новостям'}
          onChange={(e) => setSearch(e.target.value)}
          className={'news__search ' + (themeDark && 'news__search--dark')}
        />

        {currentUser && createItem()}
      </div>

      <div className={'news__content'}>
        {formNews(search)}
      </div>

      { popupCreateNews &&
        <PopupCreateNews
          isOpen={popupCreateNews}
          currentUser={currentUser}
          openPopupCreateNews={() => handlePopupLogin()}
        />
       }
    </div>
  )
}
