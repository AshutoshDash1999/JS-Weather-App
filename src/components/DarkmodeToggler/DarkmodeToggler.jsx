import useStore from "../../store/useStore";

const DarkmodeToggler = () => {
  const { isDarkMode, setDarkMode } = useStore();

  function themeChanger() {
    console.log("isDarkMode", isDarkMode);
    setDarkMode(!isDarkMode);
  }

  return (
    <button
      title="Toggle Theme"
      onClick={themeChanger}
      className="
        w-12 
        h-6 
        rounded-full 
        p-1 
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:border-transparent
        nm-inset-light
        dark:nm-inset-dark
        nm-inset-light
        shadow-[inset_-12px_-8px_40px_#46464620]
      "
    >
      <div
        id="toggle"
        className="
            rounded-full 
            w-4 
            h-4 
            bg-yellow-500 
            dark:bg-blue-900 
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
            shadow-gray-200
        "
      ></div>
    </button>
  );
};
export default DarkmodeToggler;
