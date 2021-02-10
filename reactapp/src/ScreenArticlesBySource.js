import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Card, Icon, Modal } from 'antd';
import Nav from './Nav'

const { Meta } = Card;

function ScreenArticlesBySource(props) {
  const [articleList, setArticleList] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const sourceId = document.location.pathname.split('/').reverse()[0]
  const sourceId = props.match.params.id // cf App.js : path="/screenarticlesbysource/:id"
  const urlNewsAPI = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=074d1c4547884ebeb0659a460b5d1f37`


  useEffect(() => {
    const APIResultsLoading = async () => {

      const data = await fetch(urlNewsAPI)
      const body = await data.json()

      setArticleList(body.articles)
    }
    APIResultsLoading()

  }, [])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const articleListComponent = articleList.map((item, i) => (
    <div style={{ display: 'flex', justifyContent: 'center' }} key={i}>
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
            alt={item.title}
            src={item.urlToImage}
          />
        }
        actions={[
          <>
            <Icon type="read" key="ellipsis2" onClick={showModal} />
            <Modal title={item.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>{item.content}</p>
            </Modal>
          </>,
          <Icon type="like" key="ellipsis" onClick={() => { props.addToWishList(item) }} />
        ]}
      >

        <Meta
          title={item.title}
          description={item.content}
        />

      </Card>
    </div>
  ))

  return (
    <div>
      <Nav />

      <div className="Banner" />

      <div className="Card">
        {articleListComponent}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToWishList: (article) => {
      dispatch({ type: 'addArticle', articleLike: article })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ScreenArticlesBySource);
