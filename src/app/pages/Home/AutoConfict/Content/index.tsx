/**
 *
 * Content
 *
 */
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import React, { memo } from 'react';
import { makeStyles } from '@mui/styles';

interface Props {}

const useStyles: any = makeStyles({
  top: {
    backgroundColor: '#fff',
    width: '100%',
    height: '50px',
    margin: '3px 0px 20px 0px',
    borderRadius: '9px',
    alignItems: 'center',
    display: 'inherit',
  },
  main: {
    height: '300vh',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '9px',
  },
  comment: {
    height: '300vh',
    // width: '100%',
    backgroundColor: '#fff',
    borderRadius: '9px',
    margin: '20px 4px',
    border: '1px solid #B9B9B9',
  },
});

export const Content = memo((props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginRight: '10px',
      }}
    >
      <Box className={classes.top}>Facebook</Box>
      <Box className={classes.main}>
        <Box>️🏆️🏆YODY HACKATHON 2022️🏆️🏆
CUỘC THI LẬP TRÌNH ĐẦU TIÊN TẠI YODY VỚI TỔNG GIÁ TRỊ GIẢI THƯỞNG LÊN ĐẾN 100 TRIỆU ĐỒNG
✅Chủ đề Fashion & Retail
✅Không giới hạn hình thức tham dự, bạn có thể đăng kí theo cá nhân hoặc nhóm.
Tham gia ngay thử thách 48 giờ lập trình ứng dụng không ngừng nghỉ để có cơ hội nhận giải thưởng tiền mặt và AWS credit, cơ hội giao lưu cùng nhiều Chuyên gia Công nghệ dày dặn kinh nghiệm!!
👉Nếu bạn đam mê công nghệ và tìm kiếm cơ hội để phát triển bản thân, hãy đăng ký ngay: https://bit.ly/yody-hackathon-2022
⏰Thời hạn đăng ký: 18/05/2022 đến 23:59 ngày 01/06/2022
Sự kiện sẽ được update liên tục trên trang Facebook Tuyển dụng YODY
Đăng ký ngay thôi!!
______________________
YODY HACKATHON 2022
-Cuộc thi phát triển ứng dụng trong 48 giờ-
📌Thời gian diễn ra cuộc thi: ngày 03/06 - 05/06
📌Hình thức: Offline tại Hà Nội
📞Chi tiết xin liên hệ Ms Quyên 0888 092 258
✅Link đăng ký: https://bit.ly/yody-hackathon-2022
📩Email: tuyendung@yody.vn
#yody #YODYHACKATHON2022 #cuocthilaptrinh #yodyfashiontech</Box>
        <Divider />
        <Box>169 lượt thích 169 bình luận 169 chia sẻ</Box>
        <Box>
          <Box className={classes.comment}>
            <Box>Vừa giỏi vừa nhiệt tình chắc chắn là IT team...
Mkt hễ cứ cần xử lý data là chỉ trong "tích tắc"
Lần này, cuộc thi phát triển ứng dụng.. hứa hẹn sẽ mang đến những thử thách độc đáo, cùng format mới mẻ.
Háo hức quá ad ơi</Box>
            <Divider />
            <Box>169 lượt thích</Box>
            <Box sx={{ margin: '20px 4px' }}>
              <TextField
                sx={{ borderRadius: '14px' }}
                fullWidth
                multiline
                placeholder="Nội dung câu trả lời"
                value={value}
                onChange={handleChange}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
