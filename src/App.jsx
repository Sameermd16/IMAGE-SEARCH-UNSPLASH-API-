import { useState, useEffect, useRef, useCallback } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import axios from 'axios'

const accessKey = 'jXNKyL-Y-Kn8iEn37tWXLuZU5rdltfz9KJ0dlAWh0yo'
const API_URL = 'https://api.unsplash.com/search/photos'

function App() {

  const [images, setImages] = useState([])
  // console.log(images)
  const [input, setInput] = useState('')
  const [page, setPage] = useState(1)
  // console.log(page)
  const [totalPages, setTotalPages] = useState(0)
  // console.log(totalPages)
  const [errorMsg, setErrorMsg] = useState('')
  
  function handleSearch(event) {
    event.preventDefault()
    getImages() 
  }

  async function getImages() {
    const {data} = await axios.get(`${API_URL}?query=${input}&page=${page}&client_id=${accessKey}`);
    // console.log(data.results)
    setImages(data.results)
    // console.log('this ran')
    setTotalPages(data.total_pages)
  }

  function nextPage() {
    if(page < totalPages) {
      setPage(page + 1)
    }
    // console.log('clicked show more')
  }
  function prevPage() {
    if(page > 1) {
      setPage(page - 1)
    }
  }
  useEffect(() => {
    getImages()
  }, [page])

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
            <button className='btn btn-outline-primary' onClick={handleSearch}>Search</button>
          </div>
        </form>
        <section className='container row gap-3'>
          {
            images.map((image) => {
              return <img key={image.id} src={image.urls.small} alt={image.alt_description} className='col' style={{width: '200px'}} />
            })
          }
        </section>
      </main>
      {
        input && (
        <div className='text-center m-3'>
          <button className='btn btn-primary me-3' onClick={prevPage}>Prev Page</button>
          <button className='btn btn-primary' onClick={nextPage}>Next Page</button>
        </div>
        )
      }
    </>
  )
}

export default App
