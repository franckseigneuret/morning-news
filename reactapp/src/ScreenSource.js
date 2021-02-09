import React, { useState, useEffect } from 'react';
import './App.css';
import { List, Avatar } from 'antd';
import { Link } from "react-router-dom";
import Nav from './Nav'

function ScreenSource() {

  const [sourceList, setSourceList] = useState([])

  useEffect(() => {
    const APIResultsLoading = async () => {

      const data = await fetch('https://newsapi.org/v2/sources?language=fr&country=fr&apiKey=074d1c4547884ebeb0659a460b5d1f37')
      const body = await data.json()
      console.log(body.sources)
      setSourceList(body.sources)
    }
    APIResultsLoading()

  }, [])

  return (
    <div>
      <Nav />

      <div className="Banner"></div>
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
