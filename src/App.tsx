import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main'
import Story from './pages/story/Story'
import { Content } from 'antd/es/layout/layout'
import Header from './components/header/Header'

function App (): JSX.Element {
  return (
      <BrowserRouter>
        <Header/>
        <Content style={{ padding: '20px 50px' }}>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/story/:id" element={<Story/>}/>
          </Routes>
        </Content>
      </BrowserRouter>
  )
}

export default App
