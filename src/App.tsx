import { Layout, Menu, Image, Typography, Space } from 'antd'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import logoIcom from './assets/hacker-news.svg'
import './style.css'

const { Header, Content } = Layout
const { Link, Text } = Typography

function App (): JSX.Element {
  return (
      <BrowserRouter>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" target="_blank">
            <Space>
              <Image src={logoIcom} width={40} preview={false}></Image>
              <Text>The Hacker News</Text>
            </Space>
          </Link>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} />
        </Header>
        <Content style={{ padding: '20px 50px' }}>
          <Routes>
            <Route path="/" element={<Main/>}/>
          </Routes>
        </Content>
      </BrowserRouter>
  )
}

export default App
