import React from 'react';
import icici from "../assets/home/insurance/icici.png"
import kotak from "../assets/home/insurance/kotak.png"
import sbi from "../assets/home/insurance/sbi.png"
import universal from "../assets/home/insurance/universal.png"
import oriental from "../assets/home/insurance/oriental.png"

function Insurance() {
  return (
    <>
      <div className="grid gap-5 m-10">
        {/* <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
            alt="Featured"
          />
        </div> */}
        <div className="grid grid-cols-5 gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg -mt-6"
              src={icici}
              alt="Image 1"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={kotak}
              alt="Image 2"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={sbi}
              alt="Image 3"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={universal}
              alt="Image 4"
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg mt-12"
              src={oriental}
              alt="Image 5"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Insurance;
