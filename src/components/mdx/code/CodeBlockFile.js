import React from 'react';
import { Tab } from '@chakra-ui/core';

const CodeBlockFile = ({ tab }) => {
  return (
    <Tab
      key={tab}
      py="3"
      px="5"
      color="dark.subText"
      bg="transparent"
      outline="unset"
      boxShadow="unset"
      border="none"
      fontSize="sm"
      cursor="pointer"
      borderBottomWidth="1px"
      borderBottomColor="transparent"
      borderBottomStyle="solid"
      _selected={{
        outline: 'unset',
        boxShadow: 'unset',
        color: '#ebcb8b',
        borderBottomWidth: '1px',
        borderBottomColor: '#ebcb8b',
        borderBottomStyle: 'solid',
      }}
    >
      {tab}
    </Tab>
  );
};

export default CodeBlockFile;
