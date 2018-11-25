import React, { useCallback } from 'react'
import Editor from 'draft-js-plugins-editor'
import createMarkdownPlugin from 'draft-js-markdown-plugin'
import createPrismPlugin from '../plugins/prism-plugin'
import { useDispatch, useGlobalState } from '../Provider'
import { EDITOR_CHANGE } from '../actions'
import './DraftJS.css'

const plugins = [
  createPrismPlugin(),
  createMarkdownPlugin({ renderLanguageSelect: () => null }),
]
const blockStyleFn = contentBlock => {
  if (contentBlock.getType() === 'code-block') {
    return 'block-code'
  }
}

const MyEditor = () => {
  const editorState = useGlobalState('editorState')
  const dispatch = useDispatch()
  const onChange = useCallback(editorState =>
    dispatch({ type: EDITOR_CHANGE, payload: { editorState } })
  )

  return (
    <Editor
      editorState={editorState}
      plugins={plugins}
      onChange={onChange}
      blockStyleFn={blockStyleFn}
    />
  )
}

export default MyEditor
