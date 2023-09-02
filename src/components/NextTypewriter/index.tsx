'use client'
import Typewriter from "typewriter-effect";

const NextTypewriter = ({ information }: { information: string[]}) => {
  return (
    <>
      <Typewriter
        options={{
          strings: information,
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};

export default NextTypewriter;
