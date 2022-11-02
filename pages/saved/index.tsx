import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import base from "../api/client";

interface LayoutProps {
  children: React.ReactNode;
  saved: any;
}

const SavedBox = ({ saved }: any) => {
  return (
    <Link href={saved.Url} target="_blank">
      <div className="my-4 border-l-2 border-black pl-4 pr-4 py-2 hover:bg-slate-100 cursor-pointer transition-colors">
        <h4 className="text-2xl mb-2 font-bold">{saved.Title}</h4>
        <p className="text-lg">{saved.Description}</p>
        <p className="text-sm text-slate-400 text-ellipsis max-w-xs leading-relaxed truncate">
          {saved.Url}
        </p>
      </div>
    </Link>
  );
};

const Saved: NextPage<LayoutProps> = ({ saved, children }: LayoutProps) => {
  return (
    <div className="w-full h-full align-start justify-start">
      {saved.data.map((item: any) => (
        <SavedBox saved={item} />
      ))}
    </div>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const getSaved = () =>
    new Promise((resolve, reject) => {
      let resdata: { data: any } = { data: [] };
      base("Table 1")
        .select({
          maxRecords: 3,
          view: "Grid view",
        })
        .eachPage(
          async function page(records, fetchNextPage) {
            records.forEach(function (record) {
              resdata = { data: [...(resdata.data || []), record.fields] };
            });
            fetchNextPage();
          },
          async function done(err) {
            if (err) {
              console.error(err);
              reject(err);
            }
            resolve(resdata);
          }
        );
    });

  const saved = await getSaved();

  return {
    props: {
      saved,
    },
  };
}

export default Saved;
