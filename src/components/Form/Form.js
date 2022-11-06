import './Form.css'
import { useState } from 'react'
import { validateFields, validateForm } from './formValidation'

const Form = ({ handleCheckout }) => {

    const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
    const [validation, setValidation] = useState({ name: false, email: false, phone: false })
    const [error, setError] = useState(validation)

    
    const handleChange = (e) => {
        
        validateFields(e, formData, setValidation, setError)

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
        <>
            <form className='form'>
                <div className='form__field'>
                    <label>Nombre</label>
                    <input type='text' onChange={handleChange} name='name' placeholder='John Doe' value={formData.name} />
                    <h4>{error.name}</h4>
                </div>
                <div className='form__field'>
                    <label>Email</label>
                    <input type='email' onChange={handleChange} name='email' placeholder='john@doe.com' value={formData.email} />
                    <h4>{error.email}</h4>
                </div>
                <div className='form__field'>
                    <label>Teléfono</label>
                    <input type='tel' onChange={handleChange} name='phone' placeholder='12345678' value={formData.phone} />
                    <h4>{error.phone}</h4>
                </div>

                {validateForm(validation) && <button onClick={handleSubmit} className='button'>Generar orden</button>}
                
            </form>
        </>
    ) 
}

export default Form