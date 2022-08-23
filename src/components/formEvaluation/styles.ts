import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(-45deg, #b12384, #004691, #004691, #b12384);
`;
export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: var(--border-radius-container-primary);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.2);
`;
export const Logo = styled.div`
  width: 200px;
  img {
    max-width: 200px;
  }
`;
export const Title = styled.div`
  text-align: center;
  padding: 35px 0;
`;
export const StartEvaluation = styled.div`
  text-align: center;
  .avaliacao {
    padding: 15px 0;
  }
  .avaliacao ul {
    display: flex;
    justify-content: center;
  }
  li {
    width: 30px;
    height: 30px;
    list-style: none;
    background-size: cover;
    cursor: pointer;
    margin: 0 5px;
  }
  li.selected {
    background-image: url("/img/staryellow.svg");
    background-repeat: no-repeat;
  }
  li.noSelected {
    background-image: url("/img/star.svg");
    background-repeat: no-repeat;
  }
`;

export const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .inputBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;

    label {
      display: flex;
    }
  }
  .asterisk {
    color: red;
  }
`;

export const IconStar = styled.img`
  width: 50px;
  height: 50px;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export const Input = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 15px;
  border-radius: var(--border-radius-container-primary);
  font-size: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

export const Textarea = styled.textarea`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  padding: 10px 15px;
  border-radius: var(--border-radius-container-primary);
  font-size: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  width: 100%;
`;
