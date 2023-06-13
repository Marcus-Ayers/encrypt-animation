import Image from "next/image";

export default function IdCard({ divId }) {
  const divStyle1 = {
    width: "350px",
    height: "250px",
    marginBottom: "10px",
    borderRadius: "15px",
    marginLeft: "500px",
  };
  return (
    <div
      id={`div${divId}`}
      className="bg-white collision flex flex-col"
      style={{
        ...divStyle1,
        backgroundImage: `url(/images/bgid.jpeg)`,
      }}
    >
      <div className="p-3">
        <div className="mb-3">
          <p className="text-lg text-black font-mono">Passport</p>
        </div>
        <div className="flex justify-between">
          <div>
            <Image
              src="/images/20210210_SLP0397-Edit2.jpg"
              alt="headshot"
              height={300}
              width={100}
              className="h-[130px] w-[100px] rounded-md"
            ></Image>
          </div>
          <div>
            <div className="flex flex-col text-[10px] font-mono text-black h-full justify-evenly">
              <div>
                <h4 className="text-zinc-800 text-[9px]"> SURNAME</h4>
                <p>LYNCH</p>
              </div>
              <div>
                <h4 className="text-zinc-800 text-[9px]"> FIRST NAME</h4>
                <p>ZACH</p>
              </div>
              <div>
                <h4 className="text-zinc-800 text-[9px]"> NATIONALITY</h4>
                <p>IRISH</p>
              </div>
              <div>
                <h4 className="text-zinc-800 text-[9px]"> DATE OF ISSUE</h4>
                <p>18 MAY 2022</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col text-[10px] font-mono text-black justify-end h-full">
              <div className="mb-2">
                <h4 className="text-zinc-800 text-[9px]"> CARD NUMBER</h4>
                <p>CM0224D292</p>
              </div>
              <div className="mb-2">
                <h4 className="text-zinc-800 text-[9px]"> DATE OF BIRTH</h4>
                <p>25 OCT 1990</p>
              </div>
              <div className="mb-2">
                <h4 className="text-zinc-800 text-[9px]"> EXPIRATION</h4>
                <p>18 MAY 2027</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p className=" text-gray-400 font-mono text-[8px] leading-4">
            P C M 0 2 2 4 D 2 9 2 &lt; &lt; &lt; LYNCH &lt; &lt; &lt; &lt; &lt;
            &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; 2 9 9 I
            E 1 3 2 &lt; &lt; &lt; ZACH &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt;
            &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; &lt; I E
          </p>
        </div>
      </div>
    </div>
  );
}
