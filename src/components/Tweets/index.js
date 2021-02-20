import React, { useContext, useEffect } from 'react';
import { Container } from './styles';
import Tweet from '../Tweet'
import { Context } from '../../Store'

function Tweets() {
  const [tweetText, setTweetText] = useContext(Context)
  
  return (
    <Container>
    { tweetText.map((tw, index) => {
      return (
        <Tweet key={index} id={tw.id} text={tw.content} hour={tw.date}/>
      )
    })}
    </Container>
  );
}

export default Tweets;