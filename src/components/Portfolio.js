import Card from "./Card";
import projectImage1 from "../assets/project-01.jpg";
import projectImage2 from "../assets/project-02.jpg";
import projectImage3 from "../assets/project-03.jpg";

function Portfolio() {
  return (
    <div className="flex-col space-x-4">
      Portfolio
      <br />
      <Card
        projectName="Latte Lotto"
        projectDesc="
        A user matching app, created with Olivier Measson. It accepts signups, and then gives the admin the ability to randomly pair users and send out dynamically generated emails to each pair. As this app is still under development for a client, the repo is private."
        projectImage={projectImage1}
      />
      <Card
        projectName="DISiNFO"
        projectDesc="A small web thingy that generates random words and then uses these to find weird YouTube videos."
        projectImage={projectImage2}
      />
      <Card
        projectName="complaints department"
        projectDesc="A simple blogging platform that allows account and post creation as well as commenting. Seed data references The Boondocks."
        projectImage={projectImage3}
      />
    </div>
  );
}

export default Portfolio;
