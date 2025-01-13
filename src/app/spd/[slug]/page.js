"use client";

import { useState } from "react";
import { FormEdit } from "./form";
import useSWR from "swr";

const fetcher = async (url) => {
  if (!url) return null;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors', // Ubah ke cors
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });

    // Google Apps Script selalu mengembalikan status 200
    const data = await response.json();
    
    // Cek apakah data valid
    if (!data || data.error) {
      throw new Error(data?.error || 'Data tidak valid');
    }

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error(`Gagal mengambil data: ${error.message}`);
  }
};

export default function DetailSpd({ params }) {
  const [isError, setIsError] = useState(false);

  // Fetch data SPD dengan URL dari next.config.js
  const { data: spdData, error: spdError, mutate: mutateSpdData } = useSWR(
    params.slug ? `${process.env.URL_SPD}?id=${params.slug}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 30000,
      shouldRetryOnError: true,
      errorRetryCount: 3,
      onError: (err) => {
        console.error("Error fetching SPD data:", err);
        setIsError(true);
      }
    }
  );

  // Fetch data pegawai
  const { data: pegawaiData, error: pegError } = useSWR(
    process.env.URL_PEG,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 30000,
      shouldRetryOnError: true,
      errorRetryCount: 3,
      onError: (err) => {
        console.error("Error fetching pegawai data:", err);
        setIsError(true);
      }
    }
  );

  const sedangMemuat = !spdData || !pegawaiData;
  const adaError = spdError || pegError || isError;

  if (adaError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <p className="text-lg font-semibold mb-2">Terjadi kesalahan saat memuat data</p>
          <p className="text-sm">Silakan refresh halaman atau coba beberapa saat lagi</p>
          <p className="text-xs mt-2">{spdError?.message || pegError?.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {sedangMemuat ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="flex gap-2 items-center">
            <span className="loading loading-spinner text-secondary"></span>
            <span>Sedang memuat data...</span>
          </div>
        </div>
      ) : (
        <FormEdit
          dataSpd={spdData}
          pegawai={pegawaiData}
          onError={() => setIsError(true)}
          onSuccess={() => mutateSpdData()} // Tambahkan untuk refresh data setelah update
        />
      )}
    </div>
  );
}