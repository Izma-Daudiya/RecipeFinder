// import { Link } from "react-router-dom"
// import { useAuth } from "../context/AuthContext"

// export default function Header(){
//   const { user, logout } = useAuth()
//     return (
//         <>
//             <div class="bg-white">
  
//   <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
//     <div class="fixed inset-0 bg-black/25" aria-hidden="true"></div>
//     <div class="fixed inset-0 z-40 flex">
//       <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
//         <div class="flex px-4 pt-5 pb-2">
//           <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
//             <span class="absolute -inset-0.5"></span>
//             <span class="sr-only">Close menu</span>
//             <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
       

//         <div class="space-y-6 border-t border-gray-200 px-4 py-6">
//           <div class="flow-root">
//             <Link to="/" className="-m-2 block p-2 font-medium text-gray-900">Home</Link>
//             <Link to="/add-recipe" className="-m-2 block p-2 font-medium text-gray-900">Add Recipe</Link>
//           </div>
          
//         </div>

//         <div class="space-y-6 border-t border-gray-200 px-4 py-6">
//           <div class="flow-root">
//             <Link to="/login" className="-m-2 block p-2 font-medium text-gray-900">Login</Link>
//             <Link to="/register" className="-m-2 block p-2 font-medium text-gray-900">Create Account</Link>
//           </div>
//         </div>

//         {/* <div class="border-t border-gray-200 px-4 py-6">
//           <a href="#" class="-m-2 flex items-center p-2">
            
//             <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 shrink-0" />
//             <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
//             <span class="sr-only">, change currency</span>
//           </a>
//         </div> */}
//       </div>
//     </div>
//   </div>

//   <header class="relative bg-white">
//     {/* <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p> */}

//     <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//       <div class="border-b border-gray-200">
//         <div class="flex h-16 items-center">
//           <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
//             <span class="absolute -inset-0.5"></span>
//             <span class="sr-only">Open menu</span>
//             <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//             </svg>
//           </button>
//           <div class="ml-4 flex lg:ml-0">
//             <a href="#">
//               <span class="sr-only">Your Company</span>
        
//               {/* <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
//             </a>
//           </div>
//           <div class="hidden lg:ml-8 lg:block lg:self-stretch">
//             <div class="flex h-full space-x-8">              
//               <Link to="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Home</Link>
//               <Link to="/add-recipe" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Add Recipe</Link>
//             </div>
//           </div>

//           <div class="ml-auto flex items-center">
//             <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//               {user ? 
//                 <>
//                   <button className="text-sm font-medium text-gray-700 hover:text-gray-800" onClick={logout}>Logout</button>
//                 </>
//                 : <>
//                   <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">Login</Link> 
//                 </>
//               }
//               <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
//               <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</Link>
//             </div>

//             {/* <div class="hidden lg:ml-8 lg:flex">
//               <a href="#" class="flex items-center text-gray-700 hover:text-gray-800">
//                 <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 shrink-0" />
//                 <span class="ml-3 block text-sm font-medium">CAD</span>
//                 <span class="sr-only">, change currency</span>
//               </a>
//             </div> */}

            
//             <div class="flex lg:ml-6">
//               <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
//                 <span class="sr-only">Search</span>
//                 <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
//                 </svg>
//               </a>
//             </div>

            
//             <div class="ml-4 flow-root lg:ml-6">
//               <a href="#" class="group -m-2 flex items-center p-2">
//                 <svg class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//                 </svg>
//                 <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
//                 <span class="sr-only">items in cart, view bag</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   </header>
// </div>

//         </>
//     )
// }


import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"

export default function Header(){
  const { user, logout } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [savedCount, setSavedCount] = useState(0) // You can fetch this from your backend or context

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search logic here, perhaps redirect to search results page
    window.location.href = `/search?q=${searchQuery}`
  }

  return (
    <>
      <div className="bg-white">
        {/* Mobile menu */}
        <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-black/25" aria-hidden="true"></div>
          <div className="fixed inset-0 z-40 flex">
            <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pt-5 pb-2">
                <button type="button" className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Close menu</span>
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root">
                  <Link to="/" className="-m-2 block p-2 font-medium text-gray-900">Home</Link>
                  <Link to="/add-recipe" className="-m-2 block p-2 font-medium text-gray-900">Add Recipe</Link>
                </div>
              </div>

              <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                <div className="flow-root">
                  {user ? (
                    <button className="-m-2 block p-2 font-medium text-gray-900" onClick={logout}>Logout</button>
                  ) : (
                    <>
                      <Link to="/login" className="-m-2 block p-2 font-medium text-gray-900">Login</Link>
                      <Link to="/register" className="-m-2 block p-2 font-medium text-gray-900">Create Account</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="relative bg-white">
          <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <button type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open menu</span>
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </button>
                
                <div className="ml-4 flex lg:ml-0">
                  <Link to="/">
                    <span className="sr-only">Recipe App</span>
                    {/* Your logo here */}
                  </Link>
                </div>
                
                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">              
                    <Link to="/" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Home</Link>
                    <Link to="/add-recipe" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Add Recipe</Link>
                  </div>
                </div>

                {/* Search Bar - Desktop */}
                <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <form onSubmit={handleSearch}>
                      <label htmlFor="search" className="sr-only">Search</label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          placeholder="Search recipes..."
                          type="search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {user ? 
                      <button className="text-sm font-medium text-gray-700 hover:text-gray-800" onClick={logout}>Logout</button>
                      : <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">Login</Link>
                    }
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                    {!user && (
                      <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</Link>
                    )}
                  </div>

                  {/* Saved Recipes */}
                  <div className="ml-4 flow-root lg:ml-6">
                    <Link to="/saved-recipes" className="group -m-2 flex items-center p-2">
                      <svg className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{savedCount}</span>
                      <span className="sr-only">saved recipes, view saved</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}