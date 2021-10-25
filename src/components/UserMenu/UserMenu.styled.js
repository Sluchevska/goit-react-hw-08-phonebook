import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const NameStyle = styled.span`
  font-weight: 700;
  margin-right: 12px;
`;
export const Button = styled.button`
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 4px 5px 8px rgb(34, 49, 190);
  &:hover {
    transform: scale(1.1);
  }
`;
