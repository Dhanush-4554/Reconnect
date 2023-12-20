import React  from 'react';
import Box from '@mui/material/Box';
import ChatBox from './ChatsComponents/ChatBox';
import { LoggedState } from '../../context/auth';

const ChatsPage = () => {

  const isLoggedIn = LoggedState();
  const CurrentUser = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : 0;

  return (
    <div style={{ width: '100%', backgroundColor: 'white', minHeight: '100vh' }}>
      <Box
        display="flex"
        justifyContent="space-between"
        paddingTop={5}
        width="100%"
        height="90vh"
      >
        {CurrentUser && (
          <ChatBox />
        )}
      </Box>
    </div>
  );
};

export default ChatsPage;
