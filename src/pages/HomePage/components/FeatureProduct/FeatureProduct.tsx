import './FeatureProduct.scss';
import picture1 from '../../../../assets/images/FI2zZCTg80m6VZVRu_Dj9qUqATGeEQO4YF-Nz1NUhPI.jpeg';
import picture2 from '../../../../assets/images/9O1ncqNGmXIoW1ZDjqj908Ibnjatw68YvWVI58xoxVs.jpeg';
import picture3 from '../../../../assets/images/ALHzQ6-n6K5j8Uh36bVq6JDcHCsxKjsFuwJtp66FiRc.jpeg';
import { Link, useNavigate } from 'react-router-dom';


export const FeatureProduct = () => {
  return (
    <section className="FeatureProduct">
      <div className="container">
        <div className="title">
          <h2>Featured Products</h2>

          <div className="underline"></div>
        </div>

        <div className="row featured">
          <div className="col-4">
            <div className="item">
            <div className="hover">
              <div className="img">
              <img
                src={picture1}
                alt="entertainment center"
              />
              </div>
             
              <a className="link" href="/">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </a>
            </div>

            <div className="footer">
                <h5>
                entertainment center
                </h5>
                <p>
                $599.99
                </p>
            </div>
            </div>
          </div>
          
          <div className="col-4">
<div className="item">


            <div className="hover">
              <div className="img">
              <img
                src={picture2}
                alt="entertainment center"
              />
              </div>
             
              <a className="link" href="/">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </a>
            </div>

            <div className="footer">
                <h5>
                entertainment center
                </h5>
                <p>
                $599.99
                </p>
            </div>
          </div>
          </div>
          <div className="col-4">
            <div className="item">
            <div className="hover">
              <div className="img">
              <img
                src={picture3}
                alt="entertainment center"
              />
              </div>
             
              <a className="link" href="/">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </a>
            </div>

            <div className="footer">
                <h5>
                entertainment center
                </h5>
                <p>
                $599.99
                </p>
            </div>
          </div>
          </div>
        </div>

       

        <Link className='btn' to="/products">all products</Link>


      </div>
    </section>
  );
};
