import React, { useState } from 'react'

const initialState = [{
  content: 'write your first tweet',
  date: 'Feb 18, 2021 20:00 pm',
  id: '921d-s3'
}]

export const Context = React.createContext();

const Store = ({ children }) => {
  const [tweetText, setTweetText] = useState(initialState);
  
  return (
    <Context.Provider value={[tweetText, setTweetText]}>
      {children}
    </Context.Provider>
  )
}

export default Store