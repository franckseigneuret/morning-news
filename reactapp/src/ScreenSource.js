import React, { useState, useEffect } from 'react';
import './App.css';
import { List, Avatar } from 'antd';
import { Link } from "react-router-dom";
import Nav from './Nav'

function ScreenSource() {

  const mappingLanguage = {
    fr: {
      language: 'fr',
      country: 'fr',
    },
    en: {
      language: 'en',
      country: 'gb',
    },
  }
  const [sourceList, setSourceList] = useState([])
  const [language, setLanguage] = useState(mappingLanguage.fr)

  useEffect(() => {
    const APIResultsLoading = async () => {
      let url = `https://newsapi.org/v2/sources?language=${language.language}&country=${language.country}&apiKey=074d1c4547884ebeb0659a460b5d1f37`
      const data = await fetch(url)
      const body = await data.json()
      // console.log(body.sources)
      setSourceList(body.sources)
    }
    APIResultsLoading()

  }, [language])

  return (
    <div>
      <Nav />

      <div className="Banner">
        <img src="https://i.ebayimg.com/images/g/7gQAAOSwv7pb5YIO/s-l300.jpg" onClick={() => setLanguage(mappingLanguage.fr)} />
        <img src="https://images-na.ssl-images-amazon.com/images/I/419RsYi16FL._AC_.jpg" onClick={() => setLanguage(mappingLanguage.en)} />
      </div>

      <div className="HomeThemes">
        <List
          itemLayout="horizontal"
          dataSource={sourceList}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<Link to={`/screenarticlesbysource/${item.id}`}><h3>{item.name}</h3></Link>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ScreenSource;
