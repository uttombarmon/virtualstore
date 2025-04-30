export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" text-black bg-green-400/20 relative overflow-x-hidden min-h-screen">
      <div className=" h-[115vh]  w-full 2xl:w-[110vh] bg-amber-400/70 rotate-35 absolute top-[-400px] 2xl:left-[-200px] rounded-br-[70px]"></div>
      <div className=" relative z-10 h-screen flex justify-center items-center">
        {children}
      </div>
      ;
    </div>
  );
}
