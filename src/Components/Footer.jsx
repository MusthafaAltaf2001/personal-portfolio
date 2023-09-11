import React, { useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const success = () => toast.success('Message Sent', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });;

    const emptyFields = () => toast.warning('Email and message fields cannot be left empty!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });;

    const serverError = () => toast.error('An unexpected server error occured!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });;



    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const sendMessage = async () => {
        const templateParams = {
            from_name: name,
            user_email: email,
            message: message
        };

        const expressBackendURL = 'https://personal-portfolio-backend-s20c.onrender.com/sendMessage'

        if (email.trim() === '') {
            emptyFields()
        } else if (message.trim() === '') {
            emptyFields()
        } else {
            await fetch(expressBackendURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ templateParams }),
            })
                .then((response) => response.json())
                .then((data) => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    success()
                    console.log('Response from Express:', data);
                })
                .catch((error) => {
                    serverError()
                    console.error('Error:', error);
                });
        }

    }

    return (
        <div className="flex flex-col items-center mt-5 z-400 bg-[#111827]">
            <span id="footer" className="text-5xl font-bold text-[#EAB308] px-10 py-4 text-center">
                CONTACT ME
            </span>
            <div className='flex flex-col md:flex-row mt-5 items-center justify-center'>
                <div className='flex flex-col items-start justify-start'>
                    <div className='flex flex-row py-4'>
                        <span className='text-[#EAB308]'>Address: </span>
                        <span className='text-[#F3F4F6]'>&nbsp;Nadayu28, Bandar Sunway, Selangor</span>
                    </div>
                    <div className='flex flex-row py-4'>
                        <span className='text-[#EAB308]'>Phone: </span>
                        <span className='text-[#F3F4F6]'>&nbsp;+60-17-256-3500</span>
                    </div>
                    <div className='flex flex-row py-4'>
                        <span className='text-[#EAB308]'>Email: </span>
                        <span className='text-[#F3F4F6]'>&nbsp;musthafaaltaf2001@gmail.com</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <input onChange={handleNameChange} value={name} className='bg-[#1F2937] text-[#F3F4F6] border-0 rounded p-2 w-[200px] md:w-[250px] m-2' type='text' name="myInput" placeholder='Name (Optional)' />
                    <input onChange={handleEmailChange} value={email} className='bg-[#1F2937] text-[#F3F4F6] border-0 rounded p-2 w-[200px] md:w-[250px] m-2' type='email' name="myInput" placeholder='Your email' />
                    <input onChange={handleMessageChange} value={message} className='bg-[#1F2937] text-[#F3F4F6] border-0 rounded pl-2 pt-2 pb-[120px] w-[250px] md:w-[320px] m-2 text-justify' type='text' name="myInput" placeholder='Message' />
                    <div onClick={sendMessage} className='w-40 h-1/12  rounded-md m-2 bg-[#EAB308] px-2 py-1 text-center items-center' >
                        <span className='text-[#000000]'>Send Message</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row py-8'>
                <div className='px-2'>
                    <a href='https://www.linkedin.com/in/musthafaaltaf/'>
                        <LinkedInIcon sx={{ color: '#F3F4F6' }}></LinkedInIcon>
                    </a>
                </div>
                <div className='px-2'>
                    <a href='https://github.com/MusthafaAltaf2001'>
                        <GitHubIcon sx={{ color: '#F3F4F6' }}></GitHubIcon>
                    </a>
                </div>
                <div className='px-2'>
                    <a href='https://www.instagram.com/musthafa.altaf/'>
                        <InstagramIcon sx={{ color: '#F3F4F6' }}></InstagramIcon>
                    </a>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Footer