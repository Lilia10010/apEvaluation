import { useState, FormEvent, useEffect } from "react";
import { setEvaluation } from "../../services/sessions";
import { Button } from "../button";
import { Modal } from "../modal";
import { Heading } from "../tipografia";

import {
  Container,
  WrapperForm,
  Logo,
  Title,
  StartEvaluation,
  Form,
  Input,
  Textarea,
} from "./styles";

export const FormEvaluation = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const [formData, setFormData] = useState(() => ({
    name: "",
    comments: "",
  }));
  const [currentValueEvaluation, setCurrentValueEvaluation] = useState(1);

  const star = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
  ];
  const handleSelectedEvaluation = (e: any) => {
    setCurrentValueEvaluation(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsOpenModal(true);
    setMessageModal("Aguade estamos processando...");
    setEvaluation(formData, currentValueEvaluation)
      .then((response) => {
        setTimeout(() => {
          setMessageModal("Obrigada por avaliar nossos serviços :)");
          setFormData({ name: "", comments: "" });
        }, 2000);

        setTimeout(() => {
          setIsOpenModal(false);
        }, 4000);
      })
      .catch((error) => {
        setTimeout(() => {
          setMessageModal(
            "Ops.. não conseguimos procesar sua avaliação, tente novamente!"
          );
          setFormData({ name: "", comments: "" });
        }, 2000);
      });
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setIsOpenModal(false);
      }
    });
  }, []);

  return (
    <Container>
      <WrapperForm>
        <Logo>
          <img src="img/serasa-logo-full.png" alt="logo serasa" />
        </Logo>
        <Title>
          <Heading
            name="Conte o quanto você está satisfeito com os nossos serviços"
            typeHeading="heading-xs"
            fontWeight={400}
          />
        </Title>
        <StartEvaluation>
          <Heading name="Marque de 1 à 5 estrelas" typeHeading="heading-xs" />
          <div className="avaliacao">
            <ul>
              {star.map((item: any, index: number) => (
                <li
                  key={index}
                  id={item.label}
                  className={
                    currentValueEvaluation >= item.value
                      ? "selected"
                      : "noSelected"
                  }
                  value={item.value}
                  onMouseOver={(item) => {
                    handleSelectedEvaluation(item);
                  }}
                >
                  <label htmlFor={item.label}></label>
                </li>
              ))}
            </ul>
          </div>
        </StartEvaluation>

        <Form
          onSubmit={handleSubmit}
          role="dialog"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
        >
          <div className="inputBox">
            <label htmlFor="username">
              <Heading name="Nome:" typeHeading="body-m" fontWeight={400} />
              <span className="asterisk">*</span>
            </label>
            <Input
              type="text"
              name="username"
              id="username"
              value={formData?.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              autoComplete="off"
              required
            />
          </div>
          <div className="inputBox">
            <label htmlFor="textarea">
              <Heading
                name="Comentário: (Opcional)"
                typeHeading="body-m"
                fontWeight={400}
              />
            </label>
            <Textarea
              id="textarea"
              name="textarea"
              value={formData?.comments}
              onChange={(e) =>
                setFormData({ ...formData, comments: e.target.value })
              }
              rows={5}
            ></Textarea>
          </div>

          <Button label="Enviar Avaliação" type="submit" />
        </Form>
      </WrapperForm>
      {isOpenModal && (
        <Modal
          visible={isOpenModal}
          message={messageModal}
          onClick={() => setIsOpenModal(false)}
        />
      )}
    </Container>
  );
};
