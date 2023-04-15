import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/bd5be29a-3b81-40ee-b459-2e3553214450" className="flex flex-col max-w-[600px] wi-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or write me an email directly - ingakonovalova@gmail.com.
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea className="bg-[#ccd6f6] p-2" name="message" id="" placeholder="Message" rows="10"/>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's collaborate</button>
      </form>
    </div>
  );
}

export default Contact;
