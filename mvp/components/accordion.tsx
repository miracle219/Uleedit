import { memo } from "react";

type DaisyCollapsibleProps = {
  answer: string;
  title: string;
};
const DaisyCollapsible: React.FC<DaisyCollapsibleProps> = ({
  answer,
  title,
}) => {
  return (
    <div
      className="daisy-collapse relative bg-slate-200/90 shadow-inner shadow-black/30 before:pointer-events-none before:absolute before:inset-0 before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] max-w-2xl mx-auto"
      data-theme="light"
    >
      <input type="checkbox" className="absolute inset-0 w-full h-max z-10" />
      <div className="daisy-collapse-title text-lg font-semibold font-sans tracking-tight">
        <h3 className="leading-6 font-semibold tracking-tight">{title}</h3>
      </div>

      <div className="daisy-collapse-content">
        <p className="font-semibold text-justify leading-6">{answer}</p>
      </div>
    </div>
  );
};

export default memo(DaisyCollapsible);
