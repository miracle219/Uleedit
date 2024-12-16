const TypographyAnimation = ({
  firstWord = "develop",
  secondWord = "design",
}: {
  firstWord: string;
  secondWord: string;
}) => {
  const renderWordAnimation = (word: string, startingDelay: number) => {
    return word.split("").map((letter, index) => (
      <span
        key={index}
        className={` animate-fall animation-delay-[${
          startingDelay + index * 50
        }ms] translate-y-[-150%]`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div className="animate-delay animation-delay-[1000ms]">
      <span className="relative inline-flex ml-2 overflow-hidden p-2">
        <div className="flex flex-row">{renderWordAnimation(firstWord, 0)}</div>

        <span className="absolute top-0 bottom-0">
          <div className="flex flex-row">
            {renderWordAnimation(secondWord, 1500)}
          </div>
        </span>
      </span>
    </div>
  );
};

export default TypographyAnimation;
