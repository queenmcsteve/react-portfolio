import Card from "./Card";
import projectImage1 from "../assets/project-01.jpg";
import projectImage2 from "../assets/project-02.jpg";
import projectImage3 from "../assets/project-03.jpg";
import projectImage4 from "../assets/project-04.jpg";
import projectImage5 from "../assets/project-05.jpg";
import projectImage6 from "../assets/project-06.jpg";

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
        projectRepo="https://github.com/queenmcsteve/latte-lotto/tree/dev"
        projectLink="http://latte-lotto.herokuapp.com/"
      />
      <Card
        projectName="DISiNFO"
        projectDesc="A small web thingy that generates random words and then uses these to find weird YouTube videos."
        projectImage={projectImage2}
        projectRepo="https://github.com/queenmcsteve/disinfo"
        projectLink="https://queenmcsteve.github.io/disinfo/"
      />
      <Card
        projectName="complaints department"
        projectDesc="A simple blogging platform that allows account and post creation as well as commenting. Seed data references The Boondocks."
        projectImage={projectImage3}
        projectRepo="https://github.com/queenmcsteve/mvc-tech-blog/tree/dev"
        projectLink="https://pacific-refuge-98850.herokuapp.com/"
      />
      <Card
        projectName="PWA Text Editor"
        projectDesc="A lightweight pwa text editor using IndexedDB."
        projectImage={projectImage4}
        projectRepo="https://github.com/queenmcsteve/text-editor/tree/dev"
        projectLink="https://queenmcsteve.github.io/disinfo/"
      />
      <Card
        projectName="Note Taker"
        projectDesc="This is a simple note taking app built using Express.js"
        projectImage={projectImage5}
        projectRepo="https://github.com/queenmcsteve/note-taker/tree/dev"
        projectLink="https://evening-tor-99495.herokuapp.com/"
      />
      <Card
        projectName="Weather Dashboard"
        projectDesc="A simple simple weather dashboard using the OpenWeather One Call API. "
        projectImage={projectImage6}
        projectRepo="https://github.com/queenmcsteve/weather-dashboard"
        projectLink="https://queenmcsteve.github.io/weather-dashboard/"
      />
    </div>
  );
}

export default Portfolio;
