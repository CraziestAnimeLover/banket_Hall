import React from "react";

const AboutSection = ({
  image = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=500&fit=crop",
  stats = [
    { value: "50+", label: "Sales Executives" },
    { value: "5000+", label: "Events Organized" },
    { value: "14+", label: "Years of Experience" },
  ],
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={image}
              alt="About"
              className="rounded-2xl shadow-xl w-full"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-[#878C53]">Us</span>
            </h2>

            <h4 className="text-xl font-normal mb-6">
              Create Special Moments for Your Events
            </h4>

            <p className="text-gray-600 mb-8 leading-relaxed">
              At our event planning company, we pride ourselves on creating
              unforgettable experiences that truly embody your individual style
              and preferences. From intimate gatherings with close friends and
              family to extravagant celebrations that leave a lasting impression,
              our team is committed to transforming your ideas into reality.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((item, idx) => (
                <div key={idx}>
                  <div className="text-2xl font-bold text-[#878C53]">
                    {item.value}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="border border-[#878C53] text-[#878C53] px-8 py-3 rounded-full hover:bg-[#878C53] hover:text-white transition duration-300">
              More About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;