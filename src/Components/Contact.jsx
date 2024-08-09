import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#061327] flex justify-center items-center'>
      <form method='POST' action="https://getform.io/f/apjmleja" className='flex flex-col max-w-[600px] w-full'>
        <div className="pb-8">
            <p className='text-4xl text-gray-300  font-bold inline border-b-4 border-pink-600'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below to get in touch with me</p>
        </div>
        
        <input type="text" placeholder='Name' name='name' className='p-2  bg-[#4b567c] ' />
        <input type="email" name="email" placeholder='Email' className="my-4 p-2 bg-[#48588a]" id="" />
        <textarea name="message" rows="10" className="p-2 bg-[#3e4e80]" placeholder='Send me your message and trust me i will recieve it' id=""></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact
