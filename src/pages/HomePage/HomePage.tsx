import './HomePage.scss';
import { Furniture } from './components/Furniture/Furniture';
import { JoinUs } from './components/JoinUs/JoinUs';
import { RatingStars } from '../../components/RatingStars/RatingStars';

export const HomePage = () => {
  return (
    <>
      <div>
        <RatingStars rating={0} />
      </div>
      <div><RatingStars rating={1} /></div>
      <div><RatingStars rating={4} /></div>
      <div><RatingStars rating={2.5} /></div>
      <div><RatingStars rating={5} /></div>
      <Furniture />
      <JoinUs />
    </>
  );
};
