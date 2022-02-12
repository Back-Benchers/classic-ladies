import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slideWidth = 30;

const categories = [
  {
    category: {
      title: "Top",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00015.png",
    },
  },
  {
    category: {
      title: "T-Shirt",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00053.png",
    },
  },
  {
    category: {
      title: "Two-Piece",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00029.png",
    },
  },
  {
    category: {
      title: "Sweatshirt Co-Ord Set",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00019.png",
    },
  },
  {
    category: {
      title: "Jacket",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00041.png",
    },
  },
  {
    category: {
      title: "Top n Joggers Set",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00023.png",
    },
  },
  {
    category: {
      title: "Joggers",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00047.png",
    },
  },
  {
    category: {
      title: "Zipper Co-Ord Set",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00031.png",
    },
  },
  {
    category: {
      title: "T-shirt n Joggers Set",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00033.png",
    },
  },
  {
    category: {
      title: "Track Pant",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00055.png",
    },
  },
  {
    category: {
      title: "Trousers",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00037.png",
    },
  },
  {
    category: {
      title: "Sweatshirt",
      desc: "",
      image: "https://back-benchers.netlify.app/product_imgs/img00065.png",
    },
  },
];

const length = categories.length;
categories.push(...categories);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    category: categories[idx].category,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 1 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);
  return (
    <Link to={`/category/${item.category.title}`}>
      <li className="carousel__slide-item" style={item.styles}>
        <div className="carousel__slide-item-img-link">
          <img src={item.category.image} loading="lazy" alt={item.category.title} />
        </div>
        <div className="carousel-slide-item__body">
          <h4>{item.category.title}</h4>
          {/* <p>{item.category.desc}</p> */}
        </div>
      </li>
    </Link>
  );
};

const keys = Array.from(Array(categories.length).keys());

export const Carousel = () => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(30).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => {
              return <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
              />
            })}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((pos, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? "dot active" : "dot"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
