import React from 'react';
import { useForm } from 'react-hook-form';

const Addpost = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://blogserver-1d02.onrender.com/addpost", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    };
    return (
        <div>
            <h1>Add your blog in our site</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='title' className='form-control my-2' placeholder='Your Blog Title' {...register("title", { required: true })} />
                {errors.title && <span><p className='text-danger'>This field is required</p></span>}
                <textarea name='description' rows="3" className='form-control my-2' placeholder='Your Blog Description' {...register("description", { required: true })}></textarea>
                {errors.description && <span><p className='text-danger'>This field is required</p></span>}
                <input name='image' className='form-control my-2' placeholder="Your Blog Image" type="text" {...register("image", { required: true })} />
                {errors.image && <span><p className='text-danger'>This field is required</p></span>}
                <input {...register("date", { required: true })} className='form-control my-2' type="date" name="date" id="" />
                {errors.date && <span><p className='text-danger'>This field is required</p></span>}
                <input className='btn btn-dark' type="submit" value="Submit Blog" />
            </form>
        </div>
    );
};

export default Addpost;