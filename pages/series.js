import SeriesSection from "../components/SeriesSection";

export default function Series() {
  return (
    <>
      <section style={{backgroundColor: "#010101", paddingTop: "20%"}}>
        <SeriesSection genre="Action" />
        <SeriesSection genre="Adventure" />
        <SeriesSection genre="Comedy" />
        <SeriesSection genre="Drama" />
      </section>
    </>
  );
}
