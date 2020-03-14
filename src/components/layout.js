/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';

const Layout = ({ sx, children }) =>
  <div
    sx={{
      variant: 'styles.root',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      maxWidth: 'wide',
      width: ['90%'],
      mx: 'auto',
      ...sx
    }}
  >
    <main sx={{ 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>{ children }</main>
  </div>

export default Layout;