import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
   
  };
  return (
    <div>
      <h1 className='mb-3'>Add New admin</h1>
      <form id="form-reset" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-outline-dark px-2 mt-2"
          type="submit"
          value="Make Admin"
        />
      </form>
    </div>
  );

};

export default MakeAdmin;