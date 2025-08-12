import React, { useContext, useEffect, useState } from 'react'
import { data, Link, useParams } from 'react-router-dom'
import { getMovieByID } from '../services/MovieServices'
import Loader from '../components/Loader'
import { MovieContext } from '../context/DataContext'

export function formatDuration(minutes) {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const secs = 0;

    const paddedHrs = String(hrs).padStart(2, '0');
    const paddedMins = String(mins).padStart(2, '0');
    const paddedSecs = String(secs).padStart(2, '0');

    return `${paddedHrs}:${paddedMins}:${paddedSecs}`;
}
function Movie() {
    let { id } = useParams()
    let [movie, setMovie] = useState()
    let { dataTheatre } = useContext(MovieContext)


    useEffect(() => {
        getMovieByID(id)
            .then(item => setMovie(item))
    }, [])
    console.log(1)

    if (!movie) {
        return <Loader />
    }
    return (
        <div className='py-[120px] px-10'>
            <div className='flex justify-between'>
                <div className='flex gap-7 pr-3 font-semibold' >
                    <img src={`${movie.image}`} alt="" className='w-[260px] h-[380px] rounded-4xl object-cover ' />
                    <div className='pt-2 text-white '>
                        <h3>{movie.name}</h3>
                        <div className='flex gap-1'>
                            {movie?.genres.map((item, i) => <p key={i} className='text-xs my-1 font-normal' >{item.title}</p>)}
                        </div>
                        <p className='mb-1' >Dil</p>
                        <div className='flex gap-1 mb-2'>
                            {movie.languages.map((item, i) => item == 'RU' ? <img key={i} src="https://new.parkcinema.az/icons/ru-flag.svg" alt="" /> : null)}
                            {movie.languages.map((item, i) => item == 'EN' ? <img key={i} src="https://new.parkcinema.az/icons/en-flag.svg" alt="" /> : null)}
                            {movie.languages.map((item, i) => item == 'TR' ? <img key={i} src="https://new.parkcinema.az/icons/tr-flag.svg" alt="" /> : null)}
                            {movie.languages.map((item, i) => item == 'AZ' ? <img key={i} src="https://new.parkcinema.az/icons/az-flag.svg" alt="" /> : null)}
                        </div>
                        <p>Alt yazi</p>
                        <div className='flex gap-1'>
                            {movie?.subtitles.length == 0 ? <p className='text-red-800 text-xs'>Alt yazi yoxdur</p> : movie?.subtitles.map((item, i) => item == 'AZ' ? <img key={i} src="https://new.parkcinema.az/icons/az-flag.svg" alt="" className='mt-1 w-[22px]' /> : null)}
                        </div>
                        <p className='my-1'>Muddet: <span className='font-normal' >{formatDuration(movie.duration)}</span> </p>
                        <p className='mb-1'>Il: <span className='font-normal' >{movie.year}</span> </p>
                        <p className='mb-1'>Olke: <span className='font-normal' >{movie.country}</span> </p>
                        <p className='mb-1'>Rejissor: <span className='font-normal' >{movie.director}</span> </p>
                        <p className='mb-1' >Aktyorlar: {movie.actors.map((item, i) => <span key={i} className='font-normal' >{item} </span>)}</p>
                        <p>Nümayiş Tarixi: <span className='font-normal' >{movie.firstScreeningDate.slice(0, 10)}</span> </p>
                    </div>
                </div>
                <iframe width="618" height="348" src={movie.youtubeUrl} title="Супермен — Русский трейлер (Дубляж, 2025)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <p className='text-white font-semibold mt-[30px] w-[50%]'>{movie.description}</p>
            <div className='my-10'>
                {dataTheatre.filter(item => item.movie.id == id).map((item, i) => (
                    <div key={i} className='flex px-7 py-4 border-b-1 border-white text-white font-semibold text-[14px] bg-neutral-600 items-center w-full gap-2' >
                        <p className='flex-4' >{item.time}</p>
                        <p className='text-start flex-4'>{item.theatreTitle} | {item.hallTitle}</p>
                        <div className='flex flex-4 gap-6 fitems-center' >
                            <p>{item.type.slice(1, 3)}</p>
                            {item.language == 'RU' ? <img src='https://new.parkcinema.az/icons/ru-flag.svg' alt="" className='w-[21px]' /> :
                                item.language == 'EN' ? <img src='https://new.parkcinema.az/icons/en-flag.svg' alt="" className='w-[21px]' /> :
                                    item.language == 'AZ' ? <img src='https://new.parkcinema.az/icons/az-flag.svg' alt="" className='w-[21px]' /> :
                                        <img src='https://new.parkcinema.az/icons/tr-flag.svg' alt="" className='w-[21px]' />
                            }
                        </div>
                        <div className='flex-6'>
                            <div className='flex w-[50px] justify-center items-center border-1 border-white rounded-md px-2 text-[11px] text-white font-semibold ' >
                                {item.subtitle == 'AZ' ? <p >{item.subtitle}</p> : <p >Altyazı yoxdur</p>}
                            </div>
                        </div>
                        <Link to={`/movie/section/${item.id}/${item.movie.id}`}>
                            <div className='rounded-3xl hover:bg-red-600 transition bg-red-700 w-[130px] py-1.5 text-center text-zinc-300 cursor-pointer text-[14px] font-semibold ' >Bilet al</div>
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Movie