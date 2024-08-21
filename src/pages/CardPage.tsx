import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCommentQuery } from '../store/api';

const CardPage: React.FC = () => {
  const { id } = useParams();
  const pageId = id ?? '';
  const { data, isLoading } = useGetCommentQuery(pageId);

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
      <button className='card__page-btn' onClick={() => window.history.back()}>
        Back to list
      </button>
    </div>
  );
};

export default CardPage;
