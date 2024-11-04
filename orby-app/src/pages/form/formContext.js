import React, { createContext, useState, useContext, useEffect } from "react";

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [form, setForm] = useState([]);

  const updateForm = (newAnswer) => {
    setForm((prevForm) => {
      // Atualiza ou adiciona uma resposta existente no form
      const existingAnswerIndex = prevForm.findIndex(
        (item) => item.questionId === newAnswer.questionId
      );

      if (existingAnswerIndex > -1) {
        // Substitui a resposta existente
        const updatedForm = [...prevForm];
        updatedForm[existingAnswerIndex] = newAnswer;
        return updatedForm;
      } else {
        // Adiciona uma nova resposta
        return [...prevForm, newAnswer];
      }
    });
  };

  const clearForm = () => {
    setForm([]);
  };

  return (
    <FormContext.Provider value={{ form, updateForm, clearForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
