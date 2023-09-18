import {
  BsBookmarkHeartFill,
  BsBookmarkPlus,
  BsBookmarkX,
} from "react-icons/bs";
import { BookData } from "../types";
import { MouseEventHandler } from "react";

interface ICardProps {
  data: BookData;
  role: "default" | "favorites";
  buttonFunction1?: MouseEventHandler<HTMLButtonElement>;
  buttonFunction2?: MouseEventHandler<HTMLButtonElement>;
  favorite?: boolean;
}

function card({
  data,
  role,
  buttonFunction1,
  buttonFunction2,
  favorite,
}: ICardProps) {
  const { id, title, authors, image, previewLink } = data;

  return (
    <div key={id} className="card">
      <div className="card__wrapper">
        <div className="card__wrapper-image">
          <img src={image} alt="book thumbnail" />
        </div>
        <div className="card__wrapper-text">
          <h2>{title}</h2>
          {role === "default" && <p>{authors}</p>}
        </div>
        <div className="card__wrapper-buttons">
          {role === "default" ? (
            <>
              {favorite ? (
                <button onClick={buttonFunction1}>
                  <span>
                    Favorite <BsBookmarkHeartFill />
                  </span>
                  <span>
                    Remove <BsBookmarkX />
                  </span>
                </button>
              ) : (
                <button onClick={buttonFunction2}>
                  Add to List <BsBookmarkPlus />
                </button>
              )}
            </>
          ) : (
            <div>
              <a href={`${previewLink}`} target="_blank" rel="noopener">
                Preview
              </a>
              <button onClick={buttonFunction1}>Remove</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default card;
