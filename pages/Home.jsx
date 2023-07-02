import {useState, useEffect} from 'react'
import { TreadCatch } from '../components/TreadCatch'

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
    <div>
    <div className='mainText-container'>
    <h1>Github React Issues</h1>
    <p>
      Esta es una pagina que utiliza la API de github para ver los Hilos relacionados con los problemas existentes en React
    </p>

    <div className='row'>
        {
        data.map((item) => (
          <TreadCatch key={item.id} {...item} />
        ))
      }
      </div>
    </div>
    </div>
    
  )
}
