import React, { useState } from 'react';

import { ReactComponent as ImgLogin } from '@renderer/resources/images/img_login.svg';
import { ReactComponent as LogoCRMCall } from '@renderer/resources/images/logo_crm_call.svg';

import { Button, Container, Stack, Typography, useTheme } from '@mui/material';
import LabeledCheckbox from '@renderer/crmcall/components/Checkbox/LabeledCheckbox';
import HanTextField from '@renderer/crmcall/components/TextField/HanTextField';
import useAuth from '@renderer/base/app/auth/AuthProvider';

const LoginPage = () => {
  const theme = useTheme();
  const auth = useAuth();

  const [domain, setDomain] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [extendNumber, setExtendNumber] = useState('');
  const [isAutoLogin, setIsAutoLogin] = useState(false);

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

  const handleChangeAutoLogin = (checked: boolean) => {
    setIsAutoLogin(checked);
  };

  const handleLogin = () => {
    auth.login();
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
          margin: 0,
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
          <LogoCRMCall style={{ width: 102, height: 102, marginBottom: 10 }} />
          <Typography variant="h4" component="h2">
            Welcome to
            <b> CRM Call</b>
          </Typography>
          <HanTextField
            id="domain"
            name="domain"
            label="Domain"
            required
            margin="normal"
            value={domain}
            onChange={(event) => {
              handleChangeDomain(event.target.value);
            }}
          />
          <HanTextField
            id="userid"
            label={'User ID'}
            name="userid"
            required
            margin="normal"
            value={userID}
            onChange={(event) => {
              handleChangeUserID(event.target.value);
            }}
          />
          <HanTextField
            id="password"
            name="password"
            label={'Password'}
            required
            margin="normal"
            value={password}
            onChange={(event) => {
              handleChangePassword(event.target.value);
            }}
            obcureText
          />
          <HanTextField
            id="extendnumber"
            label={'Extend Number'}
            name="extendnumber"
            required
            margin="normal"
            value={extendNumber}
            onChange={(event) => {
              handleChangeExtendNumber(event.target.value);
            }}
          />
          <div
            style={{
              width: '100%',
            }}
          >
            <LabeledCheckbox
              value={isAutoLogin}
              label="Auto Login"
              onChange={handleChangeAutoLogin}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            fullWidth
            sx={{
              height: '50px',
              marginTop: 3,
            }}
          >
            LOGIN
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default LoginPage;
