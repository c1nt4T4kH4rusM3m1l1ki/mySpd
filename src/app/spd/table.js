import JenisSpt from "@/components/modal/Jenis";
import { MakeLap, MakeSpd, tgllIndo } from "@/lib/fungsiLain";
import Link from "next/link";
import { useEffect, useState } from "react";

const TabelSpd = (props) => {
  const { data, mutate } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPeg, setSelectedPeg] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // New state for search
  const itemsPerPage = 3;

  // Fetch peg options from process.env.URL_PEG
  const [pegOptions, setPegOptions] = useState([]);

  useEffect(() => {
    fetch(process.env.URL_PEG)
      .then(res => res.json())
      .then(data => {
        // Sort the pegOptions array by nama in alphabetical order
        const sortedPegOptions = data.sort((a, b) => 
          (a.nama || '').localeCompare(b.nama || '')
        );
        setPegOptions(sortedPegOptions);
      })
      .catch(err => console.error('Error fetching peg options:', err));
  }, []);

  // Filter data based on selectedPeg and searchTerm
  const filteredData = data.filter(item => 
    (selectedPeg === '' || 
     item.person === selectedPeg ||
     item.pengikut1 === selectedPeg ||
     item.pengikut2 === selectedPeg ||
     item.pengikut3 === selectedPeg ||
     item.pengikut4 === selectedPeg) &&
    (searchTerm === '' || 
     item.maksud.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const total_pages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="px-10 mt-5 mb-16">
      <div className="flex justify-end space-x-3 mb-3">

      <span className="material-symbols-outlined text-black align-buttom ">
                  filter_list
                </span>

        {/* Existing select for 'selectedPeg' */}
        <select
          className="select select-bordered select-sm w-60 max-w-xs"
          value={selectedPeg}
          onChange={e => setSelectedPeg(e.target.value)}
        >
          <option value="">All</option>
          {pegOptions.map((option, i) => (
            <option key={i} value={option.nama}>
              {option.nama}
            </option>
          ))}
        </select>

        {/* Search input for 'maksud' */}
        <input
          type="text"
          placeholder="cari berdasarkan maksud spd..."
          className="input input-bordered input-sm w-full max-w-xs"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        
      </div>
      <table className="table table-sm border border-black w-full">
        <thead className="bg-slate-200 text-center border border-black text-sm text-black font-bold sticky top-0 z-20">
          <tr>
            <th rowSpan={2} className="border border-black w-[200px]">
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
        <BodyTable data={currentData} mutate={mutate} />
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          className={`btn ${currentPage === 1 ? 'btn-disabled' : ''}`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p>Page {currentPage} of {total_pages}</p>
        <button
          className={`btn ${currentPage === total_pages ? 'btn-disabled' : ''}`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === total_pages}
        >
          Next
        </button>
      </div>
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
                <li>{item.pengikut4}</li>
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
            onClick={async () => {
              setUrlLoad(true);
              await MakeSpd(item.id).then(() => {
                mutate(process.env.URL_SPD);
              });
              setTimeout(() => {
                setUrlLoad(false);
              }, 10000);
            }}
          >
            SPD
          </label>
        </li>
        <li>
          <label
            disabled={urlLoad}
            className="btn btn-xs btn-warning"
            onClick={async () => {
              setUrlLoad(true);
              await MakeLap(item.id)
                .then(() => {
                  mutate(process.env.URL_SPD);
                })
                .then(() => {
                  setTimeout(() => {
                    setUrlLoad(false);
                  }, 10000);
                });
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

function CloudPrint(props) {
  const { url, profil } = props;
  return (
    <a href={url} target="_blank" className="hover:text-red-600">
      {profil ? `${profil} ` : ""}
      <span className="material-symbols-outlined">cloud_upload</span>
    </a>
  );
}

export default TabelSpd;