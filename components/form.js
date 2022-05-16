import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
        const form = useRef();
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [message, setMessage] = useState("");

        const onChangeName = (e) => {
            e.preventDefault();
            setName(e.target.value);
        };

        const onChangeEmail = (e) => {
            e.preventDefault();
            setEmail(e.target.value);
        };

        const onChangeMessage = (e) => {
            e.preventDefault();
            setMessage(e.target.value);
        };
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_z5rzdqx', 'template_g2xfwfd', form.current, 'lSmh6d1DzMROl9CYh')
            .then((result) => {
                console.log(result.text);
                alert("Your message has been sent!");
            }, (error) => {
                console.log(error.text);
                alert("Your message could not be sent. Please try again later.");
            });
        };

        return (
            <div id="contact" className="flex flex-col items-center justify-center">
                <hr className="w-full my-8" />
                <h1 className="text-4xl font-bold text-center">I want to hear from YOU!</h1>
                <p className="text-center">Have a question? A commment? An idea? I want to hear them! Write your thoughts below, and they'll get sent to me. Providing your name and email is optional, if you prefer to remain anoynmous.</p>
                <form ref={form} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Name
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={name} onChange={onChangeName} name="name" id="grid-first-name" type="text" placeholder="Optional" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Email
                            </label>
                            <input value={email} onChange={onChangeEmail} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" id="grid-password" type="email" placeholder="Optional" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea value={message} onChange={onChangeMessage} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="message" id="grid-password" type="text" placeholder="Required." />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={sendEmail}>
                            Send Message
                        </button>
                    </div>
                </form>
                <hr className="my-8" />
            </div>

        )

}

