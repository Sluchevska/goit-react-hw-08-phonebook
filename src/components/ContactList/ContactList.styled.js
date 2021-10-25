import styled from "@emotion/styled";
export const SpanHolder = styled.span`
font-weight: 500;
font-style: italic;
font-size: 17px;
align-items: center;
text-align: center;
`

export const Button = styled.button`

font-size: 14px;
font-weight:700;
align-items: center;
text-align: center;
padding: 5px 8px;
 border-radius: 5px;
 box-shadow: 4px 5px 8px rgb(34, 49, 190);
 &:hover{
 transform: scale(1.1);
 background-image: linear-gradient(
         rgba(14, 14, 206, 0.7),
      rgba(230, 230, 247, 0.7)
     
    );
    color: #212121;

}
  
`

export const ContainerItems = styled.ul`
// margin-top: 40px;
padding-right:40px;
padding-inline-start: 0;

`

export const ContactItems = styled.li`

list-style:none;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;

margin-bottom:5px;
`

export const Container = styled.div`
margin-top: 40px;
width:700px;
margin-left: auto;
  margin-right: auto;
  

`

