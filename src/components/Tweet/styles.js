import styled, { css } from 'styled-components';
import { AiOutlineHeart, AiOutlineRetweet, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { RiChat1Line } from 'react-icons/ri'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

export const Container = styled.div`
  width: 600px;
  border: 1px solid #2f3336;
  padding: 12px;

  @media screen and (min-width: 600) {
    min-width: 200px;
  }
`;

export const ImageProfile = styled.div`
  background: linear-gradient(20deg, #b5179e, #3a0ca3);
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  border-radius: 50%;
`;

export const User = styled.div`
  display: flex;
`;

export const Texts = styled.div`
  margin-left: 15px;

  h1 {
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    margin-right: 5px;
    color: #fff;
  }

  p {
    font-size: 15px;
    line-height: 20px;
    color: #6a726e;
  }
`;

export const Content = styled.div`
  margin-top: 5px;

  h2 {
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    color: #fff;
  }  
`;

export const Icons = styled.div`
  margin-top: 10px;
  display: flex;
  width: calc(600px - 90px);
  margin-left: auto;
`;

export const Crud = styled.div`
  flex: 1;
`;

export const IconsTwitter = styled.div`
  flex: 1;
`;
export const UserName = styled.div`
  display: flex;
  align-items: center;
  width: calc(600px - 90px);
`;

const IconEffect = css`
  color: #6a726e;
  font-size: 20px;
  margin-right: 5px;
  cursor: pointer;
  transition: all 250ms ease;
`;

export const TimePosted = styled.div`
  p {
    margin-right: 5px;
    color: #6a726e;
  }
`;

export const TwComment = styled(RiChat1Line)`
  ${IconEffect}

  &:hover {
    color: #1da1f2;
  }
`;

export const TwRetweet = styled(AiOutlineRetweet)`
  ${IconEffect}

  &:hover {
    color: #06e077;
  }
`;

export const TwHeart = styled(AiOutlineHeart)`
  ${IconEffect}

  &:hover {
    color: #de2b37;
  }
`;

export const CrudEdit = styled(AiOutlineEdit)`
  ${IconEffect}

  &:hover {
    color: #1da1f2;
  }
`;

export const CrudDelete = styled(AiOutlineDelete)`
  ${IconEffect}

  &:hover {
    color: #de2b37;
  }
`;

export const Dots = styled(BiDotsHorizontalRounded)`
  ${IconEffect}
  margin-left: auto;
`;