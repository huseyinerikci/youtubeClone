import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import BasicLoader from "../../components/basicLoader";
import Error from "../../components/error";
import Card from "../../components/Card";
import Sidebar from "../feed/Sidebar";

const Reuslts = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [page, setPage] = useState(1);
  //url arama parametresine erişmek
  const [params] = useSearchParams();
  const query = params.get("search_query");

  //api dan aratılan kelimeye uygun videoları al
  useEffect(() => {
    setIsloading(true);
    const params = { query, token: page > 1 ? token : undefined };
    api
      .get("/search", { params })
      .then((res) => {
        setData((prev) => [...prev, ...res.data.data]);
        setToken(res.data.continuation);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsloading(false));
    //query yani inputa girilen değere ve daha fazla butonuna tıklanılmasına bağlı olarak api yenilenmeli
  }, [query, page]);

  //inputtan farklı bir  şey aratılınca önceki verileri temizleme ve yeniden sayfa 1 den başlama
  useEffect(() => {
    setData([]);
    setToken(null);
    setPage(1);
  }, [query]);

  return (
    <div className="flex">
      <div className="hidden sm:flex">
        <Sidebar />
      </div>

      <div className="p-4 sm:p-6 md:p-10 h-[93vh] overflow-y-auto">
        <h2 className="text-xl mb-5">
          <span className="font-bold me-2">{query}</span>
          <span>için sonuçlar</span>
        </h2>
        {error && <Error msg={error} />}
        <div className="wrapper flex flex-col gap-5 justify-center">
          {data.map((item, key) => (
            <Card key={key} item={item} isRow />
          ))}
        </div>
        <div className="flex justify-center my-10">
          {!isLoading ? (
            <button
              onClick={() => setPage(page + 1)}
              className="bg-secondary py-2 px-5 rounded-md hover:bg-zinc-800 transition"
            >
              Daha Fazla
            </button>
          ) : (
            <BasicLoader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Reuslts;
