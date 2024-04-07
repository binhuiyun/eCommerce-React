import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {signUpUser, authUser} from '../../redux/userSlice';
import {useDispatch, useSelector} from 'react-redux';


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const AuthForm = (
  {method, path, title, buttonText, msg, linkText}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {message} = useSelector((state) => state.error);
    // message only shows when submit twice??? error handling must register in server index.js

    const onFinish = (values) => {
      if (method === "login") {
        dispatch(authUser(values));
        navigate('/');

      }
      else{
        dispatch(signUpUser(values));  
        navigate('/login');
          
      }  
    };
  

return (
  <div className="flex justify-center items-center">
  <Form className="bg-white shadow-lg rounded px-10 pt-6 pb-8 w-1/3 xs:w-full md:w-1/3"   
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    labelCol={{ span: 24 }} // Make the label span the full width of the row
  >

    <Form.Item className="flex text-4xl font-bold justify-center">
      {title}
    </Form.Item>
    <Form.Item 
      label="Email"
      name="email"
      rules={[
        {
          type: 'email',
          message: 'Please input your email!',
        },
      ]}
      
    >
      <Input placeholder='abc@example.com' />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item>
      <button className="flex w-full font-bold text-sm bg-chuwa-blue hover:bg-gray-300 text-white justify-center items-center py-2 rounded focus:outline-none focus:shadow-outline"
            type="submit">
        {buttonText}
      </button>
      </Form.Item>
        <div className="flex items-center justify-between">
        <Form.Item >
          <span className="text-gray-500">
            {msg}
            <div
              className="inline-block align-baseline text-sm underline text-chuwa-blue hover:text-blue-800"          
            >
            <Link to = {path} >{linkText}</Link>
            </div>
          </span>
          </Form.Item>
          <Form.Item>
          {method == "login" && (
            <div
              className="inline-block align-baseline underline text-sm text-chuwa-blue hover:text-blue-800 float-end"
             
            >
             <Link to= "/forgot-password"> Forgot Password?</Link>
            </div>
          )}
     
        </Form.Item>
        </div>
        </Form>


</div>
);
}
export default AuthForm;