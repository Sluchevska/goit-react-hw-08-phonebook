import styled from '@emotion/styled';

export const Forma = styled.form`
  width: 320px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Container = styled.div`
  align-items: center;
  justify-content: center;
  display: inline-block;
  box-shadow: 4px 5px 8px rgb(34, 49, 190);
  padding: 20px;
  margin-top: 20px;
  background-image: linear-gradient(
    rgba(86, 86, 218, 0.7),
    rgba(230, 230, 247, 0.7)
  );
  border-radius: 5px;
`;
export const Title = styled.h1`
  margin-bottom: 30px;
  margin-top: 30px;
  font-weight: 700;
  font-size: 31px;
`;
export const NoticeText = styled.p`
  font-size: 13px;
  opacity: 0.7;
`;

export const Button = styled.button`
  padding: 10px 20px;

  &:hover {
    background-color: #100de0;
    transform: scale(1.1);
  }
`;
