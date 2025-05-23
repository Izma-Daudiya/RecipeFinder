import { Link } from "react-router-dom"

export default function Header(){
    return (
        <>
            <div class="bg-white">
  
  <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-black/25" aria-hidden="true"></div>
    <div class="fixed inset-0 z-40 flex">
      <div class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
        <div class="flex px-4 pt-5 pb-2">
          <button type="button" class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Close menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-2">
          <div class="border-b border-gray-200">
            <div class="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
        
              <button id="tabs-1-tab-1" class="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900" aria-controls="tabs-1-panel-1" role="tab" type="button">Home</button>
              
              <button id="tabs-1-tab-2" class="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900" aria-controls="tabs-1-panel-2" role="tab" type="button">About</button>
            </div>
          </div>
          <div id="tabs-1-panel-1" class="space-y-10 px-4 pt-10 pb-8" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
            <div class="grid grid-cols-2 gap-x-4">
              <div class="group relative text-sm">
                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                <a href="#" class="mt-6 block font-medium text-gray-900">
                  <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                  New Arrivals
                </a>
                <p aria-hidden="true" class="mt-1">Shop now</p>
              </div>
              <div class="group relative text-sm">
                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                <a href="#" class="mt-6 block font-medium text-gray-900">
                  <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                  Basic Tees
                </a>
                <p aria-hidden="true" class="mt-1">Shop now</p>
              </div>
            </div>
            <div>
              <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
              <ul role="list" aria-labelledby="women-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Dresses</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Denim</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="women-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
              <ul role="list" aria-labelledby="women-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="women-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="women-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Significant Other</a>
                </li>
              </ul>
            </div>
          </div>
        
          <div id="tabs-1-panel-2" class="space-y-10 px-4 pt-10 pb-8" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
            <div class="grid grid-cols-2 gap-x-4">
              <div class="group relative text-sm">
                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75" />
                <a href="#" class="mt-6 block font-medium text-gray-900">
                  <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                  New Arrivals
                </a>
                <p aria-hidden="true" class="mt-1">Shop now</p>
              </div>
              <div class="group relative text-sm">
                <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75 " />
                <a href="#" class="mt-6 block font-medium text-gray-900">
                  <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                  Artwork Tees
                </a>
                <p aria-hidden="true" class="mt-1">Shop now</p>
              </div>
            </div>
            <div>
              <p id="men-clothing-heading-mobile" class="font-medium text-gray-900">Clothing</p>
              <ul role="list" aria-labelledby="men-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Tops</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Pants</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Sweaters</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">T-Shirts</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Jackets</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Activewear</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Browse All</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="men-accessories-heading-mobile" class="font-medium text-gray-900">Accessories</p>
              <ul role="list" aria-labelledby="men-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Watches</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Wallets</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Bags</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Sunglasses</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Hats</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Belts</a>
                </li>
              </ul>
            </div>
            <div>
              <p id="men-brands-heading-mobile" class="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="men-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Counterfeit</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">Full Nelson</a>
                </li>
                <li class="flow-root">
                  <a href="#" class="-m-2 block p-2 text-gray-500">My Way</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="space-y-6 border-t border-gray-200 px-4 py-6">
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Company</a>
          </div>
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900"></a>
          </div>
        </div>

        <div class="space-y-6 border-t border-gray-200 px-4 py-6">
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
          </div>
          <div class="flow-root">
            <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>
          </div>
        </div>

        <div class="border-t border-gray-200 px-4 py-6">
          <a href="#" class="-m-2 flex items-center p-2">
            
            <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 shrink-0" />
            <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
            <span class="sr-only">, change currency</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <header class="relative bg-white">
    {/* <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p> */}

    <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="border-b border-gray-200">
        <div class="flex h-16 items-center">
          <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div class="ml-4 flex lg:ml-0">
            <a href="#">
              <span class="sr-only">Your Company</span>
        
              {/* <img class="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
            </a>
          </div>
          <div class="hidden lg:ml-8 lg:block lg:self-stretch">
            <div class="flex h-full space-x-8">              
              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Home</a>
              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">About</a>
              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Add Recipe</a>
              <a href="#" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
            </div>
          </div>

          <div class="ml-auto flex items-center">
            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              {/* <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a> */}
              <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">Login</Link>
              <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              {/* <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a> */}
              <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</Link>
            </div>

            {/* <div class="hidden lg:ml-8 lg:flex">
              <a href="#" class="flex items-center text-gray-700 hover:text-gray-800">
                <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 shrink-0" />
                <span class="ml-3 block text-sm font-medium">CAD</span>
                <span class="sr-only">, change currency</span>
              </a>
            </div> */}

            
            <div class="flex lg:ml-6">
              <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                <span class="sr-only">Search</span>
                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </a>
            </div>

            
            <div class="ml-4 flow-root lg:ml-6">
              <a href="#" class="group -m-2 flex items-center p-2">
                <svg class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span class="sr-only">items in cart, view bag</span>
              </a>
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