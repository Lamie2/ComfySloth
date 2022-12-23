import { useContext } from 'react';
import { MainContext } from '../../../../../store/contex';
import './ListItem.scss';
import { Link } from 'react-router-dom';

interface IListItemProps {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  desc: string;
}

export const ListItem = (props: IListItemProps) => {
  const { id, imgUrl, name, price, desc } = props;
  const {basket , setBasket}=  useContext(MainContext);
  return (
    <div className="list-view" >
      <article>
        <img src={imgUrl} alt={name} />
        <div>
          <h4>{name}</h4>
          <h5 className="price">${price}</h5>
          <p>{desc}</p>
          <button>
            <Link className="btn" to={`/products/${id}`}>
              DETAILS
            </Link>
          </button>
        </div>
      </article>
    </div>
  );
};
