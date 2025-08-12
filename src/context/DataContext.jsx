import React, { createContext, useEffect, useState } from 'react'
import { getAllMovies, getAllTheatre } from '../services/MovieServices'

export const MovieContext = createContext()

function DataContext({ children }) {
    const [data, setData] = useState([])
    const [dataTheatre, setDataTheatre] = useState([])
    const [error, setError] = useState(null)
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState()
    const [userLoader, setUserLoader] = useState(false)
    useEffect(() => {
        getAllMovies()
            .then(item => setData(item))
            .catch(err => setError(err))
            .finally(() => setLoader(false))
        getAllTheatre()
            .then(item => setDataTheatre(item))
    }, [])
    useEffect(() => {
        if (localStorage['user']) {
            setUser(JSON.parse(localStorage['user']))
        }
        setUserLoader(true)
    }, [])
    const obj = {
        data, error, loader, dataTheatre, setData, user, setUser, userLoader, setUserLoader
    }
    return (
        <MovieContext.Provider value={obj}>
            {children}
        </MovieContext.Provider>
    )
}

export default DataContext