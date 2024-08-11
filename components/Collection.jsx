import { useEffect, useState } from "react";
import * as actionCart from "../redux/actions/actionCart";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from "react-toastify";
import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { renderLoading, renderLoadingImage } from "../utilities/loader";
import Image from "next/image";
import Link from "next/link";

export default function Collection() {
  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(actionCart, dispatch);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [activeCard, setActiveCard] = useState("");
  const [cardAdded, setCardAdded] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activePlayerSearch, setActivePlayerSearch] = useState(null);
  const cartProducts = useSelector((state) => state.cartProducts);
  const searchPlayer = useSelector((state) => state.searchPlayer);
  const [productList] = useCollection(
    db.collection("products").orderBy("timestamp", "desc")
  );

  useEffect(() => {
    if (searchPlayer == "") {
      setActivePlayerSearch(null);
    } else {
      setActivePlayerSearch(searchPlayer);
    }
  }, [searchPlayer]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [activeFilter]);

  useEffect(() => {
    let updatedTotalQuantity = 0;
    cartProducts?.forEach((product) => {
      updatedTotalQuantity =
        updatedTotalQuantity + parseInt(product.quantitySelected);
    });

    if (cardAdded) {
      if (updatedTotalQuantity > totalQuantity) {
        toast.success(` ${activeCard} has been added to your cart! ⭐`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      } else {
        toast.error(
          ` 😔 you exceeds the maximum quantity allowed for ${activeCard}`,
          {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          }
        );
      }

      setCardAdded(false);
    }

    setTotalQuantity(updatedTotalQuantity);
  }, [cartProducts]);

  const addProductToCart = (product, id) => {
    addToCart({ ...product, id });
    setActiveCard(product.productName);
    setCardAdded(true);
  };

  const getCardName = (name) => {
    return (
      <span className="fw-bold lead fs-4">{`${name.slice(0, 18)}...`}</span>
    );
  };

  const getDescription = (text) => {
    return <p className="text-capitalize my-1">{`${text.slice(0, 40)}...`}</p>;
  };

  const renderCards = (item) => {
    return (
      <div className="col-md-6 col-lg-4 p-2" key={item.id}>
        <div className="collection-img position-relative d-flex justify-content-center align-items-center">
          <Link href={`/product/${item.id}`}>
            {item.data().postImage ? (
              <div className="special-img">
                <Image
                  src={item.data().postImage}
                  alt={item.data().productName}
                  width="300"
                  height="250"
                />
              </div>
            ) : (
              renderLoading()
            )}
          </Link>
        </div>
        <div className="text-start mt-3">
          {getCardName(item.data().productName)}
          <br />
          <p className="text-capitalize my-1">
            {getDescription(item.data().description)}
          </p>
          <br />
        </div>
      </div>
    );
  };

  const renderCollectionList = () => {
    let filteredProducts = productList?.docs;

    if (activeFilter && activeFilter !== "ALL") {
      filteredProducts = filteredProducts.filter(
        (product) => product.data().filter === activeFilter
      );
    }

    if (activePlayerSearch) {
      filteredProducts = filteredProducts.filter((product) => {
        const { firstName, lastName } = product.data();
        const filterText = activePlayerSearch.toLowerCase(); // Convert the filter text to lowercase

        return (
          firstName.toLowerCase().startsWith(filterText) ||
          lastName.toLowerCase().startsWith(filterText)
        );
      });
    }

    if (!filteredProducts || filteredProducts.length === 0) {
      return (
        <div className="position-relative d-flex justify-content-center align-items-center fw-bold mt-5">
          <p>No results found</p>
        </div>
      );
    }

    return filteredProducts.map((item) => renderCards(item));
  };

  return (
    <section id="collection" className="py-lg-4 pt-md-5">
      <ToastContainer />
      <div className="container">
        <div className="row g-0 mt-0 ">
          <div className="d-flex flex-wrap mt-lg-2 m-md-5 justify-content-center"></div>
          <hr />
          <div className="col-lg-3 d-lg-block d-none pe-5 py-4">
            <div className="category-list">
              {/* Category list sidebar */}
              <ul className="list-group">
                <h4>Choose here...</h4>
                <button
                  className={`list-group-item ${
                    activeFilter === "ALL" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("ALL")}
                >
                  All Categories
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "BKN" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("BKN")}
                >
                  Videos
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "BOS" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("BOS")}
                >
                  Games
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "Books" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("Books")}
                >
                  Books
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "Slideshows" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("Slideshows")}
                >
                  Slideshows
                </button>
                <button
                  className={`list-group-item ${
                    activeFilter === "Quiz" && "active-tab"
                  }`}
                  onClick={() => setActiveFilter("Quiz")}
                >
                  Quiz
                </button>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className={`collection-list row m-4 gx-0 gy-3 }`}>
              {loading ? renderLoading() : renderCollectionList()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
