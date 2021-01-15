import { useState, useEffect } from "react";

// custom react hook must start with the 'use' word
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abort = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abort.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 1000);

    // this is a cleanup function. This funciton will be called by the component that is using
    // our custom hook useFetch when it will be unmounted.
    return () => abort.abort();
  }, [url]); // url means that whenever the 'url' changes it's going to rerun this function 'useEffect'

  return { data, isPending, error }; // we could also return the array. Passing the object means that
  // the order of properties doesn't matter in case of destructure them later
};

export default useFetch;
