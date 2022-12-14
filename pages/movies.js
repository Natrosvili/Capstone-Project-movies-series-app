import MoviesSection from "../components/MoviesSection";

export default function Movies() {
  return (
    <>
      <section style={{backgroundColor: "#010101", paddingTop: "20%"}}>
        <MoviesSection genre="Action" />
        <MoviesSection genre="Adventure" />
        <MoviesSection genre="Comedy" />
        <MoviesSection genre="Drama" />
      </section>
    </>
  );
}
