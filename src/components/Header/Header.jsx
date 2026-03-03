import React, { useEffect, useMemo, useRef, useState } from "react";

import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/header.css";
import carData from "../../assets/data/carData";
import blogData from "../../assets/data/blogData";
import { useCart } from "../../context/CartContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  // const menuRef = useRef(null);
  const [click, setClick] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const headerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const navigate = useNavigate();
  const { totalItems } = useCart();
  // const toggleMenu = () =>
  //   menuRef.current.classList.toggle("menu__active open");

    

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { cars: [], blogs: [] };

    const cars = carData
      .filter((c) =>
        [c.carName, c.brand, c.model].some((v) =>
          String(v || "")
            .toLowerCase()
            .includes(q)
        )
      )
      .slice(0, 5);

    const blogs = blogData
      .filter((b) =>
        [b.title, b.author].some((v) =>
          String(v || "")
            .toLowerCase()
            .includes(q)
        )
      )
      .slice(0, 5);

    return { cars, blogs };
  }, [query]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (!headerRef.current) return;
      const height = headerRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--app-header-height", `${Math.ceil(height)}px`);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY || 0;
      const prev = lastScrollYRef.current;
      const scrollingDown = current > prev;
      lastScrollYRef.current = current;

      if (current < 40) {
        setHidden(false);
        return;
      }

      if (scrollingDown) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showDropdown = isFocused && !!query.trim();

  const onSubmitSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    const exactCar = carData.find((c) => c.carName.toLowerCase() === q.toLowerCase());
    if (exactCar) {
      setClick(false);
      navigate(`/cars/${encodeURIComponent(exactCar.carName)}`);
      return;
    }

    const exactBlog = blogData.find((b) => b.title.toLowerCase() === q.toLowerCase());
    if (exactBlog) {
      setClick(false);
      navigate(`/blogs/${encodeURIComponent(exactBlog.title)}`);
      return;
    }

    setClick(false);
    navigate(`/cars?search=${encodeURIComponent(q)}`);
  };

  return (
    <header
      ref={headerRef}
      className={hidden ? "header header--hidden" : "header"}
    >
      <div className="header__main">
        <div className="header__info">
          <Container fluid>
            <div className="header__info-row">
              <div className="header__info-left">
                <span className="header__info-item">
                  <i className="ri-map-pin-line"></i> Gweru CBD, Zimbabwe
                </span>
                <span className="header__info-item">
                  <i className="ri-phone-fill"></i> +263 78 252 8050 / +263 71 626 4988
                </span>
                <span className="header__info-item d-md-none">
                  <i className="ri-time-line"></i> Mon - Sat 8am - 5pm, Sun 10am - 2pm
                </span>
              </div>

              <div className="header__info-right d-none d-lg-flex">
                <span className="header__info-item">
                  <i className="ri-time-line"></i> Mon - Sat 8am - 5pm, Sun 10am - 2pm
                </span>
              </div>
            </div>
          </Container>
        </div>

        <div className="header__bar">
          <Container fluid>
            <div className="header__bar-row">
              <div className="header__brand">
                <Link to="/home" className="header__brand-link" onClick={() => setClick(false)}>
                  <img className="header__logo" src="/logo.jpg" alt="White Lions Legacies" />
                  <span className="header__brand-name">White Lions Legacies</span>
                </Link>
              </div>

              <div className={click ? "header__menu open" : "header__menu"}>
                <nav className="header__nav">
                  {navLinks.map((item, index) => (
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "header__nav-link active" : "header__nav-link"
                      }
                      key={index}
                      onClick={() => setClick(false)}
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </nav>

                <form className="header__search" onSubmit={onSubmitSearch}>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      window.setTimeout(() => setIsFocused(false), 120);
                    }}
                    type="text"
                    placeholder="Search cars or blogs (e.g. Toyota Aqua)"
                    aria-label="Search"
                  />
                  <button className="header__search-btn" type="submit" aria-label="Search">
                    <i className="ri-search-line"></i>
                  </button>

                  {showDropdown && (
                    <div className="header__search-dropdown" role="listbox">
                      {(suggestions.cars.length > 0 || suggestions.blogs.length > 0) && (
                        <>
                          {suggestions.cars.length > 0 && (
                            <div className="header__search-group">
                              <div className="header__search-group-title">Cars</div>
                              {suggestions.cars.map((c) => (
                                <button
                                  type="button"
                                  key={`car-${c.id}`}
                                  className="header__search-item"
                                  onClick={() => {
                                    setQuery(c.carName);
                                    setClick(false);
                                    navigate(`/cars/${encodeURIComponent(c.carName)}`);
                                  }}
                                >
                                  <span className="header__search-item-title">{c.carName}</span>
                                  <span className="header__search-item-meta">{c.brand}</span>
                                </button>
                              ))}
                            </div>
                          )}

                          {suggestions.blogs.length > 0 && (
                            <div className="header__search-group">
                              <div className="header__search-group-title">Blogs</div>
                              {suggestions.blogs.map((b) => (
                                <button
                                  type="button"
                                  key={`blog-${b.id}`}
                                  className="header__search-item"
                                  onClick={() => {
                                    setQuery(b.title);
                                    setClick(false);
                                    navigate(`/blogs/${encodeURIComponent(b.title)}`);
                                  }}
                                >
                                  <span className="header__search-item-title">{b.title}</span>
                                  <span className="header__search-item-meta">Read</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </>
                      )}

                      {suggestions.cars.length === 0 && suggestions.blogs.length === 0 && (
                        <div className="header__search-empty">
                          No matches. Press Enter to search car listings.
                        </div>
                      )}
                    </div>
                  )}
                </form>

                <div className="header__menu-actions d-md-none">
                  <NavLink to="/cart" className="header__cart" onClick={() => setClick(false)}>
                    <i className="ri-shopping-cart-2-line"></i>
                    <span>Cart</span>
                    {totalItems > 0 && <span className="header__cart-badge">{totalItems}</span>}
                  </NavLink>

                  <a className="header__btn header__btn--full" href="tel:+263782528050">
                    Call
                  </a>
                </div>
              </div>

              <div className="header__right">
                <div className="header__right-actions d-none d-md-flex">
                  <NavLink to="/cart" className="header__cart" onClick={() => setClick(false)}>
                    <i className="ri-shopping-cart-2-line"></i>
                    <span className="d-none d-lg-inline">Cart</span>
                    {totalItems > 0 && <span className="header__cart-badge">{totalItems}</span>}
                  </NavLink>

                  <a className="header__btn" href="tel:+263782528050">
                    Call
                  </a>
                </div>

                <button
                  type="button"
                  className="header__toggle"
                  onClick={() => setClick(!click)}
                  aria-label="Toggle menu"
                >
                  <span className={click ? "hamburger open" : "hamburger"}>
                    <span></span>
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  );
};

export default Header;
