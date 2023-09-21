const SkeletonLoader = () => {
  return (
    <div className="md:grid md:grid-cols-12 gap-4 md:items-start">
      <div className="md:col-span-4">
        <section className="md:bg-white md:p-4 md:px-8 rounded-xl my-2">
          <div class="animate-pulse">
            <div class="rounded-xl bg-slate-200 h-96"></div>
          </div>
          <div class="animate-pulse my-4">
            <div class="rounded-xl bg-slate-200 h-20"></div>
          </div>
        </section>
      </div>
      <div className="md:col-span-8">
        <section className="md:bg-white md:p-4 md:px-8 rounded-xl my-2">
          <div className="flex justify-between">
            <div class="">
              <div class="rounded-xl bg-slate-200 h-4 w-40"></div>
            </div>
            <div class=" my-4 w-60">
              <div class="rounded-xl bg-slate-200 h-20"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 my-4">
            <div class="rounded-xl bg-slate-200 h-20"></div>
            <div class="rounded-xl bg-slate-200 h-20"></div>
            <div class="rounded-xl bg-slate-200 h-20"></div>
            <div class="rounded-xl bg-slate-200 h-20"></div>
            <div class="rounded-xl bg-slate-200 h-20"></div>
            <div class="rounded-xl bg-slate-200 h-20"></div>
          </div>
        </section>
        <section className="my-4 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 gap-4">
          <div class="rounded-xl bg-slate-200 h-32"></div>
          <div class="rounded-xl bg-slate-200 h-32"></div>
          <div class="rounded-xl bg-slate-200 h-32"></div>
          <div class="rounded-xl bg-slate-200 h-32"></div>
          <div class="rounded-xl bg-slate-200 h-32"></div>
          <div class="rounded-xl bg-slate-200 h-32"></div>
          <div class="rounded-xl bg-slate-200 h-32"></div>
        </section>
      </div>
    </div>
  );
};
export default SkeletonLoader;
