import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";
function Title(props) {
  console.log("props title", props);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(inputText(event.target.value));
  };
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={handleChange} />
      </div>
    </div>
  );
}

export default Title;
