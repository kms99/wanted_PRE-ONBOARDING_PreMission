import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../common/input/Input';
import { InputValue, Inputs } from '../../types/types';
import Button from '../common/button/Button';
import { FormIds } from '../../types/enums';
import useTodo from '../../hooks/useTodo';
import { inputValidationCheck } from '../../utils';
import TextArea from '../common/textarea/TextArea';

export default function Form() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const { handleAddTodo } = useTodo();

  const handleReset = () => {
    reset({
      [FormIds.TITLE_VALUE]: '',
      [FormIds.CONTENTS_VALUE]: '',
    });
  };

  const handleAdd = ({ title, contents }: InputValue) => {
    if (!inputValidationCheck({ title, contents })) {
      alert('모든 값을 입력하세요');
      return;
    }

    handleAddTodo({ title, contents });
    handleReset();
  };

  const handleTodoSubmit: SubmitHandler<Inputs> = (value) => {
    handleAdd({ title: value.titleValue, contents: value.contentsValue });
  };

  const FORM_BUTTONS = [
    {
      text: 'ADD',
      isSubmit: true,
    },
    {
      text: 'RESET',
      handler: handleReset,
      isSubmit: false,
    },
  ];

  const BUTTONS = FORM_BUTTONS.map((button) => (
    <Button
      key={`button_${button.text}`}
      text={button.text}
      handler={button.handler}
      isSubmit={button.isSubmit}
    />
  ));

  return (
    <form onSubmit={handleSubmit(handleTodoSubmit)}>
      <div>
        <Input
          formId={FormIds.TITLE_VALUE}
          formRegister={register}
          placeholder="title"
        />
        <TextArea
          formId={FormIds.CONTENTS_VALUE}
          formRegister={register}
          placeholder="contents"
        />
      </div>
      <div>{BUTTONS}</div>
    </form>
  );
}
