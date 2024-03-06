import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
const items = [
  {
    icon: <GitHubIcon />,
    title: 'Github profile:',
    description:
      'Vui lòng click vào icon để tham quan trang github cá nhân của tôi, thông tin tổng quan về các dự án mà tôi đang thực hiện (trừ private).',
      url: 'https://github.com/hadeszhanggg'
  },
  {
    icon: <TelegramIcon />,
    title: 'Contact me by telegram:',
    description:
      'Click vào icon để vào nhóm chát telegram.',
      url: 'https://t.me/+iPJ__OQ-SzM1NjA1'
  },
  {
    icon: <FacebookIcon/>,
    title: 'Facebook profile:',
    description:
      'Click vào icon để đến trang facebook của tôi.',
      url:'https://www.facebook.com/profile.php?id=100091911450657&mibextid=ZbWKwL'
  },
  {
    icon: <EmailIcon/>,
    title: 'Contact me by email',
    description:
      'truongdangminhtan333@gmail.com, hadeszhangg@gmail.com',
  },

];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Fouder (Hades Zhang) 
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
           Software Engineer
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
  <Stack
  direction="column"
  color="inherit"
  component={Card}
  spacing={1}
  useFlexGap
  sx={{
    p: 3,
    height: '100%',
    border: '1px solid',
    borderColor: 'grey.800',
    background: 'transparent',
    backgroundColor: 'grey.900',
  }}
>
  <a href={item.url} target="_blank" rel="noopener noreferrer">
    <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
  </a>
  <div>
    <Typography fontWeight="medium" gutterBottom>
      {item.title}
    </Typography>
    <Typography variant="body2" sx={{ color: 'grey.400' }}>
      {item.description}
    </Typography>
  </div>
</Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}