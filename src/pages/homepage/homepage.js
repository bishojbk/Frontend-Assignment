import React, { useState, useEffect } from "react";

import "./homepage.styles.scss";

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const threshold = 0;

    if (window.scrollY > threshold) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsHidden(false);
  };

  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
    setIsHidden(false);
  };

  return (
    <div className="homepage-section">
      <div className="container">
        <div className="homepage-section_navbar">
          <nav class="navbar navbar-expand-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              className="logo"
            >
              <path
                opacity="0.8"
                d="M22 0C9.84969 0 0 9.84974 0 22C0 34.1503 9.84969 44 22 44C32.901 44 41.9502 36.0716 43.6958 25.6667H43.5379C41.9098 31.9925 36.1674 36.6667 29.3333 36.6667C21.2332 36.6667 14.6667 30.1002 14.6667 22C14.6667 13.8998 21.2332 7.33333 29.3333 7.33333C36.1674 7.33333 41.9098 12.0075 43.5379 18.3333H43.6958C41.9502 7.92838 32.901 0 22 0Z"
                fill="white"
              />
              <path
                d="M0 22C0 9.84974 9.84974 0 22 0C32.901 0 41.9502 7.92838 43.6958 18.3333H28.8713C27.2431 12.0075 21.5007 7.33333 14.6667 7.33333C6.56649 7.33333 0 13.8998 0 22Z"
                fill="white"
              />
              <path
                d="M0 22C0 34.1503 9.84974 44 22 44C32.901 44 41.9502 36.0716 43.6958 25.6667H28.8713C27.2431 31.9925 21.5007 36.6667 14.6667 36.6667C6.56649 36.6667 0 30.1002 0 22Z"
                fill="white"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="103"
              height="28"
              viewBox="0 0 103 28"
              fill="none"
              className="name"
            >
              <path
                d="M18.4386 7.50706C17.8122 2.98291 14.3321 0.35791 9.81791 0.35791C4.49831 0.35791 0.491211 4.23575 0.491211 10.8181C0.491211 17.3906 4.4486 21.2784 9.81791 21.2784C14.6602 21.2784 17.8719 18.1463 18.4386 14.2585L14.7199 14.2386C14.2526 16.625 12.3037 17.9673 9.86763 17.9673C6.56649 17.9673 4.20002 15.4914 4.20002 10.8181C4.20002 6.22439 6.54661 3.66899 9.87757 3.66899C12.3534 3.66899 14.2923 5.07098 14.7199 7.50706H18.4386Z"
                fill="white"
              />
              <path
                d="M26.0526 21.3082C28.4489 21.3082 29.8808 20.1846 30.537 18.9019H30.6563V21H34.1166V10.7784C34.1166 6.74143 30.8254 5.52837 27.912 5.52837C24.7004 5.52837 22.2345 6.96018 21.439 9.74428L24.7998 10.2215C25.1578 9.17751 26.172 8.28263 27.9319 8.28263C29.6024 8.28263 30.5171 9.13774 30.5171 10.6392V10.6988C30.5171 11.7329 29.4333 11.7826 26.7387 12.071C23.7757 12.3892 20.9418 13.2741 20.9418 16.7144C20.9418 19.7173 23.1393 21.3082 26.0526 21.3082ZM26.9873 18.6633C25.4859 18.6633 24.412 17.9772 24.412 16.6548C24.412 15.2727 25.6151 14.696 27.2259 14.4673C28.1705 14.338 30.0597 14.0994 30.5271 13.7215V15.5213C30.5271 17.2215 29.1549 18.6633 26.9873 18.6633Z"
                fill="white"
              />
              <path
                d="M45.3623 5.72723H42.3495V2.06814H38.7501V5.72723H36.5825V8.51132H38.7501V17.0028C38.7302 19.8764 40.8183 21.2883 43.5228 21.2088C44.547 21.1789 45.2529 20.9801 45.6407 20.8508L45.0342 18.0369C44.8353 18.0866 44.4276 18.1761 43.9802 18.1761C43.0754 18.1761 42.3495 17.8579 42.3495 16.4062V8.51132H45.3623V5.72723Z"
                fill="white"
              />
              <path
                d="M52.7675 21.3082C55.1638 21.3082 56.5956 20.1846 57.2519 18.9019H57.3712V21H60.8314V10.7784C60.8314 6.74143 57.5402 5.52837 54.6269 5.52837C51.4152 5.52837 48.9493 6.96018 48.1538 9.74428L51.5146 10.2215C51.8726 9.17751 52.8868 8.28263 54.6467 8.28263C56.3172 8.28263 57.232 9.13774 57.232 10.6392V10.6988C57.232 11.7329 56.1482 11.7826 53.4536 12.071C50.4905 12.3892 47.6567 13.2741 47.6567 16.7144C47.6567 19.7173 49.8541 21.3082 52.7675 21.3082ZM53.7021 18.6633C52.2007 18.6633 51.1269 17.9772 51.1269 16.6548C51.1269 15.2727 52.33 14.696 53.9408 14.4673C54.8854 14.338 56.7746 14.0994 57.2419 13.7215V15.5213C57.2419 17.2215 55.8697 18.6633 53.7021 18.6633Z"
                fill="white"
              />
              <path
                d="M68.0501 0.636319H64.4507V21H68.0501V0.636319Z"
                fill="white"
              />
              <path
                d="M78.4134 21.2983C82.8878 21.2983 85.7316 18.1463 85.7316 13.4233C85.7316 8.6903 82.8878 5.52837 78.4134 5.52837C73.939 5.52837 71.0952 8.6903 71.0952 13.4233C71.0952 18.1463 73.939 21.2983 78.4134 21.2983ZM78.4333 18.4147C75.9575 18.4147 74.7444 16.2073 74.7444 13.4133C74.7444 10.6193 75.9575 8.38206 78.4333 8.38206C80.8694 8.38206 82.0825 10.6193 82.0825 13.4133C82.0825 16.2073 80.8694 18.4147 78.4333 18.4147Z"
                fill="white"
              />
              <path
                d="M95.4287 27.0454C99.5551 27.0454 102.598 25.1562 102.598 21.2485V5.72723H99.048V8.2528H98.8491C98.3023 7.1491 97.1588 5.52837 94.4642 5.52837C90.9344 5.52837 88.1602 8.29257 88.1602 13.3139C88.1602 18.2954 90.9344 20.7812 94.4542 20.7812C97.0693 20.7812 98.2923 19.3792 98.8491 18.2556H99.0281V21.1491C99.0281 23.3963 97.5366 24.321 95.4883 24.321C93.3207 24.321 92.3662 23.2968 91.9287 22.4019L88.6872 23.1875C89.3435 25.3252 91.5409 27.0454 95.4287 27.0454ZM95.4585 17.9573C93.0821 17.9573 91.8292 16.1079 91.8292 13.294C91.8292 10.5198 93.0622 8.48149 95.4585 8.48149C97.7753 8.48149 99.048 10.4005 99.048 13.294C99.048 16.2073 97.7554 17.9573 95.4585 17.9573Z"
                fill="white"
              />
            </svg>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">Home</li>
                <li class="nav-item">About Us</li>
                <li class="nav-item">Case Studies</li>
                <li>
                  <div className="dropdown-container">
                    <button
                      className="dropdown-button"
                      onClick={toggleDropdown}
                    >
                      Resources
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="dropdown"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="white"
                          stroke-width="1.67"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div
                        className={`dropdown-items  ${
                          isHidden ? "hidden" : ""
                        }`}
                      >
                        <div className="d-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20M4 19.5C4 20.163 4.26339 20.7989 4.73223 21.2678C5.20107 21.7366 5.83696 22 6.5 22H20V2H6.5C5.83696 2 5.20107 2.26339 4.73223 2.73223C4.26339 3.20107 4 3.83696 4 4.5V19.5Z"
                              stroke="#1D6FA3"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div>
                            <h4>Blog</h4>
                            <p>The latest industry news, updates and info.</p>
                          </div>
                        </div>

                        <div className="d-flex secondchild">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                              stroke="#1D6FA3"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div>
                            <h4>Customer stories</h4>
                            <p>
                              Learn how our customers are making big <br />
                              changes..
                            </p>
                          </div>
                        </div>

                        <div className="d-flex thirdchild">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="#1D6FA3"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10 8L16 12L10 16V8Z"
                              stroke="#1D6FA3"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div>
                            <h4>Video tutorials</h4>
                            <p>
                              Get up and running on new features and <br />
                              techniques.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <div className="search-icon" onClick={toggleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="search-icon"
            >
              <path
                d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {isOpenSearch && (
              <div
                className={`searchitem  ${isHidden ? "hidden" : ""}
                }`}
              >
                <div className="searchbar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                      stroke="#62696F"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span>Search</span>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="cross"
                >
                  <rect width="20" height="20" rx="10" fill="#F5F5F5" />
                  <mask
                    id="mask0_110_5723"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#585858" />
                  </mask>
                  <g mask="url(#mask0_110_5723)">
                    <path
                      d="M5.33341 15.8334L4.16675 14.6667L8.83342 10.0001L4.16675 5.33341L5.33341 4.16675L10.0001 8.83342L14.6667 4.16675L15.8334 5.33341L11.1667 10.0001L15.8334 14.6667L14.6667 15.8334L10.0001 11.1667L5.33341 15.8334Z"
                      fill="#585858"
                    />
                  </g>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr />

      <div className="container">
        <div className="homepage-section_banner">
          <h1>Beautiful analytics to grow smarter</h1>
          <p className="mt-4">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <button>
            Why Catalog?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_109_3220"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_109_3220)">
                <path
                  d="M12 20L10.575 18.6L16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
