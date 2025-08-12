import React, { useState } from 'react'
import Loader from './Loader'

function Places({checkedPlace,row,col,selectPlace,status,selectType,buyedTickets}) {
    console.log(status);
    
    return (
        <div style={{ height: `${col * 75}px` }} className={`bg-neutral-600 relative w-full rounded-xl flex `}>
            <div style={{ width: `${row * 55}px` }} className={`absolute left-[50%]  translate-x-[-50%]`}>
                {
                    Array.from({ length: col }).map((_, i) => (
                        <div key={i} className='h-[45px] absolute flex left-[-50px] items-center justify-center text-white font-semibold text-xl ' style={{ top: `${70 + (55 * i)}px` }} >
                            <p>{8 - i}</p>
                        </div>
                    ))
                }
                {
                    Array.from({ length: row }).map((_, i) => (
                        Array.from({ length: col }).map((_, j) => (
                            <div onClick={() => selectPlace(`${i + 1}-${col - j}`)} style={{ left: `${(55 * i)}px`, top: `${70 + (55 * j)}px` }} key={`${i}-${j}`} 
                            className={`${buyedTickets.find(item => item.id == `${i + 1}-${col - j}`) ? 'bg-black text-white ' : 
                                            checkedPlace.find(item => item.id == `${i + 1}-${col - j}`) ? 'bg-red-600' : 'bg-neutral-200' }  
                                            flex items-center absolute justify-center cursor-pointer w-[45px] h-[45px] rounded-md `}>
                                <p  className={` font-semibold text-xl`}>{i + 1}</p>
                                <div className={`${status[`${i + 1}-${col - j}`] ? 'block' : 'hidden'} z-1 absolute bottom-[100%] text-center bg-white w-[110px] rounded-xl overflow-hidden`}>
                                    <p onClick={() => selectType(`${i + 1}-${col - j}`,'Aile',i+1,col-j)} className='p-2 hover:bg-red-600 hover:text-white'>Aile</p>
                                    <p onClick={() => selectType(`${i + 1}-${col - j}`,'Boyuk',i+1,col-j)} className='p-2 hover:bg-red-600 hover:text-white'>Boyuk</p>
                                </div>
                            </div>
                        ))
                    )
                    )
                }
            </div>
        </div>
    )
}

export default Places