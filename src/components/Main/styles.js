import styled from 'styled-components';

export const Container = styled.div`
   width: 470px;
   height: auto;
   background: #fff;
   border-radius: 5px;
   margin-left: 50px;

   li{
     list-style: none;

    &:nth-child(2n - 2) {
      background: #d8d4d4;
    }
    }

`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 85px;
  position: relative;

  &:hover {
    background: #ba3638;
    visibility: visible;

    h1 {
      color: #fff;
    }
  }
  &:after{
    border: 4px solid #fff;
  }

  &:hover .result {
    position: absolute;
    right: -221px;
    top: 10px;
    background: #fff;
    visibility: visible;
    width: 200px;
    height: 65px;
    display: flex;
    border-radius: 4px;
}
 .result {
    right: -160px;
    position: absolute;
    visibility: hidden;

 &:after {
  content: "";
    position: absolute;
    top: 7px;
    transform: rotate(90deg);
    left: -9%;
    margin-left: 0px;
    border-width: 9px;
    border-style: solid;
    border-color: #ba3638 transparent transparent transparent;
 }
 }
`;

export const CardMain = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const CardImg = styled.div`
   position: relative;
 img {
  clip-path: circle(31px at 40px 31px);
   width: 80px;
 }

 &:after {
  content: "";
    width: 58px;
    height: 58px;
    border-radius: 50%;
    border: 4px solid #ba3638;
    position: absolute;
    display: block;
    bottom: 0px;
    left: 8px;
}
&:before {
  content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #7f7f7f;
    position: absolute;
    display: block;
    bottom: -5px;
    right: -1px;
    z-index: 1;
    background: #fff;
}
`;

export const CardText = styled.div`
   margin-left: 20px;

   h1 {
    color: #bb383a;
    font-size: 23px;
}
`;

export const Link = styled.a`
   background: #000;
`;

export const LinkCard = styled.a`

`;

export const Good = styled.div`
   width: 45%;
   border-right: 1px solid #666;

h3 {
    background: #ba3638;
    color: #fff;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
}
`;

export const Result = styled.div`
   width: 60%;

h3 {
    background: #ba3638;
    color: #fff;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
}
`;
