import React from 'react';

const HRConsultancy = () => {
  return (
    <div className='bg-white font-[Inter]'>
    <div className="px-4 lg:container lg:mx-auto lg:max-w-[1300px] py-6 ">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Left Image */}
        <div className="w-full ">
          <img
            src="https://i.postimg.cc/yd3qY7WH/Whats-App-Image-2022-03-16-at-9-58-23-AM.jpg" 
            alt="HR Consultancy"
            className="w-full justify-center object-cover rounded-lg mt-10 " 
          />
        </div>

        {/* Right Text */}
        <div className="w-full ">
          <h2 className="text-5xl font-bold  text-[#f58a1f] pt-4 mb-8">
            Why Organizations Need HR Consultancy
          </h2>
          <p className='text-justify'>
            Organizations need HR consultancy to tackle critical challenges that impede growth and employee satisfaction. Misalignment between a company’s vision and employees' career objectives can lead to disengagement, while ineffective performance management fails to drive results. Undefined succession planning and a lack of alignment in leadership with growth strategies further hinder progress. <br />
            <br />
            Additionally, excessive focus on people issues distracts from core business growth, and managers may find themselves bogged down in meetings instead of leading effectively. Low morale, increased absenteeism, and declining customer satisfaction can exacerbate recruitment challenges, leading to talent loss. <br />
            <br />
            By seeking HR consultancy, organizations can streamline processes, resolve staff issues efficiently, and manage legal concerns, ultimately fostering a thriving, engaged workforce aligned with their goals.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HRConsultancy;
