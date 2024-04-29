import React from 'react'
import { useForm } from 'react-hook-form';

function Test() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Submitted form data
  };
  return (
    <div>
      <input className="outline-none flex w-full border borde-[var(--grey)] rounded-[8px] p-[20px] text-[var(--grey)] " {...register('email', { defaultValue: 'email@company.com', required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} type="email" id="email" name="email" />

      <br />
      <button id="subscribe" className="font-[var(--bold)] flex w-full items-center justify-center rounded-[8px] p-[20px] text-[var(--white)]  bg-[var(--darkSlateGrey)]" type="submit">
        Subscribe to monthly newsletter
      </button>

    </div>
  )
}

export default Test
