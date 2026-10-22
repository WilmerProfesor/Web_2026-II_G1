import { useState } from 'react'
import CardTest from './Components/CardTest/CardTest'
import './App.css'

function App() {
  const [resultado, setResultado] = useState(0)
  
  
  return (
    <div id='containerMain'>
      <h1>Hola mundo desde react</h1>
      <div id='containerFlex'>
        <CardTest img={"https://static.nationalgeographicla.com/files/styles/image_3200/public/green-iguana.jpg?w=1600&h=1067"}/>
        <CardTest img={"https://palmitospark.es/wp-content/uploads/2023/04/reptile-g431a1a603_1280-1024x682.jpg"}/>
        <CardTest img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLacddivovSp3mcJd89L1ioNXBFl3gGLrN7IGCYaUTDVJYtA4INTG-G78&s=10"}/>        
      </div>
      <input type="button" value="Incrementar" onClick={()=>setResultado(resultado+1)} />
      <input type="button" value="Decrementar" onClick={()=>setResultado(resultado-1)} />
      <p style={{color:'red', fontSize:"2rem"}}>esto es un párrafo {resultado}</p>
    </div>
  )
}

export default App
