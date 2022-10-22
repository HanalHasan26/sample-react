import React from 'react'
import { TestState } from '../Context/TestProvider';

const Sample = () => {

    let users = JSON.parse(localStorage.getItem("key123"));

const {testData} = TestState()
console.log(testData);

  return (
    <>
        <h1>{testData}</h1>
    </>
  )
}

export default Sample
