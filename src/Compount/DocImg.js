import React from 'react';
import kalyan from "../assets/Doctor's/kalyan.jpeg";
import ashok from "../assets/Doctor's/ashok.jpeg";
import jayasree from "../assets/Doctor's/jayasree.jpg";

function DocImg() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
      <div className="grid gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={kalyan} alt="drkalyan" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={ashok} alt="drashok" />
        </div>
        {/* <div>
          <img className="h-auto max-w-full rounded-lg" src={} alt="Gallery Image 3" />
        </div> */}
      </div>
      <div className="grid gap-4 relative top-48">
        <div>
          <img className="h-72 max-w-full rounded-lg" src={jayasree} alt="drjayasree" />
        </div>
        {/* <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="Gallery Image 5" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="Gallery Image 6" />
        </div> */}
      </div>
    </div>
  );
}

export default DocImg;
