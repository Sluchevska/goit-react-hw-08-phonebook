import styled from '@emotion/styled';
export const LabelInput = styled.label`
  font-weight: 700;
  font-style: italic;
  font-size: 17px;
  margin-right: 5px;
`;

export const Input = styled.input`
  margin-right: 10px;
  padding: 5px;

  border-radius: 5px;
  box-shadow: 4px 5px 8px rgb(34, 49, 190);
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 4px 5px 8px rgb(34, 49, 190);
  &:hover {
    transform: scale(1.1);
    background-image: linear-gradient(
      rgba(14, 14, 206, 0.7),
      rgba(230, 230, 247, 0.7)
    );
    color: #212121;
  }
`;
export const Container = styled.div`
  width: 700px;
  text-align: center;

  display: inline-block;
`;
