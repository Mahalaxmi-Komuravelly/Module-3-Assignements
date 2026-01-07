import React from 'react'

const Footer = () => {
  return (
    <div className='text-center bg-gray-600 text-white mt-3 py-4'>
      <p>&copy;{new Date().getFullYear} Todo Application, All rights reserved</p>
    </div>
  )
}

export default Footer
