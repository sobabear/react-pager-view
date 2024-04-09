import styled, { css, keyframes } from 'styled-components';

interface PageProps {
  active: boolean;
}

interface DotProps {
  active: boolean;
}

export const Container = styled.div`
  position: relative;
  margin: auto;
`;

export const pageFade = keyframes`
  from {opacity: .4} 
  to {opacity: 1}
`;

export const Page = styled.div<PageProps>`
  -webkit-animation-name: ${pageFade};
  -webkit-animation-duration: 1.5s;
  animation-name: ${pageFade};
  animation-duration: 1.5s;
  display: none;

  ${props => 
    props.active &&
    css`
      display: block;
    `}
`;

export const Img = styled.img`
  width: 100%;
  vertical-align: middle;
`;

export const PrevNext = styled.a`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;

  ${props =>
    props.type === 'next' ?
    css`
      right: 0;
      border-radius: 3px 0 0 3px;
    ` :
    css`
      left: 0;
    `}

  &:hover {
    background-color: rgba(0,0,0,0.8);
  }
`;

export const Text = styled.div`
  color: #f2f2f2;
  font-size: 15px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
`;

export const DotContainer = styled.div`
  text-align: center;
`;

export const Dot = styled.div<DotProps>`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  ${props => 
    props.active &&
    css`
       background-color: #717171;
    `}

  &:hover {
    background-color: #717171;
  }
`;