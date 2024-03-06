import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : 'linear-gradient(#02294F, #090E10)',
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Về chúng tôi&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              (NTG)
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            Với xu hướng hội nhập - toàn cầu hóa <br/>
            Điều không thể thiếu trong xu hướng tất yếu này là sự <strong>"Giao thoa văn hóa"</strong>.<br/>
            Với sứ mệnh truyền tải văn hóa, câu chuyện lịch sử, truyền thuyết dân gian
            đến cộng đồng, giới trẻ, sau đó là quảng bá văn hóa "Việt Nam" ra thế giới và xa hơn là kết nối văn hóa toàn cầu.<br/>
            Dự án <strong>"OpenThinking!"</strong> ra đời.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <TextField
              id="outlined-basic"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              inputProps={{
                autocomplete: 'off',
                ariaLabel: 'Enter your email address',
              }}
            />
            <Button variant="contained" color="primary">
              Start now
            </Button>
          </Stack>
          <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
            Nhấn vào &quot;<strong>Start now</strong>&quot; để đồng hành cùng chúng tôi&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions(chưa có bỏ gì vô đây hết nên đừng nhấp!)
            </Link>
            .
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}