import React from 'react';

const MyPostDetail = ({ post }) => {
    const { _id, title, image, published, status } = post;
    const handleDeletePost = _id => {
        fetch(`https://blogserver-1d02.onrender.com/post/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Post deleted successfully')
                    window.location.reload();
                }
            })
    }
    return (
        <tr>
            <td>
                <img src={image} style={{ width: '50px', height: '50px' }} alt="" />
            </td>
            <td>{title}</td>
            <td>{published}</td>
            <td className={status === '1' ? 'text-danger' : 'text-success'}>{status == "1" ? "Pending" : "Approved"}</td>
            <td>
                <span>
                    <button className='btn btn-outline-danger' onClick={() => handleDeletePost(_id)}>
                        <i className="fas fa-times-circle"></i>
                    </button>
                </span>
            </td>
        </tr>
    );
};

export default MyPostDetail;