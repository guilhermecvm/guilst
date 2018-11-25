import React, { useEffect } from 'react'
import { Layout } from 'antd'
import Sidebar from './Siderbar'
import { useDispatch, useGlobalState } from '../Provider'
import { getGists } from '../services/github'
import { GISTS_SET } from '../actions'
import MyEditor from './MyEditor'
import MyHeader from './MyHeader'
import styles from './App.module.css'

const { Header, Content, Footer } = Layout

const loadGists = dispatch => async gh => {
  const gists = await getGists(gh)
  dispatch({ type: GISTS_SET, payload: { gists } })
}

const App = () => {
  const gh = useGlobalState('github')
  const dispatch = useDispatch()

  useEffect(
    () => {
      if (gh) {
        loadGists(dispatch)(gh)
      }
    },
    [gh]
  )

  return (
    <Layout className={styles.layout}>
      <Sidebar />
      <Layout>
        <Header className={styles.header}>
          <MyHeader className={styles.headerContent} />
        </Header>
        <Content className={styles.content}>
          <MyEditor />
        </Content>
        <Footer className={styles.footer}>
          Guilst ❤️Created by{' '}
          <a href="http://guilhermecvm.com" target="_blank">
            @guilhermecvm
          </a>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
