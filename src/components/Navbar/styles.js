import styled from "styled-components";

export const Container = styled.div`
  color: #484848;
  border-bottom: 1px solid #4682B4;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  background-color: #0000CD;
  padding: 1.2rem 0;
  img {
    width: 6rem;
    margin: 0 1rem;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  li {
    a {
      text-decoration: none;
      color: #4682B4;
      font-weight: 700;
      padding: 0 1rem;
      font-size: 0.9em;
      display: flex;
      align-items: center;
      span {
        padding: 0 0.2rem;
      }
      &:hover {
        color: #4682B4;
        cursor: pointer;
        transition: all 200ms ease;
      }
    }
  }
`;