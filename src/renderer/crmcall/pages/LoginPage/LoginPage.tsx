import React, { useState } from 'react';

import { ReactComponent as ImgLogin } from '@renderer/resources/images/img_login.svg';
import { ReactComponent as LogoCRMCall } from '@renderer/resources/images/logo_crm_call.svg';

import {
  Container,
  Stack,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';

const LoginPage = () => {
  const theme = useTheme();

  const [domain, setDomain] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [extendNumber, setExtendNumber] = useState('');
  const [autologin, setAutoLogin] = useState(false);


  const handleChangeDomain = (nDomain: string) => {
    setDomain(nDomain);
  };

  const handleChangeUserID = (nUserId: string) => {
    setUserID(nUserId);
  };

  const handleChangePassword = (nPassword: string) => {
    setPassword(nPassword);
  };

  const handleChangeExtendNumber = (nExtendNumber: string) => {
    setExtendNumber(nExtendNumber);
  };

  return (
    <Stack
      direction={'row'}
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: 5,
          justifyContent: 'center',
          height: '100%',
          backgroundColor:
            theme.palette.mode == 'light' ? '#EFF1F9' : '#333333',
        }}
      >
        <ImgLogin
          style={{
            width: 320,
          }}
        />
      </Container>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}
        >
          <LogoCRMCall style={{ width: 102, marginBottom: 10 }} />
          <Typography variant="h4" component="h2">
            Welcome to
            <b> CRM Call</b>
          </Typography>
          <TextField
            fullWidth
            size="small"
            margin="normal"
            required
            id="domain"
            name="domain"
            label="Domain"
            value={domain}
            onChange={(event) => {
              handleChangeDomain(event.target.value);
            }}
            placeholder=""
            sx={{
              '& .MuiOutlinedInput-root': {
                p: '0px',
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            size="small"
            margin="normal"
            required
            id="userid"
            label={'User ID'}
            name="userid"
            value={userID}
            onChange={(event) => {
              handleChangeUserID(event.target.value);
            }}
            placeholder=""
            sx={{
              '& .MuiOutlinedInput-root': {
                p: '0px',
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            size="small"
            margin="normal"
            required
            id="password"
            name="password"
            label={'Password'}
            value={password}
            onChange={(event) => {
              handleChangePassword(event.target.value);
            }}
            placeholder=""
            sx={{
              '& .MuiOutlinedInput-root': {
                p: '0px',
                height: '40px',
              },
            }}
          />
          <TextField
            fullWidth
            size="small"
            margin="normal"
            required
            id="extendnumber"
            label={'Extend Number'}
            name="extendnumber"
            value={extendNumber}
            onChange={(event) => {
              handleChangeExtendNumber(event.target.value);
            }}
            placeholder=""
            sx={{
              '& .MuiOutlinedInput-root': {
                p: '0px',
                height: '40px',
              },
            }}
          />
        </Stack>
      </Container>
    </Stack>
  );
};

export default LoginPage;
