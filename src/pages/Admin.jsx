import React, { useContext, useState } from 'react'
import { MovieContext } from '../context/DataContext'
import NewFilmPanel from '../components/NewFilmPanel'
import { addNewMovie, deleteMovie, editMovie } from '../services/MovieServices'
import EditFilmPanel from '../components/EditFilmPanel'
import Loader from '../components/Loader'

function Admin() {
    let { data, setData } = useContext(MovieContext)
    let [panelStatus, setPanelStatus] = useState(false)
    let [panelStatus2, setPanelStatus2] = useState(false)
    let [Film, setFilm] = useState()
    let [editedID, setEditedID] = useState('')

    function close(panel) {
        if (panel == 'new') {
            setPanelStatus(false)
        }
        else {
            setPanelStatus2(false)
        }
    }
    function open(panel) {
        if (panel == 'new') {
            setPanelStatus(true)
        }
        else {
            setPanelStatus2(true)
        }
    }
    function save(panel, id, obj) {
        if (panel === 'new') {
            if (Film.name && Film.image && Film.languages && Film.year && Film.description) {
                addNewMovie(Film)
                    .then(item => setData([...data, item]))
                close('new')

            } else {
                alert('Fill all fields');
            }
        } else {
            editMovie(id, obj)
                .then(res => setData([...data.filter(item => item.id != id), res]))
            close('edit');
        }
    }


    function editMoviePanel(id) {
        open('edit')
        setEditedID(id)
    }
    console.log(Film)
    return (
        <>
            {panelStatus ? <NewFilmPanel save={save} close={close} setFilm={setFilm} Film={Film} /> : null}
            {panelStatus2 ? <EditFilmPanel save={save} editedID={editedID} close={close} setFilm={setFilm} Film={Film} /> : null}
            <div className="container mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
                <div className='bg-black text-white rounded-xl p-2 w-[100px] text-center mb-3 cursor-pointer' onClick={() => open('new')} >Add Movie</div>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">name</th>
                                <th className="p-3">img</th>
                                <th className="p-3">lang</th>
                                <th className="p-3">desc</th>
                                <th className="p-3 text-right">year</th>
                                <th className="p-3">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, i) =>
                                <tr key={i} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{item.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <img className='w-[70%]' src={item.image} alt="" />
                                    </td>
                                    <td className="p-3">
                                        <p>{item.languages.map(item => `${item} `)}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{item.description}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <p>{item.year}</p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span onClick={() => editMoviePanel(item.id)} className="cursor-pointer px-3 py-1 mr-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            Edit
                                        </span>
                                        <span onClick={() => deleteMovie(item.id)} className="cursor-pointer px-3 py-1 font-semibold rounded-md dark:bg-red-600 dark:text-gray-50">
                                            Delete
                                        </span>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Admin