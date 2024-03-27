const TabelSpd = () => {
  return (
    <div className="overflow-x-auto px-10 mt-5 mb-16 h-[370px] ">
      <table className="table table-sm border border-black">
        <thead className="bg-slate-200 text-center border border-black text-sm text-black font-bold sticky top-0 z-20">
          <tr>
            <th rowSpan={2} className="border border-black">Personil</th>
            <th rowSpan={2} className="border border-black">Tanggal SPD</th>
            <th rowSpan={2} className="border border-black">Maksud</th>
            <th rowSpan={2} className="border border-black">Print</th>
            <th  colspan={3}>Download</th>
            <th className="border border-black" rowSpan={2} >Action</th>
          </tr>
          <tr>
            <th className="border border-black">SPT</th>
            <th className="border border-black">SPD</th>
            <th className="border border-black">Laporan</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-black">
            <td className="border border-black">xxx</td>
            <td className="border border-black">xxx</td>
            <td className="border border-black">xxx</td>
            <td className="border border-black text-center">xxx</td>
            <td className="border border-black text-center">xxx</td>
            <td className="border border-black text-center">xxx</td>
            <td className="border border-black text-center">xxx</td>
            <td className="border border-black text-center">xxx</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelSpd;
