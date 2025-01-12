"use client";


import Renewdata from "./renewdata";
import Table from "./table";
import useSWR, {mutate} from "swr";
import { useEffect,  useState } from "react";

const Kepegawaian = () => {
  const [proses, setProses] = useState(false);
  const fecher = (url) => fetch(url).then((res) => res.json());
  const {data}=useSWR(process.env.URL_PEG, fecher,{
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
      setProses(false);
    } else {
      setProses(true);
    }
  }, [data]);
 

  return (
    <>
      {proses&&<Renewdata />}
      
      <Table setProses={setProses} proses={proses} data={data} mutate={mutate} datapeg={datapeg}/>
    </>
  );
};

export default Kepegawaian;
