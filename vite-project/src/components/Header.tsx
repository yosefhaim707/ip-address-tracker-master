import { Typography } from '@mui/material';
import { FC } from 'react';

const Header: FC = (): JSX.Element => {
  return (
    <Typography variant="h1" component="h1" sx={{ textAlign: 'center', color: '#fff'}}>
      IP Address Tracker
    </Typography>
  );
};

export default Header;
