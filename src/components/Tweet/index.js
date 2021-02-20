import React from 'react';
import { Container, ImageProfile, User, Content, Icons, Crud, IconsTwitter, TimePosted, CrudEdit, CrudDelete, TwComment, TwRetweet, TwHeart, Texts, UserName, Dots } from './styles';

function Tweet(props) {

  const ConsId = id => {
    console.log(id)
  }

  return (
    <Container name={props.id} onClick={(e) => ConsId(e)}>
      <User>
        <ImageProfile />
        <Texts>
          <UserName>
            <h1>
              RandomUser
            </h1>
            <p>
              @randuser001
            </p>
            <Dots/>
          </UserName>
          <Content>
            <h2>
              {props.text}
            </h2>
          </Content>
        </Texts>
      </User>
      <Icons>
        <IconsTwitter>
          <TwComment />
          <TwRetweet />
          <TwHeart />
        </IconsTwitter>
        <TimePosted>
          <p>
            {props.hour}
          </p>
        </TimePosted>
      </Icons>
    </Container>
  );
}

export default Tweet;