import React from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch, useGlobalState } from '../Provider'
import { GITHUB_SET } from '../actions'

const FormItem = Form.Item

const MyHeader = ({ className, form }) => {
  const dispatch = useDispatch()
  const github = useGlobalState('github')

  const handleSubmit = e => {
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        dispatch({ type: GITHUB_SET, payload: values })
        console.log('Received values of form: ', values)
      }
    })
  }

  const { getFieldDecorator } = form

  return (
    <Form layout="inline" onSubmit={handleSubmit} className={className}>
      <FormItem>
        {getFieldDecorator('url', {
          initialValue: github && github.url,
        })(<Input placeholder="api.github.com" />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator('user', {
          initialValue: github && github.user,
        })(<Input placeholder="user" />)}
      </FormItem>
      <FormItem>
        {getFieldDecorator('token', {
          initialValue: github && github.token,
        })(<Input placeholder="token" type="password" autoComplete="off" />)}
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          Fetch Gists
        </Button>
      </FormItem>
    </Form>
  )
}

export default Form.create()(MyHeader)
