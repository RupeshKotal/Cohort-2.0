

export function Revenue({
    title,
     amount,
     orderCount,
     paymenDate,
     time

}){

    return (
        <div className="bg-white rounded shadow-lg ">
           <div className="py-6 px-6 rounded-sm">
           <div className="text-grey-500 mb-4 flex gap-2">
                <div>{title}</div>
                <div ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
</div>
            </div>

            <div className="flex justify-between items-center"> 
               <div className="text-[30px] font-bold">
                 Rs. {amount}
               </div>
               <div>
                {orderCount ? 
                <div className="flex cursor-pointer underline">
                    <div> {orderCount} orders 
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

                </div>:null}
               </div>
            </div>
           </div>

            <div >
                {paymenDate ? <div className="flex justify-between w-100 bg-blue-900 py-1 px-4 rounded-md">
                    <div>Next Payment Date:</div> <div>{paymenDate},{time}</div>
                </div>:null}
            </div>
        </div>
    )
}