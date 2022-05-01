import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export class News extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    errors: null
  }

  getNews() {
    axios
      .get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee9c0694536e4a2ebf4b3b0561f7a3ea')
      .then(response =>
        response.data.articles.map(article => ({
          date: `${article.publishedAt}`,
          title: `${article.title}`,
          url: `${article.url}`
        }))
      )
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })

      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getNews();
  }


  render() {
    const { isLoading, articles } = this.state;
    return (
      <React.Fragment>
        <Container>
          <h2>Newsfeed</h2>
          <div>
            <Row justify-content>
              {!isLoading ? (
                articles.map(article => {
                  const { date, title, url } = article;
                  return (
                    <Col md={4}>
                      <Card className="m-3" style={{ width: '25rem' }}>
                        <Card.Body>
                          <Card.Title>  <a href={url} className="text-info"> {title}</a> </Card.Title>
                          <Card.Text> 
                            <p className="text-light"> {Date({date})}</p>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <p>Loading...</p>
              )}
            </Row>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default News

