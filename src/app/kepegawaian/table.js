"use client";

import { tgllIndo } from "@/lib/fungsiLain";
import EditKepegawaian from "./EditPegawai";
import { useState } from "react";
import TambahPegawai from "./forminput";

const Table = (props) => {
  const { setProses, proses, data, mutate, datapeg } = props;
  
  // State untuk pagination dan search
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 6;

  // Filter data based on search term
  const filteredData = datapeg ? datapeg
    .sort((a, b) => a.nama.localeCompare(b.nama)) // Mengurutkan berdasarkan nama
    .filter(item =>
      item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

  // Perhitungan pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Array untuk nomor halaman
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Reset to first page when search term changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 mt-7 mb-16">
      {/* Search Input */}
      
      <div className="flex flex-col md:flex-row justify-between mb-4 mt-4 gap-4">
      
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Cari nama..."
              className="input input-bordered w-full md:w-64 input-sm"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <TambahPegawai setProses={setProses}  mutate={mutate}/>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-sm">
          <thead className="bg-gray-50 border text-base font-bold sticky top-0 z-20">
            <tr>
              <th className="hidden">Id</th>
              <th>Nama</th>
              <th>Nip</th>
              <th>Pangkat</th>
              <th>Gol</th>
              <th>Jabatan</th>
              <th>Tanggal Lahir</th>
              <th>Tingkat SPD</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <tr key={item.id}>
                  <td className="hidden">{item.id}</td>
                  <td>
                    <EditKepegawaian nama={item.nama} id={item.id} data={item} setProses={setProses} mutate={mutate}/>
                  </td>
                  <td>
                    <EditKepegawaian nama={item.nip} id={item.id} data={item} setProses={setProses} mutate={mutate}/>
                  </td>
                  <td>
                    <EditKepegawaian nama={item.pangkat} id={item.id} data={item} setProses={setProses} mutate={mutate}/>
                  </td>
                  <td>
                    <EditKepegawaian nama={item.golongan} id={item.id} data={item} setProses={setProses} mutate={mutate}/>
                  </td>
                  <td>
                    <EditKepegawaian nama={item.jabatan} id={item.id} data={item} setProses={setProses} mutate={mutate}/>
                  </td>
                  <td className="text-end">
                    <EditKepegawaian
                      nama={tgllIndo(item.tanggalLahir)}
                      id={item.id}
                      data={item}
                      setProses={setProses}
                      mutate={mutate}
                    />
                  </td>
                  <td className="text-center">
                    <EditKepegawaian
                      nama={item.tingkatSpd}
                      id={item.id}
                      data={item}
                      setProses={setProses}
                      mutate={mutate}
                    />
                  </td>
                  <td>
                    <Hapus nama={item.nama} idItem={item.id} setProses={setProses} mutate={mutate} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={9} className="text-center">
                  {searchTerm ? "Tidak ada hasil yang ditemukan" : (
                    <>
                      <span className="loading loading-spinner text-secondary"></span>
                      <span className="loading loading-spinner text-secondary"></span>
                      <span className="loading loading-spinner text-secondary"></span>
                    </>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <div className="join">
          <button 
            className="join-item btn btn-sm"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            «
          </button>
          
          {pageNumbers.map(number => (
            <button
              key={number}
              className={`join-item btn btn-sm ${currentPage === number ? 'btn-active bg-blue-500 text-white' : ''}`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </button>
          ))}
          
          <button 
            className="join-item btn btn-sm"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
        <div className="text-sm text-gray-600">
          Halaman {currentPage} dari {totalPages}
        </div>
      </div>
      
    </div>
  );
};

function Hapus(props) {
  const { idItem, nama, setProses, mutate } = props;

  function DelHandler(){
    setProses(true)
    fetch(process.env.URL_PEG,{
      method:"POST",
      mode:"no-cors",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify({
        action:"delete",
        id:idItem
      })
    })
    setTimeout(async()=>{  
      await mutate(process.env.URL_PEG);
    }, 3000)
  }

  return (
    <>
      <label htmlFor={nama} className="text-xl btn glass btn-circle">
        <span className="material-symbols-outlined text-red-900 text-xs">
          delete
        </span>
      </label>

      <input type="checkbox" id={nama} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-auto md:w-[400px] bg-cyan-200">
          <h3 className="text-lg font-bold text-red-700 text-center underline">PERHATIAN !</h3>
          <p className="py-4 text-center text-lg mt-4">Apakah Anda Yakin Menghapus Data</p>
          <p className="text-center text-xl text-red-800 m-0 font-bold"> An. {nama}</p>
          <div className="modal-action">
            <label className="btn btn-error" htmlFor={nama} onClick={DelHandler}>
              Yakin
            </label>
            <label className="btn btn-warning" htmlFor={nama}>
              Tidak
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;