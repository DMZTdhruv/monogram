// the code visual for the retroComputer

// why did I do this? well because I wanted to make a blink animation of code but the svg don't support blurring background like how we do with backdrop filter in html 
// elements so I decided to use a png which had that fake blur, and it is now a webp format for optimized image size, and I created a fake screen similar to retro computer 
// and used this string of code to display that so I decided to use a png which is now a webp for optimized image size, and I created a screen similar to retro computer and 
// used this string of code to display that visual blinking retro code
export const codeString = `
  import Document, { Html, Head, Main, NextScript } from 'next/document';

  class MyDocument extends Document {
   render() {
    return (
      <Html lang="en">
        <Head>
         {/* Fonts */}
         <link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
         <link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />
         <link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
         <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
         <noscript>
           <link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
         </noscript>
        </Head>
        <body>
         <Main />
         <NextScript />
        </body>
      </Html>
      );
    }
  }

`;


// default classnames for the borders of falling icons and score section
export const borderClassname = "flex-1 h-full relative border-dashed border-[#E8E8E8]/20";

// animate score object
// keys: score, blinkDelay, spinDuration, spinDirection
// her blinkDelay ensures that each animatedScore element blinks with a delay
// spin duration defines the speed of each animated score
// and direction basically defines the direction
export const animatedScores = [
  { score: 100, blinkDelay: 0, spinDuration: 10, spinDirection: "clockwise" },
  { score: 100, blinkDelay: 1, spinDuration: 12, spinDirection: "counterclockwise" },
  { score: 100, blinkDelay: 2, spinDuration: 8, spinDirection: "clockwise" },
  { score: 100, blinkDelay: 3, spinDuration: 15, spinDirection: "counterclockwise" },
];
