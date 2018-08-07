import styled from 'styled-components'

export const HeaderTag = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #FFF;

  a {
    color: #ff3333;
    text-decoration: none;
    transition: all 0.35s ease-out;
  }
  h1 {
    font-weight: 800;
    transition: all 0.35s ease-out;
  }

  h2 {
    color : white;
    font-weight: 790;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul a {
    font-weight: 600;
  }

  a h1:hover, ul a:hover {
    color: #33cc00;
  }

  .navbar li {
    margin-bottom: 10px;
  }

  @media(min-width: 768px) {
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .navbar li {
    margin: 0 10px;
  }
}

@media(min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;

  .navbar li {
    margin: 0 0 0 20px;
  }
}
`;
