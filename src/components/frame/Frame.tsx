import "./Frame.css";
import { useState } from "react";

function AvatarFrame() {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div className="avatar_frame__container">
      <div className="avatar__heading">
        <h1>Welcome! Let's create your profile</h1>
        <p>Let others get to know better! You can do these later</p>
      </div>

      <div className="avatar_container">
        <h3 className="avatar__heading">Add an avatar</h3>
        <div className="avatar__selector">
          {imageUrl.length ? (
            <div className="avatar__display">
              <img src={imageUrl} alt="image" />
            </div>
          ) : (
            <div className="avatar__display">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                stroke-linecap="round"
                strokeLinejoin="round"
                className="lucide lucide-camera"
              >
                <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                <circle cx="12" cy="13" r="3" />
              </svg>
            </div>
          )}
          <div className="avatar__input">
            <label className="btn_outline" htmlFor="file">
              Choose image
            </label>
            <input
              onChange={(e) => {
                if (e.target.files?.length) {
                  setImageUrl(URL.createObjectURL(e.target.files[0]));
                }
              }}
              type="file"
              name="file"
              id="file"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              <p>Or Choose one of our defaults</p>{" "}
            </span>
          </div>
        </div>
      </div>

      <div className="avatar__loc_container">
        <h3>Add your location</h3>
        <input placeholder="Enter a location" type="text" />
      </div>

      <div>
        <button className="btn_light">Next</button>
      </div>
    </div>
  );
}

