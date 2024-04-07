"use client";
import { Fragment, useEffect, useState } from "react";
import TabelSpd from "./table";
import useSWR from "swr";
import InputSpt from "./InputSpt";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PageSpd() {
  const [dataSPD, setDataSPD] = useState(null);
  const [load, setLoad]=useState(false)
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, mutate } = useSWR(process.env.URL_SPD, fetcher);
  
  // fungsi login
  const {data:session, status}= useSession()
  const router = useRouter()
  useEffect(()=>{
    if(status==='unauthenticated'){
      router.push("/login")
    }
    
  },[status, router])

  // pengambilan data
  const callData = (item) => {
    let newdata = [];
    for (let i = item.length-1; i > -1; i--) {
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
    setLoad(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Fragment>
    
      <div className="ml-10 mt-8">
        <InputSpt setLoad={setLoad} mutate={mutate}/>
      </div>
      {dataSPD && !load ? <TabelSpd data={dataSPD} mutate={mutate}/> : <NullData />}
      
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
