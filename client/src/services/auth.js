import apiCall from './api';

export const signUp = async data => {
  console.log("1111111111",data)
  return await apiCall({
    url: '/api/auth/signup',
    method: 'POST',
    data
  });

};

export const signIn = async data => {
  return await apiCall({
    url: '/api/auth/signin',
    method: 'POST',
    data
  });
};