import React from 'react'
import { Image, Space } from 'antd'
import Link from 'antd/es/typography/Link'
import Text from 'antd/es/typography/Text'
import { Header as AntdHeader } from 'antd/es/layout/layout'
import logoIcom from '../../assets/hacker-news.svg'
import './style.css'

function Header (): JSX.Element {
  return (
    <AntdHeader style={{ display: 'flex', alignItems: 'center' }}>
    <Link href="/" target="_blank">
      <Space className='header-logo'>
        <Image src={logoIcom} width={40} preview={false}></Image>
        <Text className='header-logo-title'>The Hacker News</Text>
      </Space>
    </Link>
</AntdHeader >
  )
}

export default Header
