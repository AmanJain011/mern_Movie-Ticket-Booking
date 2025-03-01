import React from 'react';
import { Divider, Typography, Link } from '@material-ui/core';
import useStyles from './styles';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider />
      <Typography className={classes.copyright} variant="body1">
        &copy; Atomic Team (Aman Jain, Aditya Pratap Singh, Ayush Jhawar). 2024
      </Typography>
      <Typography variant="caption">
        Major Project |{' '}
        <Link href="http://georgesimos.com/" target="_blank" rel="noopener">
          Roll Numbers: (21ESKIT013, 21ESKIT07)
        </Link>
      </Typography>
    </div>
  );
}
