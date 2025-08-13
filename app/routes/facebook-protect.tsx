
import { useNavigate } from 'react-router';
import React, { useEffect } from 'react';
import Imgfacebookprotect from '@/assets/facebookprotect.jpg';
const FacebookProtect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
      dateElement.textContent = formattedDate;
    }
  }, []);

  const handleContinue = () => {
    navigate('/live');
  };

  return (
    <div className="sm:w-11/12 md:w-2/3 lg:w-2.5/5 xl:w-2/5 w-11/12 mx-auto pt-2">
      <div className="rounded-lg overflow-hidden mb-3">
        <img src={Imgfacebookprotect} alt="Facebook Protect" className="mx-auto block w-full" />
      </div>

      <p className="font-bold text-2xl">Welcome To Facebook Monetization.</p>
      <p className="my-3">
        Enable monetization on your Page, so we apply eligibility requirements to activate the automatic monetization feature on the Page. We created this monetization program to unlock the automatic monetization feature on your Page.
      </p>

      <div className="px-[14px]">
        <ol className="relative text-gray-500 border-s-2 border-gray-200">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-[#C4C4C4] rounded-full -start-[14px] ring-4 ring-white">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </span>
            <h3 className="text-black">We have activated the self-monetization feature on your Page.</h3>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-[#C4C4C4] rounded-full -start-[14px] ring-4 ring-white">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </span>
            <h3 className="text-black">Below, we provide you with a detailed guide on the process and help you fully activate and unlock the monetization feature on your Page.</h3>
          </li>
        </ol>
      </div>

      <button
        id="btn-continue"
        onClick={handleContinue}
        className="block text-lg cursor-pointer bg-blue-500 w-full text-center xl:py-3 sm:py-3 py-3 text-white rounded-lg font-semibold"
      >
        Continue
      </button>

      <p className="text-center mt-3 mb-5">
        <strong id="current-date"></strong>.
      </p>
    </div>
  );
};

export default FacebookProtect;
