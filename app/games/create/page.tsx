import '../../../styles/globals.css'

function Page() {
  return (
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen bg-slate-800">
           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
             </div>
 
         <div className="mt- sm:mx-auto sm:w-full sm:max-w-sm">
           <form className="space-y-6">
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Casino
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Machine
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Session Start
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Session End
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Game Type
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Game Name
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Wager Amount
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Wager Number
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Amount Win
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Amount Loss
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
 
             <div>
               <label className="block text-sm font-medium leading-6 text-gray-400">
                 Notes
               </label>
               <div className="mt-0">
                 <input
                   type="text"
                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 />
               </div>
             </div>
             
             <div>
               <a href='/games'
               type="submit"
               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                Submit
               </a>
             </div>
           </form>
         </div>
       </div>
     )
 }

export default Page