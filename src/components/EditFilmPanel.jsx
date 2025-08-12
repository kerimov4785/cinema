import React, { useContext } from 'react'
import { MovieContext } from '../context/DataContext';
import { useEffect } from 'react';
import Loader from './Loader';

function EditFilmPanel({ save, close, editedID, setFilm, Film }) {
    let { data } = useContext(MovieContext)
    let editedFilm = data.find(item => item.id == editedID)
    useEffect(() => {
        setFilm(editedFilm)
    }, [])

    if(!Film){
        return 
    }

    return (
        <div className="fixed inset-0 bg-[#000000b1] flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl relative">
                <button onClick={close} className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl">
                    ×
                </button>
                <h2 className="text-2xl font-semibold mb-6 text-center">Edit movie</h2>
                <div className="space-y-4">
                    <input value={Film.name} onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value })} type="text" name="name" placeholder="Название" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <input value={Film.image} onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value })} type="text" name="image" placeholder="URL постера" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <input value={Film.languages} onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value.split(',') })} type="text" name="languages" placeholder="Языки (через запятую)" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <input value={Film.year} onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value })} type="number" name="year" placeholder="Год" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <input value={Film.description} onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value })} name="description" placeholder="Описание" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <button onClick={() => save('edit', editedID, Film)} className="w-full text-center cursor-pointer bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditFilmPanel