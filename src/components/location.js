import React from 'react';

export default function ContactPage() {
  return (
    <div className="">
      <ContactForm />
    </div>
  );
}

export function ContactForm({ title = 'Contact us' }) {
  return (
    <section className="h-full w-full lg:py-8">
      {/* Google Maps Section */}
      <section className="md:py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 text-center text-2xl sm:text-3xl lg:mb-7 lg:text-start lg:text-5xl lg:leading-none">
            We Are Located At ESSTHS University !
          </h1>
          <iframe
            title="tsyp location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12935.840417133557!2d10.5974361!3d35.8499818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a6826eca57b%3A0xf698bd059d8e2d13!2s%C3%89cole%20sup%C3%A9rieure%20des%20sciences%20et%20de%20la%20technologie%20de%20Hammam%20Sousse!5e0!3m2!1sen!2stn!4v1688595702507!5m2!1sen!2stn"
            className="rounded-2xl shadow-md"
            height="500"
            style={{
              border: 0,
              width: '100%',
            }}
            allowFullScreen="1"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
}
