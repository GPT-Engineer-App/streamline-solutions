import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl mt-4">Get in touch with us for any queries or to start a project</p>
      </header>
      <section className="my-8">
        <h2 className="text-3xl font-semibold">Contact Information</h2>
        <p className="mt-4">Email: info@simplesoft.com</p>
        <p className="mt-2">Phone: +123 456 7890</p>
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-semibold">Send Us a Message</h2>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="4"></textarea>
          </div>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" type="submit">Send</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;