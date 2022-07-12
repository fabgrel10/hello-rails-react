import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchgreeting } from '../redux/greetings/greetings';
import PropTypes from 'prop-types';

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchgreeting());
  }, []);

  const message = useSelector((state) => state.greetingsReducer);
  console.log(message);
  return (
    <>
      <h4>Greeting</h4>
      <h2 className="message">{message.message}</h2>
    </>
  );
}

Greeting.propTypes = {
  greeting: PropTypes.string,
};

export default Greeting;
