import { useState } from "react"

const Form = ({ handleCheckout }) => {

    const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
    const [validation, setValidation] = useState({ name: false, email: false, phone: false })
    const [error, setError] = useState(validation)

    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validNumber = /^[0-9]*$/
    const validName = /^[a-zA-Z\s]*$/

    const validateForm = () => {
        if(validation.name && validation.email && validation.phone) {
            return true
        } else return false
    }

    const validateFields = (e) => {

        if(e.target.name === 'name') {
            if(!validName.test(formData.name)) {
                setError(prev => {
                    return {
                        ...prev,
                        name: 'El nombre es inválido'
                    }
                })
                setValidation(prev => {
                    return {
                        ...prev,
                        name: false
                    }
                })
            } else if(formData.name.length < 5) {
                setError(prev => {
                    return {
                        ...prev,
                        name: 'El nombre debe contener al menos 5 caracteres'
                    }
                })

                setValidation(prev => {
                    return {
                        ...prev,
                        name: false
                    }
                })
            } else {
                setError(prev => {
                    return {
                        ...prev,
                        name: false
                    }
                })

                setValidation(prev => {
                    return {
                        ...prev,
                        name: true
                    }
                })
            }
            
        }

        if(e.target.name === 'email') {
            if(!validEmail.test(formData.email)) {
                setError(prev => {
                    return {
                        ...prev,
                        email: 'El email es inválido'
                    }
                })

                setValidation(prev => {
                    return {
                        ...prev,
                        email: false
                    }
                })
            } else {
                setError(prev => {
                    return {
                        ...prev,
                        email: false
                    }
                })
                setValidation(prev => {
                    return {
                        ...prev,
                        email: true
                    }
                })
            }
        }

        if(e.target.name === 'phone') {
            if(!validNumber.test(formData.phone)) {
                setError(prev => {
                    return {
                        ...prev,
                        phone: 'El número es inválido'
                    }
                })

                setValidation(prev => {
                    return {
                        ...prev,
                        phone: false
                    }
                })
            }     
            else if(formData.phone.length < 8) {
                setError(prev => {
                    return {
                        ...prev,
                        phone: 'El número debe contener al menos 8 caracteres'
                    }
                })

                setValidation(prev => {
                    return {
                        ...prev,
                        phone: false
                    }
                })
            }
            else {
                setError(prev => {
                    return {
                        ...prev,
                        phone: false
                    }
                })
                setValidation(prev => {
                    return {
                        ...prev,
                        phone: true
                    }
                })
            }
        }

        if(e.target.value === '') {

            setError(prev => {
                return {
                    ...prev,
                    [e.target.name]: 'Debe completar todos los campos'
                }
            })
            setValidation(prev => {
                return {
                    ...prev,
                    [e.target.name]: false
                }
            })
        }
    }

    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
        validateFields(e)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleCheckout(formData)
    }

    return (
        <>
            <form>
                <input type='text' onChange={handleChange} name='name' placeholder='Nombre completo' value={formData.name} />
                <h4>{error.name}</h4>
                <input type='email' onChange={handleChange} name='email' placeholder='Email' value={formData.email} />
                <h4>{error.email}</h4>
                <input type='tel' onChange={handleChange} name='phone' placeholder='Número de teléfono' value={formData.phone} />
                <h4>{error.phone}</h4>

                {validateForm() && <button onClick={handleSubmit}>Generar orden</button>}
                
            </form>
            <div>
            </div>
        </>
    ) 
}

export default Form