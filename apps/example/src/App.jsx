import {createForm} from "@formily/core";
import {FormProvider, FormConsumer, Field} from "@formily/react";
import {FormItem, Input, FormButtonGroup, Submit} from "@formily/antd";
import {Component} from '@mini-formily/antd/react'

const form = createForm();


const App = () => {
  return (
    <div>
    <h3> FormilyPage</h3>
    <Component />
    <FormProvider form={form}>
      <Field
        name="input"
        title="输入框"
        required
        initialValue="Hello world"
        decorator={[FormItem]}
        component={[Input]}
      />
      <FormConsumer>
        {() => <div>实时响应：{form.values.input}</div>}
      </FormConsumer>
      <FormButtonGroup>
        <Submit onSubmit={console.log}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  </div>
  )
}
export default App
