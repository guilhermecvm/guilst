import React, { useState } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { getGist } from '../services/github'
import { useGlobalState, useDispatch } from '../Provider'
import { FILES_UPDATE, FILE_SELECT } from '../actions'

const { Sider } = Layout
const SubMenu = Menu.SubMenu

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const gh = useGlobalState('github')
  const gists = useGlobalState('gists')
  const dispatch = useDispatch()

  const onClick = async (gistId, file) => {
    const files = await getGist(gh, gistId)
    dispatch({ type: FILE_SELECT, payload: { file: files[file.filename] } })
    dispatch({ type: FILES_UPDATE, payload: { files } })
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {gists.map(gist => (
          <SubMenu
            key={gist.id}
            title={
              <span>
                <Icon type="snippets" />
                <span>{gist.name}</span>
              </span>
            }
          >
            {gist.files.map(file => (
              <Menu.Item
                key={file.filename}
                onClick={() => onClick(gist.id, file)}
              >
                {file.filename}
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    </Sider>
  )
}

export default Sidebar
