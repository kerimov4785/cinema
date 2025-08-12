import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getTheatreByID } from '../services/MovieServices'
import Loader from '../components/Loader'
import { formatDuration } from './Movie'
import Places from '../components/Places'
import Price from '../components/Price'
import { all } from 'axios'

function Section() {
    let { theatreID } = useParams()
    let [theatre, setTheatre] = useState()
    let [movie, setMovie] = useState()
    let [status, setStatus] = useState({})
    let [checkedPlace, setCheckedPlace] = useState([])
    let [buyedTickets, letBuyedTickets] = useState()
    let row = 15
    let col = 8
    useEffect(() => {
        letBuyedTickets(JSON.parse(localStorage['buyedTickets'] || '[]'))
    }, [checkedPlace])
    useEffect(() => {
        getTheatreByID(theatreID)
            .then(item => {
                setTheatre(item), setMovie(item.movie)
            })
    }, [])
    function selectPlace(id) {
        if(buyedTickets.find(item => item.id == id )){
            return
        }
        if (!checkedPlace.find(item => item.id == id)) {
            setStatus({[id]: !status[id] })
        }
        else {
            setCheckedPlace(checkedPlace.filter(item => item.id != id))
        }
    }
    function selectType(id, type, yer, sira) {
        setStatus({[id]: false })
        setCheckedPlace([...checkedPlace, { id, type, yer, sira }])
    }
    localStorage['nomre'] = 1
    if (!movie || !theatre || !buyedTickets) {
        return <Loader />
    }
    return (
        <div className='py-[110px] px-10 '>
            <h3 className='text-white font-semibold text-3xl mb-3'>Oturacag secimi</h3>
            <div className='bg-[url("https://new.parkcinema.az/images/movie-herobg.svg")] flex gap-4 p-3 relative z-0 rounded-xl before:absolute before:w-full before:z-[-1] before:h-full before:bg-[#161616d6] before:left-0 before:top-0 before:rounded-xl ' >
                <img src={`/src/assets/${movie.image}`} alt="" className='w-[180px] h-[276px] rounded-xl ' />
                <div className='text-white font-semibold flex flex-col justify-between text-[18px] ' >
                    <h4>{movie.name}</h4>
                    <p>{theatre.type.slice(1, 3)}</p>
                    <p>{theatre.dateOfDay.slice(0, 10)}</p>
                    <p>Dil: <span>{theatre.language}</span></p>
                    <p>Kinoteatr: <span>{theatre.theatreTitle}</span></p>
                    <p>{theatre.hallTitle}</p>
                    <p>Muddet: <span>{formatDuration(movie.duration)}</span></p>
                </div>
            </div>
            <div className='flex text-white gap-2 my-10 font-semibold ' >
                <p>Aile: {theatre.price[0].discounts.find(item => item.discountType == 'FAMILY').discountValue} AZN,</p>
                <p>Boyuk: {theatre.price[0].discounts.find(item => item.discountType == 'ADULT').discountValue} AZN</p>
            </div>
            <Places buyedTickets={buyedTickets}  row={row} col={col} status={status} checkedPlace={checkedPlace} selectType={selectType} selectPlace={selectPlace} />
            <Price buyedTickets={buyedTickets}  setCheckedPlace={setCheckedPlace}  theatre={theatre} checkedPlace={checkedPlace} />
        </div>
    )
}

export default Section