import Link from "next/link";

export default function Home() {
  const paragraf =
    "Ini adalah aplikasi sederhana yang menggabungkan teknologi google sheets sebagai database dan google doc sebagai output. Antar muka aplikasi ini adalah javascript, namun walaupun aplikasi ini sederhana kami berharap dapat efesiensi waktu dalam pembuatan SPD";

  return (
    <main className="mx-5 my-12 p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
        <div className="text-xl text-center md:text-end p-4">
          <div className="chat chat-end p-5">
            <p className="chat-bubble font-bold rounded-full p-9">
              {paragraf}
            </p>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble hover:bg-error">
              <Link href="/spd" className="hover:underline underline-offset-4">Click Disini Untuk Memulai</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <iframe
            src="https://giphy.com/embed/MSIxUdzMcsYbJKvwQ1"
            className="giphy-embed w-full h-auto md:w-[340px] md:h-[340px]"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}