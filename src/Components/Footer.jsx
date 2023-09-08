import React, { useState } from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


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

        await fetch(expressBackendURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ templateParams }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Response from Express:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="flex flex-col items-center mt-10 z-400 bg-[#111827]">
            <span id="footer" className="text-6xl font-bold text-[#EAB308] px-10 py-4">
                CONTACT ME
            </span>
            <div className='flex flex-row w-screen mt-5 items-start justify-center' >
                <div className='flex flex-col items-start mx-10'>
                    <div className='flex flex-row py-8'>
                        <span className='text-[#EAB308]'>Address: </span>
                        <span className='text-[#F3F4F6]'>&nbsp;Nadayu28</span>
                    </div>
                    <div className='flex flex-row py-8'>
                        <span className='text-[#EAB308]'>Phone: </span>
                        <span className='text-[#F3F4F6]'>&nbsp;+60172563500</span>
                    </div>
                    <div className='flex flex-row py-8'>
                        <span className='text-[#EAB308]'>Email: </span>
                        <span className='text-[#F3F4F6]'>&nbsp;musthafaaltaf2001@gmail.com</span>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <input onChange={handleNameChange} value={name} className='bg-[#1F2937] text-[#F3F4F6] border-0 rounded p-2 w-[250px] m-2' type='text' name="myInput" placeholder='Name' />
                    <input onChange={handleEmailChange} value={email} className='bg-[#1F2937] text-[#F3F4F6] border-0 rounded p-2 w-[250px] m-2' type='email' name="myInput" placeholder='Your email' />
                    <input onChange={handleMessageChange} value={message} className='bg-[#1F2937] text-[#F3F4F6] border-0 rounded pl-2 pt-2 pb-[120px] w-[400px] m-2 text-justify' type='text' name="myInput" placeholder='Message' />
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
        </div>
    )
}

export default Footer