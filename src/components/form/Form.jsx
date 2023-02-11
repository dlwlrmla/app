import React,{ useState} from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

const navigate = useNavigate()

    const [data, setData] = useState({
        email : '',
        rut:'',
        nombre:''
    })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!data.email || !data.rut || !data.nombre ){
        alert("todos los campos son requeridos")
    }else{
        navigate('rulet')
    }  
  }

  return (
    <>
    
      <div className="d-flex justify-content-center mt-5">
        <form className="" onSubmit={handleSubmit}>
            <label className="form-label letras-form">correo</label>
            <input className="form-control" type="email" name="email" placeholder="email" onChange={(e) => setData({...data, email:e.target.value})} />

            <label className="form-label letras-form">rut</label>
            <input className="form-control" type="text" name="rut" placeholder="rut" onChange={(e) => setData({...data, rut:e.target.value})} />

            <label className="form-label letras-form">nombre</label>
            <input className="form-control" type="text" name="nombre" placeholder="nombre" onChange={(e) => setData({...data, nombre:e.target.value})} />
          <button className="btn btn-danger" type="submit">vamos!</button>
        </form>
      </div>

    </>
  );
};

export default Form;
