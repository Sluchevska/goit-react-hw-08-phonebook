import styled from '@emotion/styled';

export const Container = styled.div`
 min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
     background-image: linear-gradient(
      rgba(247, 247, 248, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(../../img/goldPHB.jpg);
     max-width: 1600px;

  background-repeat: no-repeat;
  background-position: center;
`

export const Title = styled.h1`
 font-weight: 500;
    font-size: 48px;
    text-align: center;
`