import {useState, useEffect} from 'react'
import { TreadCatch } from '../components/TreadCatch'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const Home = () => {
  const request = new Request('https://api.github.com/repos/facebook/react/issues')
  const [data, setData] = useState([])
  useEffect(() => {

    fetch(request)
      .then((response) => {//Esta es una promesa, como la información no está disponible de inmediato, entonces la funcion continua apesar de que la info aun no esté disponible
        return response.json()
      }).then((gitInfo) => {//Aqui es cuando llega la info; entonces se manda llamar a setData con los argumentos de gitInfo 
        console.log(gitInfo)
        setData(gitInfo)
      }).catch((error) => {//Se manda un error si la informacion nunca llega
        console.error(error)
      })
  }, [])

  return (
    <>
    <Header/>
    <div>
    <div className='mainText-container'>
    <h1>Github React Issues</h1>
    <p className='p-main'>
      Esta es una pagina que utiliza la API de github para ver los Hilos relacionados con los problemas existentes en React
    </p>
    </div>

    <div clasName='searchbar-container'>

    </div>


    <div className='headTable'>
          <div className="id-head">
          <p>ID</p>
          </div>
          <div className="user-head">
          <p>User</p>
          </div>
          <div className="title-head">
          <p>Title</p>
          </div>
    </div>
    <div className='table'>
        {
        data.map((item) => (
         <TreadCatch key={item.id} {...item} />
        ))
      }
    </div>

    </div>
    <Footer/>
    </>
  )
}
