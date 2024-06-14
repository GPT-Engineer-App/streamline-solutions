import React from 'react';

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold">Welcome to SimpleSoft</h1>
        <p className="text-xl mt-4">Experts in delivering customized business software solutions</p>
      </header>
      <section className="my-8">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <p className="mt-4">At SimpleSoft, we rapidly initiate new projects, specialize in process automation and AI implementations, and are committed to transparency and an individual approach throughout the development lifecycle.</p>
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-semibold">Our Expertise</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Rapid Project Initiation</li>
          <li>Process Automation</li>
          <li>AI Implementations</li>
          <li>Transparency and Individual Approach</li>
        </ul>
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-semibold">Portfolio</h2>
        <p className="mt-4">Check out some of our completed projects that showcase our expertise and commitment to quality.</p>
        {/* Add portfolio items here */}
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <p className="mt-4">We offer a comprehensive range of services to meet all your business software needs.</p>
        {/* Add services details here */}
      </section>
    </div>
  );
};

export default Index;