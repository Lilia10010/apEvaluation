import styled from "styled-components";

export const Container = styled.div`
  .display {
    font-size: 2.5rem;
    letter-spacing: -1.2;
  }
  .heading-l {
    font-size: 2rem;
    letter-spacing: -1;
  }
  .heading-m {
    font-size: 1.5rem;
    letter-spacing: -0.8;
  }
  .heading-s {
    font-size: 1.25rem;
    letter-spacing: -0.6;
  }
  .heading-xs {
    font-size: 1.125rem;
  }
  .subheading {
    font-size: 1rem;
  }
  .body-m {
    font-size: 1rem;
  }
  @media only screen and (min-width: 640px) {
    .display {
      font-size: 3rem;
    }
    .heading-l {
      font-size: 2.5rem;
    }
    .heading-m {
      font-size: 2rem;
    }
    .heading-s {
      font-size: 1.5rem;
    }
    .heading-xs {
      font-size: 1.5rem;
    }
  }
`;
