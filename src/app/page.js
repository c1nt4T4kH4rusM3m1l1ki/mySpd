export default function Home() {
  const pragraf =
    "Ini adalah aplikasi sederhana yang menggabungkan teknologi google sheets sebagai database dan google doc sebagai output. Antar muka aplikasi ini adalah javascript, namun walaupun aplikasi ini sederhana kami berharap dapat efesiensi waktu dalam  pembuatan SPD";

  return (
    <main>
      <div className="mx-5 my-12 p-5">
        <div className="grid grid-cols-2 mt-4">
          <div className="text-xl text-end p-4">
            <div className="chat chat-end p-5">
              <p className="chat-bubble w-[470px] font-bold rounded-full p-9">{pragraf}</p>
            </div>
          </div>
          <div className="flex justify-start">
            <iframe
              src="https://giphy.com/embed/MSIxUdzMcsYbJKvwQ1"
              className="giphy-embed w-[340px] h-[340px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
