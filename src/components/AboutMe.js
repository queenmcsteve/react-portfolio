import profilePic from "../assets/profile.jpg";

function AboutMe() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <div className="mb-auto mt-auto">
            <h1 className="text-3xl uppercase">Niko de Silva</h1>
            <p className="font-semibold mb-5">
              Learning Designer & Web Developer
            </p>
            <p>
              Curious, creative, and dedicated Learning Designer with a
              background in economics and exceptional communication skills. A
              strong believer in learning by doing, I've developed my analytical
              abilities while designing courses in diverse disciplines—including
              entrepreneurial finance, marketing, data analytics, organization
              science, and strategy—at Germany's top business school. I am an
              accomplished and multifaceted writer and editor, with relevant
              experience in academia and Berlin's startup ecosystem. I'm
              currently taking a full stack web developer boot camp to enhance
              my abilities as a learning designer.
            </p>
            <button className="bg-black rounded-md py-3 px-7 mt-6 text-white">
              Email Me
            </button>
          </div>
          <div className="max-h-96 md:h-screen">
            <img
              className="w-screen h-screen object-cover object-top"
              src={profilePic}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
