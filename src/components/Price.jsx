import React from 'react'
import toast from 'react-hot-toast'

function Price({ theatre, checkedPlace,setCheckedPlace,buyedTickets }) {
    let sum = checkedPlace.map(item => item.type == 'Aile' ?
        theatre.price[0].discounts.find(item => item.discountType == 'FAMILY').discountValue
        : item.type == 'Boyuk' ? theatre.price[0].discounts.find(item => item.discountType == 'ADULT').discountValue : 0)
        
    function buyTicket() {
        toast.success('Tickets was buyed successfully')
        localStorage['buyedTickets'] = JSON.stringify([...checkedPlace,...buyedTickets])
        setCheckedPlace([])
    }
    return (
        <div>
            <div className='flex gap-3 flex-wrap mt-5 w-[500px]' >
                {checkedPlace.map((item,i) => (
                    <h5 key={i} className='text-white' >Sira {item.sira},Yer {item.yer},({item.type})</h5>
                ))}
            </div>
            <div className='font-semibold text-white flex justify-between py-8' >
                <div>Umumi {checkedPlace.length == 0 ? 0 : sum.reduce((last, i) => i + last)} AZN</div>
                <h2 onClick={() => buyTicket()} className='bg-red-600 w-[200px] text-center py-2 rounded-3xl cursor-pointer ' >Bilet al</h2>
            </div>
        </div>
    )
}

export default Price