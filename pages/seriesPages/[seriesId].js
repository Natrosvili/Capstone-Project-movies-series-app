import MoviesSeriesPageSection from "../../components/MoviesSeriesPageSection";
import {useRouter} from "next/router";
import {useState, useEffect} from "react";

export default function SeriesPage() {
  const router = useRouter();
  const {seriesId} = router.query;
  const [reload, setReload] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/data");
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          throw new Error(
            `Fetch fehlgeschlagen mit Status: ${response.status}`
          );
        }
      } catch (error) {
        alert(error.message);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (router.isReady) {
      setReload(true);
    }
  }, [router.isReady]);

  return (
    <>
      {reload && data && (
        <MoviesSeriesPageSection
          data={data?.series[seriesId - 1]}
          altImage="series' image"
          text="Watch The Latest Season"
        />
      )}
    </>
  );
}
