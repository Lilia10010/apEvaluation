import { Heading } from "../tipografia";
import { ButtonSubmit } from "./styles";

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
}

export const Button = ({ label, type }: ButtonProps) => {
  return (
    <ButtonSubmit type={type}>
      <Heading name={label} typeHeading="subheading" fontWeight={400} />
    </ButtonSubmit>
  );
};
