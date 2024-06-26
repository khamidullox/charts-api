import { useEffect, useState } from "react";

function useFatch(api) {
  let [data, setData] = useState(null);

  useEffect(() => {
    let getData = async () => {
      let req = await fetch(api);
      let data = await req.json();
      setData(data);
    };
    getData();
  }, [api]);

  return { data };
}

export { useFatch };
