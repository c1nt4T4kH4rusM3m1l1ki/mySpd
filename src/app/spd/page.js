"use client";
import { Fragment, useEffect, useState } from "react";
import TabelSpd from "./table";
import useSWR, { mutate } from "swr";
import InputSpt from "./InputSpt";

export default function PageSpd() {
  const [dataSPD, setDataSPD] = useState(null);
  const [load, setLoad] = useState(false);
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR(process.env.URL_SPD, fetcher);

  const refreshData = async () => {
    const response = await fetch(process.env.URL_SPD);
    const data = await response.json();
    mutate(process.env.URL_SPD);
    // update data lokal dan tidak memicu pengambilan ulang data
  };

  // pengambilan data
  const callData = (item) => {
    let newdata = [];
    for (let i = item.length - 1; i > -1; i--) {
      if (item[i] !== undefined) {
        newdata.push(item[i]);
      }
    }
    setDataSPD(newdata);
  };

  useEffect(() => {
    if (data) {
      callData(data);
    }
    setLoad(false);
  }, [data]);

  return (
    <Fragment>
      <div className="ml-10 mt-8">
        <InputSpt setLoad={setLoad} mutate={mutate} />
      </div>
      {dataSPD && !load ? (
        <TabelSpd data={dataSPD} mutate={refreshData} />
      ) : (
        <NullData />
      )}
    </Fragment>
  );
}

const NullData = () => {
  return (
    <div>
      <div className="text-center mt-10 text-emerald-700">Proses Data</div>
      <div className="text-center text-emerald-700">
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-md"></span>
      </div>
    </div>
  );
};
