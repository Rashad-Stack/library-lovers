import PropTypes from "prop-types";
import AppButton from "./AppButton";
import BookBorrowForm from "./BookBorrowForm";

export default function SliderContent({ book }) {
  return (
    <>
      <div className="bg-brand-white w-full p-4 shadow-sm">
        <div className="bg-brand-gray flex justify-evenly p-5 max-md:flex-col max-md:gap-4">
          <div className="max-w-lg space-y-4 max-md:order-2">
            <h4 className="text-lg text-gray-500">{book.author}</h4>
            <h2 className="text-brand-text text-lg font-bold sm:text-3xl">
              {book.name}
            </h2>
            <p className="text-brand-text text-sm">{book.short_description}</p>
            <div className="flex gap-2">
              <AppButton
                type="button"
                title="Borrow"
                handleClick={() => {
                  document.getElementById("my_modal_1").showModal();
                }}
              />
              <AppButton title="Read" to={`/books/reading/${book.id}`} />
            </div>
          </div>

          <div className="drop-shadow-lg max-md:order-1">
            <img
              src={book.image}
              alt={book.name}
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-brand-white">
          <BookBorrowForm />
        </div>
      </dialog>
    </>
  );
}

SliderContent.propTypes = {
  book: PropTypes.object.isRequired,
};
