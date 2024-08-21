import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { likeCard, removeCard, unlikeCard } from '../store/slice';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  id: number;
  name: string;
  email: string;
  body: string;
}

const Card: React.FC<CardProps> = ({ id, name, email, body }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const liked = useAppSelector((state) =>
    state.cardList.likedCards.includes(id),
  );

  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (liked) {
      dispatch(unlikeCard(id));
    } else {
      dispatch(likeCard(id));
    }
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeCard(id));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      return;
    }

    navigate(`/card/${id}`);
  };

  return (
    <div className='card' onClick={handleClick}>
      <h2 className='card__title'>{name}</h2>
      <p className='card__email'>{email}</p>
      <p className='card__text'>{body}</p>
      <div className='card__btns'>
        <button
          className={liked ? 'card__btn liked' : 'card__btn'}
          onClick={handleLike}
        >
          {liked ? 'Unlike' : 'Like'}
        </button>
        <button className='card__btn' onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
