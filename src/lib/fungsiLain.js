export function tgllIndo(tgl){
    const tanggal = new Date(tgl);
    const tanggalIndonesia = tanggal.toLocaleDateString('id-ID', {
                 year: 'numeric',
                 month: 'long',
                 day: 'numeric',
       });
     
     return tanggalIndonesia
 }