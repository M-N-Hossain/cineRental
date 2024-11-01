import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${isDarkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
