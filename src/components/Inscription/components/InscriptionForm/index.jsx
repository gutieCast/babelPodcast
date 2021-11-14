import React, { useState, useEffect, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import { Button } from '../../../Button'
import { validations } from '../../../../helpers/validations'
import 'react-phone-number-input/style.css'
import './inscriptionForm.scss'

const InscriptionForm = () => {

    /////////////////////////////////////////////////////VALIDATIONS

    const { errors, validateName, validateLastname, validateEmail, validatePhone, validateOrganization } = validations


    // const selectFromButton = setPaymentModality(sessionStorage.getItem('option'))

    /////////////////////////////////////////////////USE STATES & REGISTRER FUNCTIONS

    const firstRender = useRef(true);

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [organization, setOrganization] = useState('Esgoje una opción');
    const [isDisabled, setIsDisabled] = useState(true)
    const [goPay, setGoPay] = useState(false);

    // const { optionSelected } = useParams();

    const options = [
        { value: '', title: '--Escoge tu organización--' },
        { value: 'Comunidad campesina', title: 'Comunidad campesina' },
        { value: 'Comunidad indígena', title: 'Comunidad indígena' },
        { value: 'Organización feminista', title: 'Organización feminista' },
        { value: 'Organización barrial', title: 'Organización barrial' },
        { value: 'Comunidad LGBTIQ+', title: 'Comunidad LGBTIQ+' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // const sendRegistrer = (name, lastname, email, phone, profession, organization, paymentModality) => {
        //     // async + arg
        //     // await api({
        //     //     method: "post",
        //     //     url: "/prerregistres.json",
        //     //     data: registrer,
        //     // });
        // };
        console.log('registred: ', name, lastname, email, phone, organization);
        setName('');
        setLastname('');
        setEmail('');
        setPhone('');
        setOrganization('');
        firstRender.current = true
        setGoPay(true)
    }


    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setIsDisabled(pendingErrors(errors))
    }, [name, lastname, email, phone, organization]);

    const pendingErrors = (errors) => {
        if (
            (name === '' || lastname === '' || email === '' || phone === '' || organization === '')
        ) {
            return true
        } else {
            for (let key in errors) {
                if (errors[key] !== null && errors[key] !== "") {
                    return true
                } else {
                    errors = {}
                    return false
                }
            }
        }
    };

    return (
        <>
            {goPay && (<Redirect to="/" />)}
            <div id="registrer-form" className="inscription">
                <form className="form-registrer" onSubmit={handleSubmit}>

                    <fieldset className="uk-fieldset fieldset" >

                        <div className="uk-margin  input-box">
                            <input className="uk-input input" name="name" id="name" type="text" placeholder="*Tus nombres" value={name} onChange={(e) => setName(e.target.value)} onBlur={(e) => validateName(e.target.value)} />
                            {errors.name !== '' ? <span>{errors.name}</span> : ''}
                        </div>

                        <div className="uk-margin  input-box">
                            <input className="uk-input input" name="lastname" id="lastname" type="text" placeholder="*Tus apellidos" value={lastname} onChange={(e) => setLastname(e.target.value)} onBlur={(e) => validateLastname(e.target.value)} />
                            {errors.lastname !== '' ? <span>{errors.lastname}</span> : ''}
                        </div>

                        <div className="uk-margin input-box">
                            <input className="uk-input input" name="email" id="email" type="email" placeholder="*Tu correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={(e) => validateEmail(e.target.value)} />
                            {errors.email !== '' ? <span>{errors.email}</span> : ''}
                        </div>

                        <div className="uk-margin input-box">
                            <PhoneInput withCountryCallingCode={false} defaultCountry="BO" international={true} className="uk-input input input-phone" placeholder="*Tu número de celular" name="phone" id="phone" type="text" value={phone} onChange={setPhone} onBlur={() => validatePhone(phone)} />
                            {errors.phone !== '' ? <span>{errors.phone}</span> : ''}
                        </div>

                        <div className="uk-margin input-box">
                            <select className="organization" name="organization" id="organization" value={organization} onChange={(e) => setOrganization(e.target.value)} onBlur={(e) => validateOrganization(e.target.value)}
                            >
                                {
                                    options.map(option => {
                                        console.log('print key ' + organization);
                                        return (
                                            <option>
                                                {option.title}
                                            </option>
                                        )
                                    })}
                            </select>
                            {errors.organization !== '' ? <span>{errors.organization}</span> : ''}
                        </div>
                    </fieldset>
                    <Button text={'enviar'} disabled={isDisabled ? 'disabled' : ''} onClick={(e) => handleSubmit(e)} />
                </form >
            </div>
        </>
    )
}

export default InscriptionForm