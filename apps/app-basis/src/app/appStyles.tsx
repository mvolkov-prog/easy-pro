import styled from '@emotion/styled';
import { themeProps } from '@easydev-pro/ui-elements/theme';

export const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ComponentsWrapper = styled('div')<{ theme?: themeProps }>`
  background-color: ${(props) => props.theme.backgroundColour};
  width: 100%;
  height: 100vh;
  font-family: ${(props) => props.theme.defaultFontFamily};

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  table {
      border-collapse: collapse;
      border-spacing: 0;
  }
`;

export const GlitchWrapper = styled('div')<{ theme?: themeProps }>`
  display: flex;
  --f-size: 15;
  --f-unit: 1vmin;
  --f: calc(var(--f-size) * var(--f-unit));
  --bg: ${(props) => props.theme.backgroundColour};
  font-size: var(--f);
  background-color: var(--bg);
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Title = styled('h1')`
  font-size: 32px !important;
  line-height: 40px !important;
`;

export const GlitchText = styled('div')`
  font-size: 40px;
  //font-family: 'Raleway', sans-serif;
  //text-decoration: none;
  //text-transform: uppercase;
  //position: absolute;
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, -50%);
  //margin: 0;
  //color: #fff;
  //letter-spacing: 5px;
  //
  //&:before, &:after {
  //  display: block;
  //  content: attr(data-glitch);
  //  text-transform: uppercase;
  //  position: absolute;
  //  top: 0;
  //  left: 0;
  //  height: 100%;
  //  width: 100%;
  //  opacity: .8;
  //}
  //
  //&:after {
  //  color: #f0f;
  //  z-index: -2;
  //}
  //
  //&:before {
  //  color: #0ff;
  //  z-index: -1;
  //}
  //
  //&:hover {
  //  &:before {
  //    animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both 5
  //  }
  //
  //  &:after {
  //    animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both 5
  //  }
  //}
  //
  //@media only screen and (max-width: 400px) {
  //  .glitch {
  //    font-size: 3em;
  //  }
  //}
  //
  //@keyframes glitch {
  //  0% {
  //    transform: translate(0)
  //  }
  //  20% {
  //    transform: translate(-5px, 5px)
  //  }
  //  40% {
  //    transform: translate(-5px, -5px)
  //  }
  //  60% {
  //    transform: translate(5px, 5px)
  //  }
  //  80% {
  //    transform: translate(5px, -5px)
  //  }
  //  to {
  //    transform: translate(0)
  //  }
  //}
  font-weight: bold;
  text-transform: uppercase;
  overflow: hidden;

  flex: 1;
  line-height: 0.75;
  margin: auto;
  color: #1af0dc;
  text-align: center;
  transform: scaleX(var(--scale, 1));
  animation: glitch-p 11s infinite alternate;

  &::before,
  &::after {
    --top: 0; // offset from top [0 - 10]
    --left: 0; // offset from left [0.001 - 1]
    --v-height: 30%; // visible part

    --n-tenth: calc(var(--f-size) * 0.1 * var(--top));
    --t-cut: calc(var(--n-tenth) / var(--f-size) * 100%);
    --b-cut: calc(var(--t-cut) + var(--v-height));

    content: attr(data-text);
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;

    transform: translateX(calc(var(--left) * 100%));

    // this helps to get rid of pixelization
    filter: drop-shadow(0 0 transparent);

    text-shadow: calc(var(--left) * -3em) 0 0.02em lime,
      calc(var(--left) * -6em) 0 0.02em #ff00e1;

    background-color: var(--bg);
    clip-path: polygon(
      0% var(--t-cut),
      100% var(--t-cut),
      100% var(--b-cut),
      0% var(--b-cut)
    );
  }

  &::before {
    animation: glitch-b 1.7s infinite alternate-reverse;
  }
  &::after {
    animation: glitch-a 3.1s infinite alternate;
  }

  @keyframes glitch-p {
    17% {
      --scale: 0.87;
    }
    31% {
      --scale: 1.1;
    }
    37% {
      --scale: 1.3;
    }
    47% {
      --scale: 0.91;
    }
    87% {
      --scale: 1;
    }
  }

  @keyframes glitch-a {
    10%,
    30%,
    50%,
    70%,
    90% {
      --top: 0;
      --left: 0;
    }
    0% {
      --v-height: 15%;
    }
    20% {
      --left: 0.005;
    }
    40% {
      --left: 0.01;
      --v-height: 20%;
      --top: 3;
    }
    60% {
      --left: 0.03;
      --v-height: 25%;
      --top: 6;
    }
    80% {
      --left: 0.07;
      --v-height: 5%;
      --top: 8;
    }
    100% {
      --left: 0.083;
      --v-height: 30%;
      --top: 1;
    }
  }

  @keyframes glitch-b {
    10%,
    30%,
    50%,
    70%,
    90% {
      --top: 0;
      --left: 0;
    }
    0% {
      --v-height: 15%;
      --top: 10;
    }
    20% {
      --left: -0.005;
    }
    40% {
      --left: -0.01;
      --v-height: 17%;
      --top: 3;
    }
    60% {
      --left: -0.03;
      --v-height: 35%;
      --top: 6;
    }
    80% {
      --left: -0.07;
      --v-height: 5%;
      --top: 8;
    }
    100% {
      --left: -0.083;
      --v-height: 30%;
      --top: 1;
    }
  }
`;
