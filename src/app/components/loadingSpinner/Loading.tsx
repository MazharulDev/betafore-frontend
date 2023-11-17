import "./Loading.css";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
