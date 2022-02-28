import cardImage from "../assets/image-01.jpg";

function Card({
  projectName,
  projectImage,
  projectDesc,
  projectRepo,
  projectLink,
}) {
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
          <p className="flex space-x-5 justify-end">
            <a
              className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
              href={projectRepo}
              target="_blank"
            >
              repo
            </a>
            <a
              className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded"
              href={projectLink}
              target="_blank"
            >
              app
            </a>
          </p>
        </div>
      </a>
      <br />
    </div>
  );
}

export default Card;
