import cardImage from "../assets/image-01.jpg";

function Card({ projectName, projectImage, projectDesc }) {
  return (
    <div>
      <a
        href="/"
        className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-violet-100 dark:border-violet-700 dark:bg-violet-400 dark:hover:bg-violet-700"
      >
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={projectImage}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-violet-300 dark:text-white">
            {projectName}
          </h5>
          <p className="mb-3 font-normal text-violet-700 dark:text-violet-400">
            {projectDesc}
          </p>
        </div>
      </a>
      <br />
    </div>
  );
}

export default Card;
