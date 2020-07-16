import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-flexbox-grid';
const Newsletter = () => {
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    if (submit) {
      alert('Successful');
    }
  }, [submit]);
  const handleFormSubmit = event => {
    setSubmit(true);
  };
  return (
    <div className='custom-container'>
      <div className='newsletter-box'>
        <div>
          <Row>
            <Col lg={12}>
              <h1>Newsletter</h1>
              <h3>Select all newsletters that you'd like to recieve</h3>
            </Col>
          </Row>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className='segment'>
            <Row className='custom-row'>
              <Col lg={3}>
                <div className='img-div'>
                  <img src='yooo' alt='empty' />
                </div>
              </Col>
              <Col lg={7}>
                <div className='texts'>
                  <h1>Reverse The Online Gambling Plan</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit accusamus cupiditate nostrum delectus laboriosam eos
                    voluptatibus eligendi dolorum? In quis eaque magnam iusto
                    odit amet assumenda voluptatem minus beatae aspernatur!
                    molestiae exercitationem similique eveniet sunt consectetur,
                    itaque nulla possimus sapiente repellat dolorum facilis
                    aperiam quibusdam nihil, et enim rem adipisci?
                  </p>
                </div>
              </Col>
              <Col lg={2}>
                <input type='checkbox' value='first' name='first' />
              </Col>
            </Row>
          </div>
          <div className='segment'>
            <Row className='custom-row'>
              <Col lg={3}>
                <div className='img-div'>
                  <img src='yooo' alt='empty' />
                </div>
              </Col>
              <Col lg={7}>
                <div className='texts'>
                  <h1>Reverse The Online Gambling Plan</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit accusamus cupiditate nostrum delectus laboriosam eos
                    voluptatibus eligendi dolorum? In quis eaque magnam iusto
                    odit amet assumenda voluptatem minus beatae aspernatur!
                    molestiae exercitationem similique eveniet sunt consectetur,
                    itaque nulla possimus sapiente repellat dolorum facilis
                    aperiam quibusdam nihil, et enim rem adipisci?
                  </p>
                </div>
              </Col>
              <Col lg={2}>
                <input type='checkbox' value='first' name='first' />
              </Col>
            </Row>
          </div>
          <div className='segment'>
            <Row className='custom-row'>
              <Col lg={3}>
                <div className='img-div'>
                  <img src='yooo' alt='empty' />
                </div>
              </Col>
              <Col lg={7}>
                <div className='texts'>
                  <h1>Reverse The Online Gambling Plan</h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit accusamus cupiditate nostrum delectus laboriosam eos
                    voluptatibus eligendi dolorum? In quis eaque magnam iusto
                    odit amet assumenda voluptatem minus beatae aspernatur!
                    molestiae exercitationem similique eveniet sunt consectetur,
                    itaque nulla possimus sapiente repellat dolorum facilis
                    aperiam quibusdam nihil, et enim rem adipisci?
                  </p>
                </div>
              </Col>
              <Col lg={2}>
                <input type='checkbox' value='first' name='first' />
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs={12}>
              <Row center='xs'>
                <Col xs={6}>
                  <Row center='xs'>
                    <input
                      className='email'
                      placeholder='Enter email'
                      type='email'
                    ></input>
                  </Row>
                  <Row center='xs'>
                    <button type='submit' className='subscribe'>
                      SUBSCRIBE
                    </button>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
