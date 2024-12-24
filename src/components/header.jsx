import { AiFillAudio } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { IoIosSearch, IoIosVideocam } from "react-icons/io";
import { MdVideoLibrary } from "react-icons/md";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const Header = () => {
  const [params] = useSearchParams();
  const query = params.get("search_query");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    //arama sayfasına yönlendir
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="px-2 py-4 sm:px-4 flex justify-between items-center">
      <Link to={"/"} className="flex gap-[6px]">
        <img className="w-10 sm:w-12" src="youtube.png" alt="youtube-logo" />
        <h1 className="text-xl sm:text-2xl font-mono">Youtube</h1>
      </Link>

      <div className="flex items-center gap-2">
        <form
          onSubmit={handleSubmit}
          className="flex border rounded-[20px] overflow-hidden"
        >
          <input
            defaultValue={query}
            placeholder="Search"
            type="text"
            className="bg-[#0f0f0f] px-2 sm:px-5 py-1 sm:py-2 border border-transparent focus:border-blue-500  rounded-l-[20px] lg:w-[450px] md:w-[350px]"
          />
          <button className="px-3 sm:px-4 sm:text-2xl bg-secondary hover:bg-zinc-600 transition duration-300">
            <IoIosSearch />
          </button>
        </form>
        <AiFillAudio className="bg-secondary rounded-full px-[11px] sm:px-3 text-[40px] sm:text-5xl cursor-pointer hover:bg-zinc-600 transition" />
      </div>
      <div className="flex gap-3 text-xl cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400 transition" />
        <MdVideoLibrary className="hover:text-gray-400 transition" />
        <IoIosVideocam className="hover:text-gray-400 transition" />
      </div>
    </header>
  );
};

export default Header;
