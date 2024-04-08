"use clinet";

import JenisSpt from "@/components/modal/Jenis";
import { MakeLap, MakeSpd, tgllIndo } from "@/lib/fungsiLain";
import Link from "next/link";
import { useEffect, useState } from "react";

const TabelSpd = (props) => {
  const { data, mutate } = props;

  return (
    <div className="overflow-x-auto px-10 mt-5 mb-16 h-[370px] ">
      <table className="table table-sm border border-black">
        <thead className="bg-slate-200 text-center border border-black text-sm text-black font-bold sticky top-0 z-20">
          <tr>
            <th rowSpan={2} className="border border-black w-[200px] ">
              Personil
            </th>
            <th rowSpan={2} className="border border-black w-[160px]">
              Tanggal SPD
            </th>
            <th rowSpan={2} className="border border-black">
              Maksud
            </th>
            <th rowSpan={2} className="border border-black">
              Print
            </th>
            <th colSpan={3}>Download</th>
            <th className="border border-black" rowSpan={2}>
              Action
            </th>
          </tr>
          <tr>
            <th className="border border-black">SPT</th>
            <th className="border border-black">SPD</th>
            <th className="border border-black">Laporan</th>
          </tr>
        </thead>
        <BodyTable data={data} mutate={mutate} />
      </table>
    </div>
  );
};

function BodyTable(props) {
  const { data, mutate } = props;
  const [urlLoad, setUrlLoad] = useState(true);

  return (
    <tbody>
      {data.map((item, i) => {
        return (
          <tr className="border border-black" key={item.id}>
            <td className="inline-block align-top">
              <ul>
                <li>{item.person}</li>
                <li>{item.pengikut1}</li>
                <li>{item.pengikut2}</li>
                <li>{item.pengikut3}</li>
              </ul>
            </td>
            <td className="border border-black align-top">
              <p className="text-center">{tgllIndo(item.tanggalBerangkat)}</p>
              <p className="text-center">sampai</p>
              <p className="text-center">{tgllIndo(item.tanggalKembali)}</p>
            </td>
            <td className="border border-black align-top">{item.maksud}</td>
            <CetakSppd
              item={item}
              mutate={mutate}
              setUrlLoad={setUrlLoad}
              urlLoad={urlLoad}
            />
            <UrlLaporan item={item} urlLoad={urlLoad} setUrlLoad={setUrlLoad} />

            {/* Action untuk ke link edit */}
            <td className="border border-black text-center">
              <Link href={`/spd/${item.id}`} className="btn btn-circle btn-xs">
                <span className="material-symbols-outlined text-cyan-600 hover:text-red-500">
                  build_circle
                </span>
              </Link>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TabelSpd;

function CetakSppd({ item, urlLoad, setUrlLoad, mutate }) {
  return (
    <td className="border border-black text-center">
      <ul>
        <li>
          <JenisSpt
            thisId={item.id}
            item={item}
            setUrlLoad={setUrlLoad}
            mutate={mutate}
            urlLoad={urlLoad}
          />
        </li>
        <li>
          <label
            disabled={urlLoad}
            className="btn btn-xs btn-error my-1"
            onClick={() => {
              setUrlLoad(true);
              MakeSpd(item.id);
              setTimeout(() => {
                mutate();
              }, 3000);
            }}
          >
            SPD
          </label>
        </li>
        <li>
          <label
            disabled={urlLoad}
            className="btn btn-xs btn-warning"
            onClick={() => {
              setUrlLoad(true);
              MakeLap(item.id);
              setTimeout(() => {
                mutate();
              }, 3000);
            }}
          >
            Laporan
          </label>
        </li>
      </ul>
    </td>
  );
}

function UrlLaporan({ item, urlLoad, setUrlLoad }) {
  useEffect(() => {
    setUrlLoad(false);
  }, [item]);
  return (
    <>
      <td className="border border-black text-center">
        <ol>
          <li>
            {urlLoad ? (
              <span className="loading loading-bars loading-xs"></span>
            ) : item.urlSptWalikota ? (
              <CloudPrint url={item.urlSptWalikota} profil="Wako" />
            ) : (
              ""
            )}
            {}
          </li>
          <li>
            {urlLoad ? (
              <span className="loading loading-bars loading-xs"></span>
            ) : item.urlSptSekda ? (
              <CloudPrint url={item.urlSptSekda} profil="Sekda" />
            ) : (
              ""
            )}
          </li>
          <li>
            {urlLoad ? (
              <span className="loading loading-bars loading-xs"></span>
            ) : item.urlSptKaban ? (
              <CloudPrint url={item.urlSptKaban} profil="Kaban" />
            ) : (
              ""
            )}
          </li>
        </ol>
      </td>
      <td className="border border-black text-center">
        {urlLoad ? (
          <span className="loading loading-bars loading-xs"></span>
        ) : item.urlSpd ? (
          <CloudPrint url={item.urlSpd} />
        ) : (
          ""
        )}
      </td>
      <td className="border border-black text-center">
        {urlLoad ? (
          <span className="loading loading-bars loading-xs"></span>
        ) : item.urlLaporan ? (
          <CloudPrint url={item.urlLaporan} />
        ) : (
          ""
        )}
      </td>
    </>
  );
}

// element
function CloudPrint(props) {
  const { url, profil } = props;
  return (
    <a href={url} target="blank" className="hover:text-red-600">
      {profil}
      <span className="material-symbols-outlined">cloud_upload</span>
    </a>
  );
}
