import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Atomic Team. 2024
      </Typography>
      <Typography variant="caption">
        Crafted with love |{' '}
        <Link href="http://georgesimos.com/" target="_blank" rel="noopener">
          Aman Jain, Aditya Pratap Singh, Ayush Jhawar
        </Link>
      </Typography>
    </div>
  );
}
