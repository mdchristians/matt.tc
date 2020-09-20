import React from 'react';
import { Icon } from '@chakra-ui/core';

const CircleIcon = (props) => (
  <Icon viewBox="0 0 200 200" {...props}>
    <svg
      width="219"
      height="82"
      viewBox="0 0 219 82"
      fill="none"
      {...props}
      ref={ref}
    />
  </Icon>
);

const Logo = React.forwardRef((props, ref) => (
  <Icon viewBox="0 0 219 82" ref={ref} {...props}>
    <path
      d="M144.7 17.9C140.1 31.2 134.5 44.4 130.7 52.4H122.1C119.1 45.3 112.1 31.1 107.3 17.9V80H98.8V2H107.5C112.7 15.6 121.8 35.2 126 42.8C130 35.2 138.8 15.6 143.8 2H153.2V80H144.7V17.9Z"
      fill="currentColor"
    />
    <path
      d="M209.077 62.1C207.977 68.1 199.877 73.5 191.877 73.5C180.277 73.5 173.677 62.3 173.677 42.3C173.677 21.7 180.777 8.4 191.877 8.4C198.577 8.4 205.177 13.4 207.077 19.9L216.477 17.2C213.677 8 202.577 0.399998 191.877 0.399998C175.677 0.399998 164.177 17.8 164.177 42.3C164.177 66 174.377 81.5 191.877 81.5C204.377 81.5 216.877 73.1 218.777 63.4L209.077 62.1Z"
      fill="currentColor"
    />
    <rect
      y="12"
      width="10"
      height="90"
      rx="5"
      transform="rotate(-90 0 12)"
      fill="#AB9DF2"
    />
    <rect
      y="80"
      width="10"
      height="43"
      rx="5"
      transform="rotate(-90 0 80)"
      fill="#7379A9"
    />
    <rect
      x="47"
      y="80"
      width="10"
      height="43"
      rx="5"
      transform="rotate(-90 47 80)"
      fill="#AB9DF2"
    />
    <rect
      y="46"
      width="10"
      height="75"
      rx="5"
      transform="rotate(-90 0 46)"
      fill="#EBEDFF"
    />
    <rect
      x="80"
      y="46"
      width="10"
      height="10"
      rx="5"
      transform="rotate(-90 80 46)"
      fill="#AB9DF2"
    />
    <rect
      y="63"
      width="10"
      height="17"
      rx="5"
      transform="rotate(-90 0 63)"
      fill="#AB9DF2"
    />
    <rect
      x="22"
      y="63"
      width="10"
      height="28"
      rx="5"
      transform="rotate(-90 22 63)"
      fill="#D6DAFF"
    />
    <rect
      x="55"
      y="63"
      width="10"
      height="35"
      rx="5"
      transform="rotate(-90 55 63)"
      fill="#7379A9"
    />
    <rect
      y="29"
      width="10"
      height="30"
      rx="5"
      transform="rotate(-90 0 29)"
      fill="#7379A9"
    />
    <rect
      x="35"
      y="29"
      width="10"
      height="55"
      rx="5"
      transform="rotate(-90 35 29)"
      fill="#D6DAFF"
    />
  </Icon>
));

export default Logo;
