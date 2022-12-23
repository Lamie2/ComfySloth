import './FilterPanel.scss';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { baseUrl } from '../../../../constant';
import { companyProducts, loadProducts, searchProducts } from '../../ProductPageSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const FilterPanel = (props: any) => {
  const dispatch = useDispatch();

  const items = [
    {
      value: 'all',
      label: 'all',
    },
    {
      value: 'marcos',
      label: 'marcos',
    },
    {
      value: 'liddy',
      label: 'liddy',
    },
    {
      value: 'ikea',
      label: 'ikea',
    },
    {
      value: 'caressa',
      label: 'caressa',
    },
  ];

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then((response) => response.json())
      .then((data) => dispatch(loadProducts({ products: data })));
  }, []);

  const onChangeHandler = (event: any) => {
    const searchText = event.target.value;
    setInputValue(searchText);
    dispatch(searchProducts({ searchText }));
  };

  const onChangeDrop = (value: string) => {
    dispatch(companyProducts({ companySelect: value }));
  };

  return (
    <>
      <form className="filter-panel" action="">
        <div className="form-control">
          <input
            type="search"
            id="form1"
            className="search-input"
            placeholder="Search"
            onChange={onChangeHandler}
            value={inputValue}
          />
        </div>
        <div className=" form-control category">
          <h5>Category</h5>
          <ul>
            <li>All</li>
            <li>Office</li>
            <li>Living Room</li>
            <li>Kitchen</li>
            <li>Bedroom</li>
            <li>Dining</li>
            <li>Kids</li>
          </ul>
        </div>
        <div className="form-control dropdown">
          <h5>Company</h5>
          <Dropdown options={items} onChange={onChangeDrop} />
        </div>
        <div className="form-control btn">
          <button type="button" className="clear-btn">
            
           <Link to="/product">Clear Filters</Link>
          </button>
        </div>
      </form>
    </>
  );
};
