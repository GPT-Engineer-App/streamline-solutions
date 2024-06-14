import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">About SimpleSoft</h1>
        <p className="text-xl mt-4">Learn more about our mission and values</p>
      </header>
      <section className="my-8">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="mt-4">At SimpleSoft, our mission is to deliver customized business software solutions that streamline processes and drive efficiency.</p>
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-semibold">Our Values</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Customer Focus</li>
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Excellence</li>
        </ul>
      </section>
    </div>
  );
};

export default About;