import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 m-20 bg-white text-center font-alegreya">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">About Us</h2>
      <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-10">
        We are a team dedicated to transforming document management through smart AI solutions. Our mission is to simplify your workflow with technology that works.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-xl transition-transform hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="Team Member"
            className="w-24 h-24 rounded-full mb-6 shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
          <p className="text-gray-600 mb-4">CEO & Founder</p>
          <p className="text-gray-400 text-sm">
            John drives innovation and oversees the strategic direction of the company.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-xl transition-transform hover:scale-105">
          <img
            src="https://c.pxhere.com/photos/da/49/face_facial_hair_fine_looking_guy_man_model_person_portrait-1563283.jpg!d"
            alt="Team Member"
            className="w-24 h-24 rounded-full mb-6 shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
          <p className="text-gray-600 mb-4">CTO</p>
          <p className="text-gray-400 text-sm">
            Jane leads our tech initiatives, ensuring our tools are cutting-edge and efficient.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center bg-white p-8 rounded-xl shadow-xl transition-transform hover:scale-105">
          <img
            src="https://wallpaperaccess.com/full/5496283.jpg"
            alt="Team Member"
            className="w-24 h-24 rounded-full mb-6 shadow-lg"
          />
          <h3 className="text-xl font-semibold text-gray-800">Michael Johnson</h3>
          <p className="text-gray-600 mb-4">Lead Developer</p>
          <p className="text-gray-400 text-sm">
            Michael makes sure our products are smooth, scalable, and user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
