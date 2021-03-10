import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

function calculateFibonacciArray(n) {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i-2] + result[i-1]);
  }
  return result; // or result[n-1] if you want to get the nth term
}
function getRandomInt(n) {
  let x = 0;
  for (let i = 0; i < n; i++) {
    const min = 0;
    const max = Number.MAX_SAFE_INTEGER
    x = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return x;
}

export const Button = (props) => {

  const { label, runPerformanceTest, runPerformanceAsync, runPerformanceEffect, ...otherProps } = props;

  const buttonClass = [
    'storybook-button',
    `storybook-button--large`,
    'storybook-button--primary'
  ].join(' ');

  const iterations = runPerformanceTest ? 10000000 : 0;

  // Test performance in effect hook
  React.useEffect(() => {
    if (runPerformanceEffect) {
      console.log("RUN EFFECT PERFORMANCE TEST");
      calculateFibonacciArray(iterations)
    }
  })

  if (runPerformanceAsync) {
    console.log("RUN ASYNC PERFORMANCE TEST");
    (async () => calculateFibonacciArray(iterations))();
  }
  else if (!runPerformanceEffect && !runPerformanceAsync) {
    console.log("RUN NORMAL PERFORMANCE TEST");
    calculateFibonacciArray(iterations)
  }

  return (
    <button
      type="button"
      className={buttonClass}
      {...otherProps}>
      {label}
    </button>
  );

};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  runPerformanceTest: PropTypes.bool.isRequired,
  runPerformanceAsync: PropTypes.bool.isRequired,
  runPerformanceEffect: PropTypes.bool.isRequired,
};

Button.defaultProps = {};
