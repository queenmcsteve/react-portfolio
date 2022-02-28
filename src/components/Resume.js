function Resume() {
  return (
    <div className="flex flex-col justify-center">
      Download my CV here:
      <br />
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        ahref="/NdS_CV_January2022.pdf"
      >
        download
      </button>
    </div>
  );
}

export default Resume;
