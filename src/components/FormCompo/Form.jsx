/** @format */

import { useReducer } from "react";

const Form = () => {
  const initialState = {
    email: "",
    password: "",
    address: "",
    quantity: 0,
    price: 0,
    term: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "INCREMENT":
        return {
          ...state,
          quantity: state.quantity + 1,
        };
      case "DECREMENT":
        return {
          ...state,
          quantity: state.quantity - 1,
        };
      case "TERM":
        return {
          ...state,
          term: !state.term,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    /**
     * Add your logic here
     */
    console.log(state);
    e.target.reset();
  };

  return (
    <div className="hero h-full bg-base-200">
      <div className="hero-content w-1/2 flex-col">
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                className="input input-bordered"
                onBlur={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>
            <div className="flex gap-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => dispatch({ type: "DECREMENT" })}
                    className="btn btn-primary"
                  >
                    -
                  </button>
                  <span className="w-full text-center">{state.quantity}</span>
                  <button
                    onClick={() => dispatch({ type: "INCREMENT" })}
                    className="btn btn-primary"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  defaultValue={state.price || 0}
                  className="input input-bordered"
                  onBlur={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: parseInt(e.target.value),
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-1">
                <input type="checkbox" name="term" id="term" />
                <label
                  onClick={() => dispatch({ type: "TERM" })}
                  htmlFor="term"
                >
                  Accept terms and conditions
                </label>
              </div>
              <button
                disabled={!state.term}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
