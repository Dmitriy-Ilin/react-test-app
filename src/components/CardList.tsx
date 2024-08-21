import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import Card from './Card';
import { setCards, toggleFilter } from '../store/slice';
import { useGetCommentsQuery } from '../store/api';

const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetCommentsQuery(30);
  const cards = useAppSelector((state) => state.cardList.cards);
  const filtered = useAppSelector((state) => state.cardList.filtered);
  const likedCards = useAppSelector((state) => state.cardList.likedCards);

  React.useEffect(() => {
    if (data) {
      dispatch(setCards(data));
    }
  }, [data, dispatch]);

  const handleToggleFilter = () => {
    dispatch(toggleFilter());
  };

  const filteredCards = filtered
    ? cards.filter((card) => likedCards.includes(card.id))
    : cards;

  return (
    <div className='card__list'>
      <button className='card__list-btn' onClick={handleToggleFilter}>
        Toggle filter
      </button>
      {isLoading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <div className='card__list-items'>
          {filteredCards.length > 0 ? (
            <>
              {filteredCards.map((card) => (
                <Card key={card.id} {...card} />
              ))}
            </>
          ) : (
            <div className='empty'>Empty</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CardList;
