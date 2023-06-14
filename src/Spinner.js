import { useSelector } from "react-redux";
import Loader, { TailSpin } from "react-loader-spinner";

const Spinner = (props) => {
  const spinner = useSelector((state) => state.appReducer.loading);
  return (
    <div className="loader-styles">
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={spinner}
      />
    </div>
  );
};

export default Spinner;