function Card({
  index,
  cardIndex,
  setCardIndex,
}: {
  index: number;
  cardIndex: number;
  setCardIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div
      className={`card ${cardIndex === index ? "card__border_highlight" : ""}`}
      onClick={() => setCardIndex(index)}
    >
      <div
        className={`card__img_heading ${
          cardIndex === index ? "card__img_heading_translate" : ""
        }`}
      >
        <div className="card__image">
          <img src="optionCover1.svg" alt="option cover" />
        </div>
        <h3 className="card__heading">
          I'm a designer looking to share my work
        </h3>
      </div>
      <p
        className={`card__para ${
          cardIndex === index ? "card__para_display" : ""
        }`}
      >
        With over 7 million shots from a vast community of desiginer, Dribble is
        the leading source for design inspiration.
      </p>
      <div
        className={`card__checkbox ${
          cardIndex === index ? "checkbox_active" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-check"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
    </div>
  );
}

function DribbbleFrame() {
  const [cardIndex, setCardIndex] = useState(-1);
  return (
    <div>
      <div className="dribbble_frame__heading">
        <h1>What brings you to Dribble?</h1>
        <p>
          Select the options that describe you. Don't worry, you can explore
          other options later.
        </p>
      </div>

      <div className="card_container">
        {new Array(3).fill(1).map((_, i) => {
          return (
            <Card index={i} cardIndex={cardIndex} setCardIndex={setCardIndex} />
          );
        })}
      </div>

      <div className="dribbble_frame__btn_container">
        <h3>Anything else? You can select multiple</h3>
        <button className="btn_light">Finish</button>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="frame">
      <div className="frame__navbar">
        <div className="frame__logo_container">
          <svg
            width="2500"
            height="615"
            viewBox="0 0 512 126"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
          >
            <path d="M156.434 50.322c5.86 0 10.61-4.752 10.61-10.613 0-5.862-4.75-10.613-10.61-10.613-5.86 0-10.61 4.751-10.61 10.613 0 5.861 4.75 10.613 10.61 10.613zm350.16 36.261c-1.614-1.135-2.86-1.323-3.894.881-17.82 38.596-47.85 19.336-44.867 21.031 6.661-3.047 24.18-17.097 21.532-36.497-1.608-11.856-11.784-17.115-22.585-15.232-18.854 3.287-25.79 23.623-22.259 41.627.618 3.092 1.722 5.642 2.825 8.14-21.306 17.326-29.767-15.51-30.727-19.434-.038-.21 16.451-13.954 21.037-46.705 4.807-34.325-6.143-40.575-17.34-40.38-20.72.361-26.319 43.652-18.797 79.732-.63.164-3.562 1.788-8.273 1.97-3.39-10.667-17.875-20.017-21.666-16.414-9.488 9.013 2.301 26.634 10.596 28.016-4.983 30.691-36.146 23.09-30.345-15.361 10.148-18.845 17.866-46.866 16.489-63.782C357.832 8.186 353.404.162 343.39.56c-19.261.762-21.355 44.065-19.097 74.799-.112-.757-1.184 3.734-9.077 5.967-1.867-10.363-18.553-20.765-22.481-15.764-7.353 9.36 5.39 26.049 11.426 27.213-4.983 30.69-36.145 23.089-30.344-15.362 10.148-18.844 17.865-46.865 16.488-63.781-.488-5.99-4.915-14.014-14.93-13.617-19.261.763-21.355 44.066-19.097 74.8-.113-.769-1.21 3.87-9.425 6.066-.275-13.445-17.022-19.61-21.045-15.32-7.17 7.647 1.642 23.337 9.794 27.214-4.983 30.69-36.145 23.089-30.344-15.362 10.148-18.844 17.866-46.865 16.488-63.781-.487-5.99-4.915-14.014-14.93-13.617-19.26.763-20.81 46.243-18.552 76.976-6.344 27.181-27.619 61.125-24.855-6.872.273-4.77.571-6.581-1.807-8.367-1.782-1.388-5.834-.72-8.049-.665-2.692.108-3.367 1.683-3.962 4.064-1.386 6.148-1.635 12.108-1.833 20.24-.13 3.804-.435 5.579-1.9 10.766-1.463 5.186-9.81 14.665-14.38 13.08-6.34-2.18-4.26-20.078-3.072-32.375.99-9.718-2.18-14.082-10.302-15.669-4.755-.991-7.644-.839-12.596-2.4-4.683-1.476-5.742-10.334-15.73-7.382-5.463 1.616-1.951 13.191-3.264 21.77-6.455 42.201-19.886 43.36-26.117 22.86C88.46 27.31 68.515.214 56.84.214c-12.16 0-26.06 8.376-20.174 61.968-2.862-.835-3.742-1.285-6.875-1.285C12.072 60.897 0 75.221 0 92.891s12.073 31.995 29.792 31.995c10.46 0 17.804-4.757 23.366-12.116 3.629 5.197 8.048 12.196 16.129 11.881 24.087-.938 31.092-50.347 31.919-53.103 2.575.397 5.011 1.148 7.389 1.545 3.962.595 4.25 2.163 4.16 6.148-1.05 33.604 5.151 45.37 19.217 45.37 7.837 0 14.822-7.7 19.634-13.206 3.594 7.418 9.321 12.979 17.004 13.205 18.617.463 25.745-29.21 25.095-25.305-.51 3.064 6.04 25.138 25.206 25.218 23.741.1 28.154-26.008 28.68-30.381.066-.87.095-.78 0 0l-.018.265c7.537-1.402 11.426-5.443 11.426-5.443s6.052 35.965 28.47 35.56c23.28-.422 27.67-24.022 28.246-28.624.076-1.092.121-.964 0 0a20.34 20.34 0 0 0-.009.135c8.953-3.257 11.308-6.526 11.308-6.526s4.81 35.25 28.47 35.558c21.084.276 28.898-21.315 28.944-30.352 3.556.038 10.134-2.11 9.98-2.232 0 0 7.723 30.82 29.29 32.403 10.126.743 17.722-5.698 22.052-8.636 10.176 8.241 44.061 18.767 65.457-17.508 3.02-5.206-3.473-11.356-4.613-12.159zM28.937 112.92c-10.338 0-16.967-9.559-16.967-19.866 0-10.306 6.085-19.865 16.423-19.865 4.652 0 7.24.512 10.863 3.663.657 2.589 2.519 8.561 3.425 11.273 1.214 3.629 2.658 6.718 4.114 10.08-2.08 8.623-8.899 14.715-17.858 14.715zm25.192-35.765c-.43-.685-.34-.264-.821-.911-1.895-5.155-5.547-16.661-5.97-29.73-.478-14.784 1.986-32.113 9.25-32.113 4.922 0 10.153 35.12-2.46 62.754zM199.69 61.751c-1.166-8.773-1.227-47.883 8.162-46.806 5.184 2.1-3.287 39.005-8.162 46.806zm68.559 0c-1.166-8.773-1.227-47.883 8.162-46.806 5.184 2.1-3.287 39.005-8.162 46.806zm68.015.545c-1.167-8.774-1.227-47.884 8.161-46.807 5.184 2.1-3.287 39.006-8.161 46.807zm75.088-49.64c8.584-.89 8.23 36.596-9 60.262-2.222-8.554-5.629-57.325 9-60.263zm36.08 80.662c-2.757-13.927 4.367-23.074 11.711-24.077 2.567-.41 6.287 1.253 7.029 4.362 1.22 5.859-.177 14.55-16.614 25.577.024.094-1.511-2.76-2.125-5.862z" />
          </svg>
        </div>
        <div className="prev_icon__container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </div>
      </div>

      {/* <AvatarFrame /> */}
      <DribbbleFrame />
    </div>
  );
}

export default Frame;
