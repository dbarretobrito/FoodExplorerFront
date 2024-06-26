import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 110.6rem;
  height: 100vh;

  margin: auto;
  padding: 14.2rem 4rem;

  justify-content: space-between;
  align-items: center;

  animation: fadeIn 0.8s;

  @keyframes fade {
    0% {
      opacity: 0.1;
      transform: scale(0.9);
    }
    100% {
      opacity: 0.6;
      transform: scale(1);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  max-width: 47.6rem;
  width: 100%;
  height: 95vh;

  padding: 6.4rem;
  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BLUE_200};
  -webkit-box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.1);
  box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.1);

  > h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 6.8rem;
    text-align: center;

    margin-bottom: 3.2rem;
  }

  > a {
    margin-top: 3.2rem;

    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > .inputs {
    margin-bottom: 3.2rem;
  }

  > .inputs p {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 4rem;

  h1 {
    font-size: clamp(3rem, 3rem + 1.5vw, 4.248rem);
    white-space: nowrap;
  }

  .logo {
    display: flex;
    gap: 1.9rem;
  }

  svg {
    height: 5rem;
    width: 5rem;
  }
`;
