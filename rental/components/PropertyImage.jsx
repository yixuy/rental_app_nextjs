import React from "react";
import Image from "next/image";
const PropertyImage = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
      {images.length === 1 ? (
        <Image
          alt=""
          className="object-cover h-[400px] mx-auto rounded-xl"
          src={images[0]}
          width={1800}
          height={400}
          priority={true}
        />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={
                  `${images.length === 3}` && index === 2
                    ? "col-span-2"
                    : "col-span-1"
                }
              >
                <Image
                  alt=""
                  className="object-cover h-[400px] mx-400 rounded-xl"
                  src={images[0]}
                  width={0}
                  height={0}
                  priority={true}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default PropertyImage;
