"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {
  return (
    <div className="grid grid-cols-2">
      <div className="mt-16 p-12 ml-5">
        <h1 className="text-center font-bold underline text-red-600 text-2xl mt-16">
          PERHATIAN !!
        </h1>
        <p className="text-xl text-center mt-3 px-4">
          Sebagaimana Peraturan Standar Pada Setiap Aplikasi. Tentu saja Anda
          Harus Masukan Password Untuk Memulai Menggunakan Aplikasi ini !!!
        </p>
      </div>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}

function LoginForm() {
  const [visible, setVisible] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [warnaPassword, setWarnaPass] = useState("text-red-700");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    setWarnaPass(valueInput === "spenuh2024" ? "text-emerald-600" : "text-red-700");
  }, [valueInput]);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await signIn("credentials", {
        redirect: false,
        password: valueInput,
        callbackUrl: "/spd",
      });
      if (!res?.error) {
        push("/spd")
      } else {
        alert("Password Salah");
        location.reload();
      }
    } catch (err) {
      alert("Terjadi kesalahan saat login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-[135px] rounded-2xl w-7/12 bg-cyan-300 shadow-lg shadow-cyan-500/50 p-10">
      <span className="font-bold">PASSWORD:</span>
      <label className="input input-bordered flex items-center gap-2 mt-3">
        <input
          type={visible ? "text" : "password"}
          className={`grow ${warnaPassword}`}
          onChange={(e) => setValueInput(e.target.value)}
        />
        {visible ? (
          <IconVisibility set={setVisible} color={warnaPassword} visible />
        ) : (
          <IconVisibility set={setVisible} color={warnaPassword} />
        )}
      </label>
      <div className="mt-5 flex justify-end">
        <button
          disabled={loading}
          className="btn btn-warning shadow-yellow-100/10"
          onClick={handleLogin}
        >
          {loading ? "Memuat..." : "LOGIN"}
        </button>
      </div>
    </div>
  );
}

function IconVisibility({ set, color, visible = false }) {
  return (
    <span
      className={`material-symbols-outlined btn btn-xs glass ${color}`}
      onClick={() => set(!visible)}
    >
      {visible ? "visibility" : "visibility_off"}
    </span>
  );
}
