import React from "react";

const animatedLetters = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["S", "a", "k", "i", "b"];

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div>
      <AnimatedLetters
        letterClass={letterClass}
        strArray={nameArray}
        idx={15}
      />
    </div>
  );
};

export default animatedLetters;
