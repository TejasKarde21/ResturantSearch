
export default function Navbar(){
    return(
        <>
         <div className="flex justify-between px-7 items-center py-8  mb-[20%] bg-slate-900 md:h-[10vh]  text-white fixed w-full top-0 z-10">
            <div className="flex justify-center items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" className="mr-2" />
                <h1 className="text-2xl font-semibold">GeekFoods</h1>
            </div>
              <ul className=" w-[50%] justify-between hidden md:flex">
                <li>Home</li>
                <li>Quote</li>
                <li>Resturants</li>
                <li>Foods</li>
                <li>Contact</li>
              </ul>

        <div>
             <button className="bg-blue-600 px-4 py-2 rounded-xl text-sm">Get Started</button>
             <i class="fa-solid fa-bars text-gray-300  md:hidden ml-4 text-2xl"></i>
        </div>

         </div>
         
         
        </>
    );
}