import React, { useState } from 'react'
import Slider from '../components/Slider'
import { useContext } from 'react'
import { MovieContext } from '../context/DataContext'
import Card from '../components/Card'
import Loader from '../components/Loader'

function Home() {
  let { data, error, loader, dataTheatre } = useContext(MovieContext)
  let langArr = [... new Set(data.map(item => item.languages[0]))]
  let theatreArr = [... new Set(dataTheatre.map(item => item.theatreTitle))]
  const [langStatus, setLangStatus] = useState(false)
  const [lang, setLang] = useState('Dil')
  const [theatreStatus, setTheatreStatus] = useState(false)
  const [theatre, setTheatre] = useState('Kinoteatr')
  const [moviesInTheatre, setMoviesInTheatre] = useState('all')

  function changeLang(a) {
    setLangStatus(false)
    setLang(a)
  }
  function changeTheatre(a) {
    setMoviesInTheatre([... new Set(dataTheatre.filter(item => item.theatreTitle == a).map(item => item.movie.id))])
    setTheatreStatus(false)
    setTheatre(a)
  }
  console.log(data == false)
  
  if (data.length == 0) {
    return <Loader />
  }
  return (
    <>
      <Slider />
      <div className='flex container justify-between m-auto gap-6 mt-6'>
        <div className='flex-1 relative py-[5px] border-b-2 border-b-white cursor-pointer text-white'><p className='text-center' onClick={() => setLangStatus(true)}>{lang}</p>
          <div className='w-[100%] bg-neutral-500 absolute top-[105%] z-1 shadow-2xl '>
            {
              langArr.map((item, i) => <p key={i} className={`py-1 px-2 hover:bg-neutral-400 ${langStatus ? 'block' : 'hidden'} `} onClick={() => changeLang(item)}>{item}</p>)
            }
          </div>
        </div>
        <div className='flex-1 relative py-[5px] border-b-2 border-b-white cursor-pointer text-white'><p className='text-center' onClick={() => setTheatreStatus(true)}>{theatre}</p>
          <div className='w-[100%] bg-neutral-500 absolute top-[105%] z-1 shadow-2xl '>
            {
              theatreArr.map((item, i) => <p key={i} className={`py-1 px-2 hover:bg-neutral-400 ${theatreStatus ? 'block' : 'hidden'} `} onClick={() => changeTheatre(item)}>{item}</p>)
            }
          </div>
        </div>
        <div className='flex-1 relative text-center py-[5px] border-b-2 border-b-white cursor-pointer text-white'><p>Bugun</p></div>
        <div className='p-3 bg-red-800 text-white border-2 cursor-pointer rounded-xl '><p>Temizle</p></div>
      </div>
      <div className='flex container gap-15 flex-wrap justify-center m-auto mt-[50px]'>
        {
          data.filter(item => (item.languages.includes(lang) || lang == 'Dil') && (moviesInTheatre.includes(item.id) || moviesInTheatre == 'all'))
            .map(item => <Card key={item.id} item={item} />)
        }
      </div>
    </>
  )
}

export default Home