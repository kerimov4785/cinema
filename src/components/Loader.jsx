import React from 'react'

function Loader() {
    return (
        <div className="flex items-center h-[100vh] justify-center gap-3 text-blue-600 text-lg font-semibold">
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            Loading...
        </div>

    )
}

export default Loader