import { useContext, useState } from "react";
import { getImgUrl } from "../utils/cineUtility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cartState, dispatch } = useContext(CartContext);

  function handleModalClose() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  function handleMovieSelection(movie) {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  function handleAddToCart(event, movie) {
    event.stopPropagation();

    const found = cartState.cartData.find((item) => item.id === movie.id);

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      });

      toast.success(`The movie${movie.title} added to the cart`, {
        position: "bottom-right",
      });
    } else {
      toast.error(
        `The movie ${movie.title} has been added to the cart already`,
        {
          position: "bottom-right",
        }
      );
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <div onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating rating={movie.rating} />
            </div>
            <button
              className="w-full bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </div>
      </figure>
    </>
  );
}
