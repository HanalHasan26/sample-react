
import React, { createContext, useContext } from 'react'

const TestContext = createContext()

const TestProvider = ({children}) => {

    const test = "vishak"

    const data = [
      {asjbja:"dsaj"},
      {asjbja:"dsaj"},
      {asjbja:"dsaj"},
    ]

  return (
<TestContext.Provider value={{test,data}}>
{children}
</TestContext.Provider>
  )
}

export const TestState = ()=>{
    return useContext(TestContext)
}

export default TestProvider
