export default function OnTheMenu() {
    return (

<div className="flex justify-center items-center bg-gray-100">
<div className="flex flex-col m-20">
    <h3 className="text-4xl">On the Menu</h3>
    <button className="bg-black text-white p-5">View Full Menu</button>
</div>

        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-66">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    src="papi4.png"
                    alt="card-image" />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                   Smash Burgers
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          
        </div>

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-66">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    src="papi5.png"
                    alt="card-image" />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                   Shakes
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
            </div>
        
        </div>
<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-66">
            <div
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    src="papi1.png"
                    alt="card-image" />
            </div>
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Fries                
                    </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
            </div>
        </div>
</div>
 
    );
}