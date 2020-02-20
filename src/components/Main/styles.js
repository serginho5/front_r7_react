import styled from 'styled-components';

export const Container = styled.div`
   width: 470px;
   height: auto;
   background: #fff;
   border-radius: 5px;
   margin-left: 50px;

   li{
     list-style: none;
   }

`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 85px;

  &:hover  {
    background: #ba3638;

    h1 {
      color: #fff;
    }
  }
  &:after{
    border: 4px solid #fff;
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
