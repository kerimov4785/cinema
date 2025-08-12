import React, { useEffect } from 'react'

function NewFilmPanel({ save, setFilm, Film, close }) {
    useEffect(() => {
        setFilm({})
    }, [])
    return (
        <div className="fixed inset-0 bg-[#000000b1] flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-xl relative">
                <button onClick={() => close('new')} className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl">
                    ×
                </button>
                <h2 className="text-2xl font-semibold mb-6 text-center">Add movie</h2>
                <div className="space-y-4">
                    <input onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value })} type="text" name="name" placeholder="Название" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <input onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value })} type="text" name="image" placeholder="URL постера" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <input onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value.split(',') })} type="text" name="languages" placeholder="Языки (через запятую)" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <input onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value })} type="number" name="year" placeholder="Год" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <input onChange={(e) => setFilm({ ...Film, [e.target.name]: e.target.value })} name="description" placeholder="Описание" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required
                    />
                    <button onClick={() => save('new')} className="w-full text-center cursor-pointer bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewFilmPanel