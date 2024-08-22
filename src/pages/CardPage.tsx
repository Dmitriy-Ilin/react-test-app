import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCommentQuery } from '../store/api';

const CardPage: React.FC = () => {
  const { id } = useParams();
  const pageId = id ?? '';
  const { data, isLoading } = useGetCommentQuery(pageId);
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>Card not found</p>;
  }

  return (
    <div className='card__page'>
      <h2 className='card__page-title'>{data.name}</h2>
      <p className='card__page-email'>{data.email}</p>
      <p className='card__page-text'>{data.body}</p>
      <button className='card__page-btn' onClick={() => navigate(-1)}>
        Back to list
      </button>
    </div>
  );
};

export default CardPage;
