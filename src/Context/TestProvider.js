
import React, { createContext, useContext, useState } from 'react'

const TestContext = createContext()

const TestProvider = ({children}) => {

  const [testData, setTestData] =useState('')

  return (
<TestContext.Provider value={{testData,setTestData}}>
{children}
</TestContext.Provider>
  )
}

export const TestState = ()=>{
    return useContext(TestContext)
}

export default TestProvider
