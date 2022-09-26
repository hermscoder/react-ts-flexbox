import './App.css';
import { Commands } from './components/Commands/Commands';
import { Canvas } from './components/Canvas/Canvas';
import { Layout, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import 'antd/dist/antd.css'; 
import data from "./data"
import React, { useState } from 'react'

function App() {
  const [level, setLevel] = useState(1)
  const levelInfo = data.storedLevels.find(storedlevel => storedlevel.id === level)
  const [properties, setProperties] = useState(data.properties)

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={new Array(data.storedLevels.length).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `level ${index + 1}`,
            onClick: () => setLevel(index + 1)
          }))}
        />
      </Header>
      {
        levelInfo != null && 
        <Content className="content" style={{ padding: '0 50px', marginTop: 64 }}>
            <Commands level={levelInfo.id} text={levelInfo.text} availableOptions={levelInfo.options} properties={properties} setLevel={setLevel} setProperties={setProperties} />
            <Canvas text={levelInfo.text} properties={properties} />
        </Content>
      }
      
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
