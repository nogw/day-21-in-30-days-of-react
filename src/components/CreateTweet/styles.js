import styled, { css } from 'styled-components';
import { IoImageOutline } from 'react-icons/io5'
import { MdDateRange } from 'react-icons/md'
import { BiPoll } from 'react-icons/bi'
import { HiOutlineEmojiHappy } from 'react-icons/hi'
import { AiOutlineGif } from 'react-icons/ai'

export const Container = styled.div`
  width: 600px;
  border: 1px solid #2f3336;
  padding: 12px;  

  @media screen and (min-width: 600) {
    min-width: 200px;
  }

  div {
    display: flex;
  }
`;

export const ImageProfile = styled.div`
  background: linear-gradient(20deg, #b5179e, #3a0ca3);
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

export const TwLength = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1da1f2;
  border: 1px solid #1da1f2;
  border-radius: 50%;
  height: 25px;  
  width: 25px;  
  padding-top: 2.5px;
  font-size: 10px;
  margin-right: 10px;
  margin-left: auto;
`;

export const Write = styled.div`
  display: flex;
  textarea {
    margin-left: auto;
    min-width: calc(600px - 90px);
    margin-bottom: 15px;
    margin-top: 10px;
    resize: none;
    color: #fff;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 15px;
    overflow: hidden;
    font-family: Helvetica;

    &::placeholder {
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  width: calc(600px - 90px);
`;

export const Button = styled.div`
  outline: none;
  border: none;
  color: #fff;
  width: 100px;
  text-align: center;
  padding: 10px 20px 8px 20px;
  border-radius: 20px;
  background-color: #1da1f2;
  transition: filter 300ms ease;
  cursor: pointer;

  &:hover {
    filter: brightness(1.15)
  }
`;

const iconEf = css`
  color: #1da1f2;
  font-size: 25px;
  margin-right: 25px;
  cursor: pointer;
  transition: filter 300ms ease;

  &:hover {
    filter: brightness(1.3)
  }
`;

export const IconImage  = styled(IoImageOutline)`
  ${iconEf}
`;

export const IconGif  = styled(AiOutlineGif)`
  ${iconEf}
`;

export const IconPoll  = styled(BiPoll)`
  ${iconEf}
`;

export const IconEmoji  = styled(HiOutlineEmojiHappy)`
  ${iconEf}
`;

export const IconTask  = styled(MdDateRange)`
  ${iconEf}
`;
