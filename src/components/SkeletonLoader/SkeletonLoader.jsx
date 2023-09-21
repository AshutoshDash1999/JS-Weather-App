const SkeletonLoader = () => {
  return (
    <div className="md:grid md:grid-cols-12 gap-4 md:items-start">
      <div className="md:col-span-4">
        <section className="md:bg-white md:p-4 md:px-8 rounded-xl my-2">
          <div className="animate-pulse">
            <div className="rounded-xl bg-slate-200 h-96"></div>
          </div>
          <div className="animate-pulse my-4">
            <div className="rounded-xl bg-slate-200 h-20"></div>
          </div>
        </section>
      </div>
      <div className="md:col-span-8">
        <section className="md:bg-white md:p-4 md:px-8 rounded-xl my-2">
          <div className="flex justify-center md:justify-between items-center md:items-start flex-col md:flex-row">
            <div className="rounded-xl bg-slate-200 h-4 w-40"></div>
            <div className=" mb-4 w-60">
              <div className="rounded-xl bg-slate-200 h-20"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 my-4">
            <div className="rounded-xl bg-slate-200 h-20"></div>
            <div className="rounded-xl bg-slate-200 h-20"></div>
            <div className="rounded-xl bg-slate-200 h-20"></div>
            <div className="rounded-xl bg-slate-200 h-20"></div>
            <div className="rounded-xl bg-slate-200 h-20"></div>
            <div className="rounded-xl bg-slate-200 h-20"></div>
          </div>
        </section>
        <section className="my-4 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 gap-4">
          <div className="rounded-xl bg-slate-200 h-32"></div>
          <div className="rounded-xl bg-slate-200 h-32"></div>
          <div className="rounded-xl bg-slate-200 h-32"></div>
          <div className="rounded-xl bg-slate-200 h-32"></div>
          <div className="rounded-xl bg-slate-200 h-32"></div>
          <div className="rounded-xl bg-slate-200 h-32"></div>
          <div className="rounded-xl bg-slate-200 h-32"></div>
        </section>
      </div>
    </div>
  );
};
export default SkeletonLoader;
