import React, { useRef } from "react";
import { useDispatch} from "react-redux";
import { searchCocktail } from "../Redux/features/cocktailSlice";
const Searchbox = () => {
  const searchTerm = useRef();
  const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = () => {
        const searchText = searchTerm.current.value
        dispatch(searchCocktail({ searchText }));
    }
  return (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
                      ref={searchTerm}
                      onChange={handleChange}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Search Your Drink..."
            style={{ width: "300px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbox;
