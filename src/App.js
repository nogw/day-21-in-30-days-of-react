import React from 'react'
import GlobalStyle from './styles'
import Tweets from './components/Tweets'
import CreateTweet from './components/CreateTweet'
import Store from './Store'

function App() {

  return (
    <Store>
      <CreateTweet/>
      <Tweets />
      <GlobalStyle />
    </Store>
  );
}

export default App;
