"use client";

import TambahPegawai from "./forminput";
import Renewdata from "./renewdata";
import Table from "./table";
import useSWR, {mutate} from "swr";
import { useEffect,  useState } from "react";

const Kepegawaian = () => {
  const [proses, setProses] = useState(false);
  const fecher = (url) => fetch(url).then((res) => res.json());
  const {data, error}=useSWR(process.env.URL_PEG, fecher,{
    revalidateOnMount:true,
    revalidateOnFocus:true,
    revalidateOnReconnect:true
  });
  const [datapeg, setDatapeg] = useState(null);

  const callDataPeg = (item) => {
    let newdata = [];
    for (let i = item.length + 1; i > 0; i--) {
      if (item[i] !== undefined) {
        newdata.push(item[i]);
      }
    }
    setDatapeg(newdata);
  };

  useEffect(() => {
    if (data) {
      callDataPeg(data);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      callDataPeg(data);
    }
    setProses(false)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
 

  return (
    <>
      {proses&&<Renewdata />}
      <TambahPegawai setProses={setProses}  mutate={mutate}/>
      <Table setProses={setProses} proses={proses} data={data} mutate={mutate} datapeg={datapeg}/>
    </>
  );
};

export default Kepegawaian;
