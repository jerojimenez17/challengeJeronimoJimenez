const Loading = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="spinner-grow text-white" role="status">
        <span className="sr-only align-center">.</span>
      </div>
    </div>
  );
};

export default Loading;
