import Card from "./Card";

function Portfolio() {
  return (
    <div className="flex-col space-x-4">
      Portfolio
      <br />
      <Card projectName="Project 1" desc="put desc 1 here" />
      <Card projectName="Project 2" desc="put desc 2 here" />
      <Card projectName="Project 3" desc="put desc 3 here" />
    </div>
  );
}

export default Portfolio;
