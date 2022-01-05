import React from 'react';
import { useForm } from "react-hook-form";
const Contact = () => {
    // const { register, handleSubmit, errors } = useForm();
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {
       console.log(data)
       alert('Message sent successfully')
       document.getElementById("reset").reset()
    }
  
    return (
        <div className='w-50 ms-auto me-auto'>
                <h1>Contact Us</h1>
                <form id='reset' onSubmit={handleSubmit(onSubmit)} className="p-4">
                            <input name="name" className="form-control" placeholder="Your Name" {...register("name",{ required: true })} />
                            {errors.name && <span><p className='text-danger'>This field is required</p></span>}

                            <input name="email" className="form-control mt-3" placeholder="Your email" {...register("email",{ required: true })} />
                            {errors.email && <span><p className='text-danger'>This field is required</p></span>}

                            <textarea rows="3" name="description" className="form-control mt-3" placeholder="Description" {...register("description",{ required: true })} />
                            {errors.description && <span><p className='text-danger'>This field is required</p></span>}
                            <div className="d-flex flex-row bd-highlight mb-3">

                            <button type="Submit" className="btn btn-danger mt-2">Submit</button>

                            </div>
                        </form>
            </div>
     
    );
};

export default Contact