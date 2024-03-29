import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useStore } from '../stores/storeContext';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { userStore } = useStore();
  const router = useRouter();

  return (
    <React.Fragment>
      <Box>
        <Tooltip title="Account info">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <Link href="/profile" passHref>
          <MenuItem>
            <Avatar sx={{ width: 32, height: 32 }}>P</Avatar> Profile
          </MenuItem>
        </Link>

        <Link href="/mylots" passHref>
          <MenuItem>
            <Avatar sx={{ width: 32, height: 32 }}>L</Avatar> My lots
          </MenuItem>
        </Link>

        <Link href="/bets" passHref>
          <MenuItem>
            <Avatar sx={{ width: 32, height: 32 }}>B</Avatar> Bets
          </MenuItem>
        </Link>

        <Link href="/money" passHref>
          <MenuItem>
            <Avatar sx={{ width: 32, height: 32 }}>B</Avatar> Balance
          </MenuItem>
        </Link>
        <Divider />

        <MenuItem onClick={() => {
          userStore.logout();
          router.reload();
        }}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default AccountMenu;