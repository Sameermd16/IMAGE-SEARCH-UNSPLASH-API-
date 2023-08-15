import { useState, useEffect, useRef, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import axios from 'axios'

const accessKey = 'jXNKyL-Y-Kn8iEn37tWXLuZU5rdltfz9KJ0dlAWh0yo'
const API_URL = 'https://api.unsplash.com/search/photos'

function App() {

  const [images, setImages] = useState([])
  console.log(images)
  const [input, setInput] = useState('')
  const [page, setPage] = useState(1)
  // const [totalPages, setTotalPages] = useState(0)
  const [errorMsg, setErrorMsg] = useState('')
  console.log(input)
  // const searchBtn = useRef()
  // console.log(searchBtn.current)

  function handleSearch(event) {
    event.preventDefault()
  }

  const fetchImages = useCallback(async () => {
    try{
      if(input) {
        setErrorMsg('')
        const {data} = await axios.get(`${API_URL}?query=${input}&page=${page}&client_id=${accessKey}`)
        console.log(data.results)
        setImages(data.results)
        // setTotalPages(data.total_pages)
      }
    }catch(err) {
      setErrorMsg("Error handling images. Try again later")
    }
  }, [page, input])

  useEffect(() => {
    console.log("use effct ran")
    fetchImages()
  }, [fetchImages])

  const imageDivs= images.map((item) => {
    <div className='d-flex flex-column align-items-center p-3 col' style={{minWidth: '400px'}}>
      <img src={item.urls.small} width='100%' />
    </div>
  })

  return (
    <>
      <main className='container'>
        <h1 className='text-center'>Image Search</h1>
        {errorMsg && <p>{errorMsg}</p>}
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
          {
            images.map((image) => {
              <img src={image.urls.small} />
            })
          }
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
