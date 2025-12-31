import React from 'react'

const App = () => {
  return (
    <div>
      {/* Navbar */}

      <div>
        <nav className="flex flex-col sm:flex-row m-3 gap-12 bg-sky-100 p-4 items-center justify-center font-bold text-sky-1000">
          
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        
        </nav>
      </div>

      {/* Heading & Image Hero Section */}
      <section>
        <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-center bg-linear-to-r from-sky-500 to-purple-500  text-transparent bg-clip-text">Welcome To Flowers World</h2>
      <div>
        <img src="https://images.pexels.com/photos/31131379/pexels-photo-31131379.jpeg?_gl=1*1xdad9h*_ga*NTQwNjc4NDMuMTc2MjYwODM3OQ..*_ga_8JE65Q40S6*czE3NjcxNzEwNTYkbzE1JGcwJHQxNzY3MTcxMDU2JGo2MCRsMCRoMA.." alt="" 
        className="rounded-lg h-100 w-100 p-5 shadow-lg hover:scale-105 m-auto my-2 transition-transform duration-300" />
      </div>
      </section>

      {/* List Styling */}
      <ul className="list-disc list-inside pl-5 hover:text-blue-600 text-2xl pb-2">
        <li>Roses</li>
        <li>Lotus</li>
        <li>Jasmine</li>
        <li>Lilly</li>
        <li>Tulips</li>
      </ul>

      {/* Features Section ( Card )*/}
      <section>
      <div className="bg-sky-50 p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-white p-3 m-3 w-90 text-center shadow-xl"> 
          <img className="h-100 w-80"src="https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?_gl=1*i7eiy0*_ga*NTQwNjc4NDMuMTc2MjYwODM3OQ..*_ga_8JE65Q40S6*czE3NjcxNzEwNTYkbzE1JGcxJHQxNzY3MTcyMzYxJGo1MyRsMCRoMA.." alt="roses image" />
          <h3 className="font-bold">Roses</h3>
          <p>We provide fresh roses in so many varients</p>
          <button className="bg-sky-300 rounded-sm p-1 font-medium mt-1">Order Now!</button>
        </div>
        <div className="card bg-white p-3 m-3 w-90 text-center shadow-xl"> 
        <img className="h-100 w-80"src="https://images.pexels.com/photos/65259/flower-bug-close-up-lily-65259.jpeg?_gl=1*133663i*_ga*NTQwNjc4NDMuMTc2MjYwODM3OQ..*_ga_8JE65Q40S6*czE3NjcxNzEwNTYkbzE1JGcxJHQxNzY3MTczNDQzJGo1OSRsMCRoMA.." alt="lotus image" />
        <h3 className="font-bold">Lotus</h3>
        <p>We provide fresh Lotus</p>
        <button className="bg-sky-300 rounded-sm p-1 font-medium mt-1">Order Now!</button>
        </div>
        <div className="card bg-white p-3 m-3 w-90 text-center shadow-xl">
        <img className="h-100 w-80"src="https://images.pexels.com/photos/2282979/pexels-photo-2282979.jpeg?_gl=1*glm51u*_ga*NTQwNjc4NDMuMTc2MjYwODM3OQ..*_ga_8JE65Q40S6*czE3NjcxNzEwNTYkbzE1JGcxJHQxNzY3MTczMzkyJGo0MiRsMCRoMA.." alt="jasmine image" />
        <h3 className="font-bold">Jasmine</h3>
        <p>We provide fresh jasmine and it's family related flowers</p>
        <button className="bg-sky-300 rounded-sm p-1 font-medium mt-1">Order Now!</button>
        </div>
        <div className="card bg-white p-3 m-3 w-90 text-center shadow-xl">
        <img className="h-100 w-80"src="https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?_gl=1*bv8ajx*_ga*NTQwNjc4NDMuMTc2MjYwODM3OQ..*_ga_8JE65Q40S6*czE3NjcxNzEwNTYkbzE1JGcxJHQxNzY3MTczNTA5JGo1OSRsMCRoMA..://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?_gl=1*i7eiy0*_ga*NTQwNjc4NDMuMTc2MjYwODM3OQ..*_ga_8JE65Q40S6*czE3NjcxNzEwNTYkbzE1JGcxJHQxNzY3MTcyMzYxJGo1MyRsMCRoMA.." alt="tulips image" />
        <h3 className="font-bold">Tulips</h3>
        <p>We provide fresh tulips in so many colors</p>
        <button className="bg-sky-300 rounded-sm p-1 font-medium mt-1">Order Now!</button>
      </div>
      <div className="card bg-white p-3 m-3 w-90 text-center shadow-xl">
        <img className="h-100 w-80"src="https://media.istockphoto.com/id/1268765943/photo/zephyranthes-candida-with-common-names-that-includes-autumn-zephyr-lily-white-wildflower-and.jpg?b=1&s=612x612&w=0&k=20&c=dM9zEd65kOI49j9jF2BO-GYWur9MV625qOKs0Jq156Y=" alt="lilly image" />
        <h3 className="font-bold">Lilly</h3>
        <p>We provide fresh lilly garlands and flowers with customisation</p>
        <button className="bg-sky-300 rounded-sm p-1 font-medium mt-1">Order Now!</button>
        </div>
      <div className="card bg-white p-3 m-3 w-90 text-center shadow-xl">
        <img className="h-100 w-80"src="https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?_gl=1*1d0fvaf*_ga*NTQwNjc4NDMuMTc2MjYwODM3OQ..*_ga_8JE65Q40S6*czE3NjcxOTkyNTckbzE2JGcxJHQxNzY3MTk5MjcxJGo0NiRsMCRoMA.." alt="sunflower image" />
        <h3 className="font-bold">Sunflower</h3>
        <p>We provide fresh sunflowers</p>
        <button className="bg-sky-300 rounded-sm p-1 font-medium mt-1">Order Now!</button>
        </div>
      </div>
    </section>
    {/* Table Section */}
      <section>
      <div>
        <table className="bg-sky-100 m-5 p-5 border hover:scale-105 border-gray-300">
          <thead className="bg-sky-700 text-white font-light">
              <tr>
                <th className="p-2">Name</th>
              <th className="p-2">Price</th>
              <th className="p-2">Min.order</th>
              </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-sky-200 even:bg-white">
              <td className="p-2">Roses</td>
              <td className="p-2">Rs.50</td>
              <td className="p-2">10 pieces</td>
            </tr>
            <tr className="odd:bg-sky-200 even:bg-white">
              <td className="p-2">Lotus</td>
              <td className="p-2">Rs.100</td>
              <td className="p-2">20 pieces</td>
            </tr>
            <tr className="odd:bg-sky-200 even:bg-white">
              <td className="p-2">Tulips</td>
              <td className="p-2">Rs.75</td>
              <td className="p-2">15 pieces</td>
            </tr>
          </tbody>
        </table>
      </div>
      </section>
      {/* Contact Form (input fields and button) */}

      <div className="border-gray-400 p-5 m-3 ring-1 w-80 rounded hover:scale-105">
        <h2 className="text-center font-bold p-3">Details Form</h2>
        <input type="text" placeholder='Enter Name' className="rounded focus:ring-sky-400 ring-2 p-2 visible m-2"/><br />
        <input type="email" placeholder='Enter Email' className="rounded focus:ring-sky-400 ring-2 p-2 m-2"/><br />
        <input type="password" placeholder='Enter Password' className="rounded focus:ring-sky-400 ring-2 p-2 m-2"/><br />
        <button className='rounded bg-gray-200 hover:bg-gray-300 active:bg-gray-600 px-8 py-2 m-3 text-center font-medium'>Submit</button>
      </div>
      
    </div>
  )
}

export default App
