import type { NextPage } from "next";

const WorkBox = ({ work }: any) => {
  return (
    <>
      <h2 className="text-3xl leading-relaxed">Solsten</h2>
      <h3 className="text-2xl leading-none">Frontend Developer</h3>
      <h3 className="text-2xl leading-none">Berlin</h3>
      <p className="text-md text-slate-400 text-ellipsis max-w-xs leading-relaxed truncate">
        2022 - Present
      </p>
    </>
  );
};

const Work: NextPage = () => {
  return (
    <div className="flex flex-row h-full">
      <div className="h-auto border-l-2 border-black w-1 mr-4" />
      <div>
        <div className="mb-4">
          <h2 className="text-3xl leading-relaxed">Solsten</h2>
          <h3 className="text-2xl leading-none">Frontend Developer</h3>
          <h3 className="text-2xl leading-none">Berlin</h3>
          <p className="text-md text-slate-400 text-ellipsis max-w-xs leading-relaxed truncate">
            2022 - Present
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl leading-relaxed">Payoneer</h2>
          <h3 className="text-2xl leading-none">Frontend Developer</h3>
          <h3 className="text-2xl leading-none">Munich</h3>
          <p className="text-md text-slate-400 text-ellipsis max-w-xs leading-relaxed truncate">
            2020 - 2022
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl leading-relaxed">Hipo</h2>
          <h3 className="text-2xl leading-none">Frontend Developer</h3>
          <h3 className="text-2xl leading-none">Istanbul</h3>
          <p className="text-md text-slate-400 text-ellipsis max-w-xs leading-relaxed truncate">
            2020 - 2020
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-3xl leading-relaxed">Sahibinden</h2>
          <h3 className="text-2xl leading-none">Frontend Developer</h3>
          <h3 className="text-2xl leading-none">Istanbul</h3>
          <p className="text-md text-slate-400 text-ellipsis max-w-xs leading-relaxed truncate">
            2018 - 2019
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
