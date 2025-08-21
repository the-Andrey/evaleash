import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const about = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar></Navbar>
        <div className='w-full h-screen bg-moonlight-asteroid2 flex items-center justify-center pt-40'>
            <div className='w-3/4 h-3/4 bg-amber-200'>
                <p>
                    This project aims to help users evaluate their AI models. During my academic journey, I had contact with Artificial Intelligence and had to train and evaluate models.
                    In many cases, evaluating a model is quite easy, but in others, it can be frustrating. 
                    For this reason, Evaleash was created, a website designed to help new users who are just beginning to work with AI, as well as to make the work of more experienced users easier.
                </p>
            </div>
        </div>
      <Footer></Footer>
    </div>
  )
}

export default about
