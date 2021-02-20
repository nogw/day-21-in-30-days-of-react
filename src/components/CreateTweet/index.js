import React, { useRef, useState, useContext } from 'react';
import { Container, ImageProfile, Write, Icons, Button,IconImage,IconGif,IconPoll,IconEmoji,IconTask, TwLength } from './styles';
import { Context } from '../../Store'
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'

function CreateTweet( onClick ) {
  const [tweetLength, setTweetLength] = useState(255);
  const [tweetValue, setTweetValue] = useState(255);
  const [tweetText, setTweetText] = useContext(Context)
  
  const TextArea = useRef();
  
  const autoResize = e => {
    TextArea.current.style.height = `auto`;
    TextArea.current.style.height = `${TextArea.current.scrollHeight}px`;
    setTweetLength(255 - e.target.value.length);
    setTweetValue(e.target.value)
  }

  const makeTweet = async () => {
    var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    
    if (tweetValue.length > 0) {
      const id = nanoid(6)
      const now = `${mS[dayjs().month()]} ${dayjs().date()}, ${dayjs().year()} ${dayjs().hour()}:${dayjs().minute()} ${dayjs().hour() < 12 ? 'am' : 'pm'}`
      await setTweetText(tweetText => [...tweetText, {content: tweetValue, date: now, id: id}])
      TextArea.current.value = ""
      setTweetLength(255);
      setTweetValue('')
    }
  }

  return (
      <Container>
        <div>
          <ImageProfile />
          <Write>
            <textarea 
              ref={TextArea}
              placeholder="O que está acontecendo?" 
              spellCheck="false"
              maxLength="255"
              onChange={e => autoResize(e)} 
            />
          </Write>
        </div>
        <Icons>
          <IconImage />
          <IconGif />
          <IconPoll />
          <IconEmoji />
          <IconTask /> 
          <TwLength>
            {tweetLength}
          </TwLength>
          <Button onClick={() => makeTweet()}>Tweetar</Button>
        </Icons>
      </Container>
  );
}

export default CreateTweet;