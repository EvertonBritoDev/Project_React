import './ContactForm.css';
import {useState, useEffect} from 'react';
//components
import Button from '../Buttons/Buttons';

function ContactForm(){

    const [formData, setFormData] = useState({
        name: '', 
        email: '', 
        message: ''
    });

    const [isFormValid, setIsFormValid ] = useState(false);
    const [formSubmitLoading, setFormSubmitLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleSubmit = async (e) =>{
        e.preventDefault();  
        if(isFormValid){
            setFormSubmitLoading(true);
            try {
                const response = await fetch ('https://api.web3forms.com/submit',{
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...formData, access_key: "9754f4a0-4cb4-48cb-b9c9-50e5d5867bc3"})
                })

                if(response.ok){
                    setFormSubmitted(true)
                }else{
                    alert('Error ao enviar', response.status)
                }    


            } catch (error) {
                    alert('Erro', error)
            }finally {
                setFormSubmitLoading(false);
            }
        }
    } 

    useEffect(()=>{
        const isValidEmail = (email) =>{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        const   isValid =   formData.name.trim() && 
                            formData.email.trim() && 
                            isValidEmail(formData.email) && 
                            formData.message.trim();
                                                        
        setIsFormValid(isValid)
    },[formData])

    const handleChange = (e) => {
        console.log(e.target);
        
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
        
    }
    return(        
        <div className='contact-form d-flex fd-column al-center'>
            <h2>We love meeting new people and helping them.</h2>
            <form onSubmit={handleSubmit}> 
                <div className='d-flex form-group'>
                    <input 
                        type="text" 
                        className='form-input'
                        id='name'
                        name='name'
                        placeholder='Name *'
                        onChange={handleChange}                                                
                    />
                    <input 
                        type="email" 
                        className='form-input'
                        id='email'
                        name='email'
                        placeholder='Email *'   
                        onChange={handleChange}                                                
                                             
                    />
                    
                    
                </div>
                <div className='d-flex form-group'>
                    <textarea  
                        className='form-input'
                        id='message'
                        name='message'
                        placeholder='Message *' 
                        rows='4'
                        onChange={handleChange}                                                
                    ></textarea>
                </div>
                <div className='al-center d-flex jc-end form-group'>
                    {formSubmitted && <p className="TEXT-PRIMARY"> Sucesso </p>}
                    <Button type='submit' buttonStyle='primary' disabled={!isFormValid || formSubmitLoading}>
                        Enviar
                    </Button>                
                </div>
            </form>
        </div>                    
    )
}

export default ContactForm;