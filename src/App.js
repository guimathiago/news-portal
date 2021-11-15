import React, { useState, useEffect } from 'react';
import './styles/MainStyle.scss'
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const [news, setNews] = useState([]);

  const loadNews = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4ffec30be7204e41a765ddb6685d842a`).then(r => r.json());
    setNews(res.articles)
  }

  useEffect(() => {
    loadNews();
  }, []);

  return (

    <section>
      <Container className="pt-5 pb-5">
        <Row>
          {news.map((item) => (
            <Col lg={4}>
              <div className="card-content shape">
                <div className="news-image">
                  <img src={item.urlToImage} alt={item.title} className="img-fluid" />
                </div>
                <div className="heading">
                  <h2 className="heading-small">{item.title}</h2>
                </div>
                <div className="subtitle">
                  <h4 className="subtitle-small">{item.author}</h4>
                </div>
                <div className="paragraph">
                  <p className="paragraph-small">
                    {item.description}
                  </p>
                </div>
                <a target="_blank" href={item.url}>
                  <div className="button-primary">Read more</div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

  );
}

export default App;
