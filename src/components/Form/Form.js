import { useState } from "react"

const Form = ({ handleCheckout }) => {

    const [formData, setFormData] = useState({name: '', email: '', phone: ''})

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCheckout(formData)
    }

    return (

        <form>
            <input type='text' onChange={handleChange} name='name' placeholder="Nombre completo" value={formData.name} />
            <input type='email' onChange={handleChange} name='email' placeholder="Email" value={formData.email} />
            <input type='tel' onChange={handleChange} name='phone' placeholder="Número de teléfono" value={formData.phone} />
            <button onClick={handleSubmit}>Generar orden</button>
        </form>
    ) 
}

export default Form