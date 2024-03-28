"use client";
import { Fragment, useEffect, useState } from "react";
import TabelSpd from "./table";
import useSWR from "swr";
import InputSpt from "./InputSpt";

export default function PageSpd() {
  const [dataSPD, setDataSPD] = useState(null);
  const fetcer = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(process.env.URL_SPD, fetcer);

  const callData = (item) => {
    let newdata = [];
    for (let i = item.length + 1; i > 0; i--) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      callData(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Fragment>
      <div className="ml-10 mt-8">
        <InputSpt/>
      </div>
      {dataSPD ? <TabelSpd data={dataSPD} /> : <NullData />}
    </Fragment>
  );
}

const NullData = () => {
  return (
    <div className="text-center mt-10">
      <span className="loading loading-spinner text-secondary"></span>
      <span className="loading loading-spinner text-secondary"></span>
      <span className="loading loading-spinner text-secondary"></span>
    </div>
  );
};
