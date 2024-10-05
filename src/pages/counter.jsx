import React, { useRef } from "react";
import CounterNumber from "../components/CounterNumber";
import Button from "../components/Buttons/button";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";
const counter = () => {
  const dispatch = useDispatch();
  const InputFieldDispatcher = useRef();
  const { privacyVal } = useSelector((state) => state.privacy);
  const handleIncrementCounter = (e) => {
    dispatch(counterActions.Increment());
    // dispatch({ type: "INCREMENT_VALUE", payload: Number(value) });
  };
  const handleDecrementCounter = (e) => {
    dispatch(counterActions.Decrement());
  };
  const handleAdd = (e) => {
    const val = Number(e.current.value);
    dispatch(counterActions.Add({ val }));
  };
  const handleSubstract = (e) => {
    const val = Number(e.current.value);
    dispatch(counterActions.Subtract({ val }));
  };
  const handlePrivacy = () => {
    dispatch(privacyActions.ChangePrivacy());
  };

  return (
    <>
      <section className="container py-[32px]">
        <div className="row">
          <div className="col-12 text-center text-[16px]">
            <CounterNumber count={counter} />
          </div>
          <div
            className={`col-12 d-flex justify-center align-center gap-2 py-2 ${
              !privacyVal && "d-none"
            }`}
          >
            <Button
              title="Increment"
              value="+,1"
              color="primary"
              events={handleIncrementCounter}
            />
            <Button
              title="Decrement"
              value="-,1"
              color="danger"
              events={handleDecrementCounter}
            />
          </div>
          <div
            className={`col-12 d-flex justify-center align-center gap-2 py-2 ${
              !privacyVal && "d-none"
            }`}
          >
            <input
              type="text"
              className="form-control"
              ref={InputFieldDispatcher}
              style={{ maxWidth: "200px" }}
            />
            <Button
              title="Add"
              value={InputFieldDispatcher}
              color="primary"
              events={handleAdd}
            />
            <Button
              title="Substract"
              value={InputFieldDispatcher}
              color="warning"
              events={handleSubstract}
            />
          </div>
          <div className="col-12 d-flex justify-center">
            <Button
              title="Privacy Manage"
              color="info"
              events={handlePrivacy}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default counter;
