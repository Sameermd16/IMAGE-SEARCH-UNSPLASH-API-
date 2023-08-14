import { useState, useEffect, useRef, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import axios from 'axios'

const accessKey = 'jXNKyL-Y-Kn8iEn37tWXLuZU5rdltfz9KJ0dlAWh0yo'
const API_URL = 'https://api.unsplash.com/search/photos'

function App() {

  const [images, setImages] = useState([])
  const [input, setInput] = useState('')
  const [page, setPage] = useState(1)
  console.log(input)
  // const searchBtn = useRef()
  // console.log(searchBtn.current)

  function handleSearch(event) {
    event.preventDefault()
  }

  

  useEffect(() => {
    console.log("use effct ran")
    // moviesData()
  }, [])

  

  return (
    <>
      <main className='container'>
        <h1 className='text-center'>Image Search App</h1>
        <form onSubmit={handleSearch}>
          <input type='text' placeholder='search for images' className='form-control'
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <div className='text-end mt-2'>
            <button className='btn btn-outline-primary'>Search</button>
          </div>
        </form>
        <section className='container row gap-3'>
          <div className='d-flex flex-column align-items-center p-3 col' style={{minWidth: '400px'}}>
            <img src='https://plus.unsplash.com/premium_photo-1691960547805-7143654bd06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60' width='100%' />
            <a href='https://unsplash.com/photos/a-group-of-colorful-mushrooms-on-a-yellow-background-cgtZMRHZADM' target='_blank' >Mushrooms</a>
          </div>
          <div className='d-flex flex-column align-items-center p-3 col' style={{minWidth: '400px'}}>
            <img src='https://plus.unsplash.com/premium_photo-1691960547805-7143654bd06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60' width='100%' />
            <a href='https://unsplash.com/photos/a-group-of-colorful-mushrooms-on-a-yellow-background-cgtZMRHZADM' target='_blank' >Mushrooms</a>
          </div>
          <div className='d-flex flex-column align-items-center p-3 col' style={{minWidth: '400px'}}>
            <img src='https://plus.unsplash.com/premium_photo-1691960547805-7143654bd06b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60' width='100%' />
            <a href='https://unsplash.com/photos/a-group-of-colorful-mushrooms-on-a-yellow-background-cgtZMRHZADM' target='_blank' >Mushrooms</a>
          </div>
        </section>
      </main>
      <div className='text-center'>
        <button className='btn btn-primary'>Show more</button>
      </div>
    </>
  )
}

export default App