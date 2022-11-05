const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const validNumber = /^[0-9]*$/
const validName = /^[a-zA-Z\s]*$/

export const validateForm = ({ name, email, phone}) => {
    if(name && email && phone) {
        return true
    } else return false
}

export const validateFields = (e, formData, setValidation, setError) => {

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