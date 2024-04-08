import React, { useMemo } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import ShoppingCart from '../../pages/ShoppingCart';

export default function MainLayout() {
  const isMobile = useMediaQuery('(max-width: 450px)');
  const headerStyle = useMemo(
    () => ({
      width: '100%',
      color: 'grey',
      backgroundColor: 'white', 
      height: '72px', 
   
    }),
    []
  );

  const contentStyle = useMemo(
    () => ({
      width: isMobile ? '100%' : '440px',
    }),
    [isMobile]
  );

  return (
      <Layout>
        <Layout.Header style={headerStyle}>
          <Header />
          <ShoppingCart />
        </Layout.Header>
        <Layout.Content style={contentStyle}>
          <Outlet />
        </Layout.Content>
     
      </Layout>

  );
}