export function tgllIndo(tgl){
    const tanggal = new Date(tgl);
    const tanggalIndonesia = tanggal.toLocaleDateString('id-ID', {
                 year: 'numeric',
                 month: 'long',
                 day: 'numeric',
       });
     
     return tanggalIndonesia
 }

 export const ubahGolongan = (e, set, data) => {
  switch (e.target.value) {
    case "Penata Muda":
      set({ ...data, pangkat: e.target.value, golongan: "III.a" });
      break;
    case "Penata Muda TK I":
      set({ ...data, pangkat: e.target.value, golongan: "III.b" });
      break;
    case "Penata":
      set({ ...data, pangkat: e.target.value, golongan: "III.c" });
      break;
    case "Penata Tingkat I":
      set({ ...data, pangkat: e.target.value, golongan: "III.d" });
      break;
    case "Pembina":
      set({ ...data, pangkat: e.target.value, golongan: "IV.a" });
      break;
    case "Pembina Tingkat I":
      set({ ...data, pangkat: e.target.value, golongan: "IV.b" });
      break;
    case "Pembina Utama Muda":
      set({ ...data, pangkat: e.target.value, golongan: "IV.c" });
      break;
    case "Pembina Utama Madya":
      set({ ...data, pangkat: e.target.value, golongan: "IV.d" });
      break;
    case "Pembina Utama":
      set({ ...data, pangkat: e.target.value, golongan: "IV.c" });
      break;
    case "":
      set({ ...data, pangkat: e.target.value, golongan: "" });
      break;
    default:
      return "";
  }
};


export function BuatId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result+"ASN";
}

export function BuatIdSpt(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%&';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result+"SPT";
}


export function TambahPeg(dataPegawai){
  fetch(process.env.URL_PEG, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(dataPegawai),
  })
}