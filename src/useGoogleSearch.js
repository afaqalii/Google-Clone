import { useState, useEffect } from "react";
import axios from "axios";

const CONTEXT_KEY = "910dab514f6fe4dcf";
const API_KEY = "AIzaSyBUKj1TmP_XGB40Xs44tMRvU5bZihKRFls";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((res) => res.json())
        .then((result) => setData(result));
    };
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
