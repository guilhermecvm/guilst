import { EditorState, convertFromRaw } from 'draft-js'
import { markdownToDraft } from 'markdown-draft-js'
import {
  GISTS_SET,
  FILE_SELECT,
  FILES_UPDATE,
  EDITOR_CHANGE,
  GITHUB_SET,
} from './actions'

export const initialState = {
  gists: [],
  selected: null,
  editorState: EditorState.createEmpty(),
  github: JSON.parse(localStorage.getItem('github')),
}

export const reducer = (state, action) => {
  switch (action.type) {
    case GISTS_SET:
      return {
        ...state,
        gists: action.payload.gists,
      }
    case FILE_SELECT:
      return {
        ...state,
        selected: action.payload.file,
        editorState: EditorState.createWithContent(
          convertFromRaw(markdownToDraft(action.payload.file.content))
        ),
      }
    case FILES_UPDATE:
      return {
        ...state,
        gists: state.gists.map(gist => ({
          ...gist,
          files: gist.files.map(file => ({
            ...file,
            content: action.payload.files[file.filename],
          })),
        })),
      }
    case EDITOR_CHANGE:
      return {
        ...state,
        editorState: action.payload.editorState,
      }

    case GITHUB_SET:
      return {
        ...state,
        github: action.payload,
      }
    default:
      return state
  }
}
