import Loader from "react-loader-spinner";

const Spinner = (props) => {
  return (
    <div className="loader-style">
      <Loader
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
