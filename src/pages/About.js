import React from "react";
import Owner from "../pictures/Owner.png";

const About = () => {
  const lightGreenColor = { color: "#99BC85" };

  return (
    <div style={{backgroundColor: "#E1F0DA"}} className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 space-y-12">
        <section>
          {/* Code for About Us */}
          <h2 style={lightGreenColor} className="text-5xl font-bold mb-11">🔎 About Us</h2>
          <div className="flex flex-col sm:flex-row items-center">
            <img src={Owner} alt="Jonathan Li" className="w-64 h-64 rounded-full mb-5 sm:mb-2 sm:mr-6" />
            <div>
              <h3 className="text-2xl font-semibold mb-3">Jonathan Li</h3>
              <p className="text-black">
                The Founder, Jonathan Li, shares a passion for board games, boba, and delicious food, so he combined them all together 
                to become Sip & Play, Park Slope's first board game cafe
              </p>
            </div>
          </div>
        </section>

        <section>
          {/* Code for Our Mission */}
          <h2 style={lightGreenColor} className="text-5xl font-bold mb-11">🎯 Our Mission</h2>
          <p className="text-black">To provide a welcoming space for friends and families to enjoy board games, delicious drinks, 
            and great food at Sip & Play, Park Slope's board game cafe</p>
        </section>

        <section>
          {/* Code for Our Story */}
          <h2 style={lightGreenColor} className="text-5xl font-bold mb-11">📖 Our Story</h2>
          <p classNae="text-black">Straightforward concept: come in with your friends and family to play any board game from our library of 300+ games! 
            We hope when you visit, you also enjoy our coffee, espresso, boba, sandwiches, and snacks</p>
        </section>

        <section>
          {/* Maybe a section for Our Location? */}
          <h2 style={lightGreenColor} className="text-5xl font-bold mb-11">📍 Our Location</h2>
          <p classNae="text-black">471 5th Ave, Brooklyn, NY 11215, United States</p>
        </section>
      </div>
    </div>
    
  );
};

export default About;
