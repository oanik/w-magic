import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

export const SwitchBtn = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 573.06 566.73"><path fill="${encodeURIComponent(
        '#000',
        )}" d=""/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'light' ? '#1e202a' : '#1eaffb',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor:'#ffffff',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 573.06 566.73"><path fill="${encodeURIComponent(
        '#000',
        )}" d="M122.1,207.8c29.85,0,59.7-0.03,89.54,0.06c2.44,0.01,3.52-0.61,4.3-3.04c18.33-56.79,36.77-113.54,55.19-170.3 c2.23-6.89,6.93-11.06,14.13-11.72c6.85-0.63,12.12,2.37,15.54,8.39c0.65,1.15,1.08,2.45,1.49,3.72c18.38,56.58,36.77,113.17,55.06,169.78c0.82,2.53,1.93,3.18,4.46,3.18c59.52-0.07,119.03-0.06,178.55-0.05c7.8,0,13.56,3.59,16.21,10.05c2.86,6.98,0.72,14.55-5.69,19.25c-14.98,10.98-30.03,21.87-45.06,32.8c-33.73,24.54-67.45,49.09-101.24,73.56c-1.68,1.22-1.45,2.26-0.95,3.8c17.04,52.42,34.06,104.86,51.08,157.29c1.51,4.67,3.08,9.32,4.55,14c2.24,7.15,0,14.23-5.74,18.38c-5.8,4.2-13.09,4.17-19.23-0.27c-18.52-13.41-36.99-26.89-55.48-40.34c-30.05-21.86-60.11-43.69-90.12-65.61c-1.65-1.21-2.64-1.01-4.15,0.09c-48.23,35.13-96.54,70.14-144.69,105.38c-10.65,7.79-23.19,2.3-26.04-7.72c-1.02-3.57-0.71-7.04,0.43-10.52c9.69-29.77,19.35-59.55,29.01-89.33c8.81-27.15,17.61-54.31,26.49-81.43c0.61-1.87,0.24-2.78-1.32-3.92c-48.5-35.21-96.96-70.47-145.45-105.71c-5.65-4.11-8.33-9.51-7.11-16.45c1.12-6.36,4.98-10.59,11.14-12.48c2.01-0.61,4.22-0.77,6.34-0.78C62.94,207.79,92.52,207.8,122.1,207.8z M286.6,389.45c0.43-0.26,0.74-0.42,1.02-0.62c25.28-18.38,50.55-36.77,75.86-55.1c1.38-1,1.43-1.87,0.95-3.34c-9.56-29.34-19.09-58.68-28.55-88.05c-0.6-1.88-1.49-2.41-3.41-2.41c-30.56,0.06-61.11,0.06-91.67,0c-1.95,0-2.79,0.6-3.38,2.44c-9.44,29.28-18.94,58.55-28.48,87.8c-0.55,1.67-0.41,2.61,1.15,3.74c18.03,13.01,35.99,26.12,53.98,39.2C271.58,378.55,279.09,384,286.6,389.45z M368.92,240.11c7.87,24.25,15.65,48.23,23.52,72.5c33.31-24.23,66.21-48.16,99.66-72.5C450.62,240.11,410.01,240.11,368.92,240.11z M204.4,240.13c-41.09,0-81.74,0-123.13,0c33.5,24.37,66.44,48.32,99.62,72.46C188.77,288.31,196.54,264.36,204.4,240.13z M197.81,364.67c-12.64,38.97-25.19,77.62-37.73,116.27c0.14,0.11,0.29,0.22,0.43,0.34c32.85-23.89,65.7-47.79,98.81-71.87C238.71,394.42,218.44,379.67,197.81,364.67z M314.03,409.42c33.11,24.08,65.94,47.95,98.76,71.83c0.14-0.14,0.28-0.27,0.42-0.41c-12.54-38.63-25.07-77.26-37.69-116.14C354.93,379.66,334.6,394.46,314.03,409.42z M248.79,207.58c25.43,0,50.45,0,75.75,0c-12.59-38.78-25.08-77.26-37.57-115.75c-0.22,0.03-0.43,0.06-0.65,0.08C273.84,130.38,261.36,168.84,248.79,207.58z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#1eaffb' : '#1e202a',
    borderRadius: 20 / 2,
  },
}));
