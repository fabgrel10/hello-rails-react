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
  return <React.Fragment>Random Greeting: {message.message}</React.Fragment>;
}

Greeting.propTypes = {
  greeting: PropTypes.string,
};

export default Greeting;
