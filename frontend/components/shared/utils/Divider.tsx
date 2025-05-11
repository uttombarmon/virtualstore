function CustomDivider({ width }: { width: string }) {
  return (
    <div className=" w-full flex justify-around items-center py-3">
      <p className={`${width} h-0.5 bg-slate-500`}></p>
      <p>Or</p>
      <p className={`${width} h-0.5 bg-slate-500`}></p>
    </div>
  );
}

export default CustomDivider;
