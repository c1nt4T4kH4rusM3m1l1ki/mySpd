import Select from "@/components/elements/Select";
import JenisSpt from "@/components/modal/Jenis";
import { tgllIndo } from "@/lib/fungsiLain";
import Link from "next/link";

const TabelSpd = (props) => {
  const { data } = props;

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
        <BodyTable data={data} />
      </table>
    </div>
  );
};

function BodyTable(props) {
  const { data } = props;

  return (
    <tbody>
      {data.map((item, i) => {
        return (
          <tr className="border border-black" key={item.id}>
            <td className="border border-black">
              <ul>
                <li>{item.person}</li>
                <li>{item.pengikut1}</li>
                <li>{item.pengikut2}</li>
                <li>{item.pengikut3}</li>
              </ul>
            </td>
            <td className="border border-black">
              <p className="text-center">{tgllIndo(item.tanggalBerangkat)}</p>
              <p className="text-center">sampai</p>
              <p className="text-center">{tgllIndo(item.tanggalKembali)}</p>
            </td>
            <td className="border border-black">{item.maksud}</td>
            <CetakSppd item={item} />
            <UrlLaporan item={item} />

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

function CetakSppd({ item }) {
  
  return (
    <td className="border border-black text-center">
      <ul>
        <li>
          <JenisSpt thisId={item.id} item={item}/>
        </li>
        <li>
          <button className="btn btn-xs btn-error my-1">SPD</button>
        </li>
        <li>
          <button className="btn btn-xs btn-warning">Laporan</button>
        </li>
      </ul>
    </td>
  );
}

function UrlLaporan({ item }) {
  return (
    <>
      <td className="border border-black text-center">
        <ol>
          <li>
            {item.urlSptWalikota ? (
              <CloudPrint url={item.urlSptWalikota} profil="Wako" />
            ) : (
              ""
            )}
          </li>
          <li>
            {item.urlSptSekda ? (
              <CloudPrint url={item.urlSptSekda} profil="Sekda" />
            ) : (
              ""
            )}
          </li>
          <li>
            {item.urlSptKaban ? (
              <CloudPrint url={item.urlSptKaban} profil="Kaban" />
            ) : (
              ""
            )}
          </li>
        </ol>
      </td>
      <td className="border border-black text-center">
        {item.urlSpd ? <CloudPrint url={item.urlSpd} /> : ""}
      </td>
      <td className="border border-black text-center">
        {item.urlLaporan ? <CloudPrint url={item.urlLaporan} /> : ""}
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


