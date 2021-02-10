import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Card, Icon } from 'antd';
import Nav from './Nav'

const { Meta } = Card;

function ScreenMyArticles(props) {

  let articlesWishlist = []

  props.wishList.map((item) => {
    articlesWishlist.push({
      title: item.title,
      description: item.description,
      img: item.urlToImage,
      content: item.content,
    })
  })

  const articlesContainer = articlesWishlist.map((article, i) => {
    return (
      <div key={i} style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          style={{
            width: 300,
            margin: '15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          cover={
            <img
              alt="example"
              src={article.img}
            />
          }

          actions={[
            <Icon type="read" key="ellipsis2" />,
            <Icon type="delete" key="ellipsis" />
          ]}
        >
          <Meta
            title={article.title}
            description={article.description}
          />
        </Card>
      </div>
    )
  })

  return (
    <div>

      <Nav />

      <div className="Banner" />
      <div className="Card">

        {articlesContainer}

      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { wishList: state.wishList }
}

export default connect(
  mapStateToProps,
  null
)(ScreenMyArticles);
