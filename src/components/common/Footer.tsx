import { useState } from "react";

const Footer = () => {
  // State to track open/closed states of multiple nav groups
  const [navStates, setNavStates] = useState({
    food: false,
    who: false,
    gear: false,
    careers: false,
    resources: false,
  });

  const toggleNav = (group) => {
    setNavStates((prevStates) => ({
      ...prevStates,
      [group]: !prevStates[group],
    }));
  };

  const getNavGroupClass = (group) => {
    return `footerNavigationGroup-module--nav-group--85cdf ${
      navStates[group] ? "" : "footerNavigationGroup-module--closed--03b52"
    }`;
  };

  return (
    <footer data-testid="footer" className="footer-module--footer--fa9cf">
      <div className="footer-module--upper-container--77c16">
        <div className="footer-module--main-container--57f8d">
          <div className="footer-module--logo-container--21209 footer-module--select-disable--b8a2a">
            <a className="footer--a" href="/home">
              <div
                data-gatsby-image-wrapper=""
                className="gatsby-image-wrapper gatsby-image-wrapper-constrained footer-module--logo--841c3"
              >
                <div style={{ maxWidth: 256, display: "block" }}>
                  <img
                    alt=""
                    role="presentation"
                    aria-hidden="true"
                    src="data:image/svg+xml;charset=utf-8,%3Csvg height='171' width='256' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                    style={{
                      maxWidth: "100%",
                      display: "block",
                      position: "static",
                    }}
                    className="footer--logo"
                  />
                </div>
                <div
                  aria-hidden="true"
                  data-placeholder-image=""
                  style={{ opacity: 0, transition: "opacity 500ms linear 0s" }}
                />
                <img
                  data-testid="canes-logo"
                  className="footer--logo"
                  data-main-image=""
                  style={{ opacity: 1 }}
                  sizes="(min-width: 256px) 256px, 100vw"
                  decoding="async"
                  loading="lazy"
                  alt="Raising Cane's Logo"
                  src="https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C1000%2C1000&w=256&h=171"
                  srcSet="https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C1000%2C1000&w=100&h=67 100w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C1000%2C1000&w=116&h=77 116w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C1000%2C1000&w=135&h=90 135w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C1000%2C1000&w=156&h=104 156w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C1000%2C1000&w=181&h=121 181w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C1000%2C1000&w=210&h=140 210w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C1000%2C1000&w=244&h=163 244w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C1000%2C1000&w=256&h=171 256w"
                />
                <noscript>
                  &lt;img data-gatsby-image-ssr="" data-testid="canes-logo"
                  data-main-image="" style="opacity:0" sizes="(min-width: 256px)
                  256px, 100vw" decoding="async" loading="lazy"
                  src="https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C1000%2C1000&amp;amp;w=256&amp;amp;h=171"
                  srcset="https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C1000%2C1000&amp;amp;w=100&amp;amp;h=67
                  100w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C1000%2C1000&amp;amp;w=116&amp;amp;h=77
                  116w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C1000%2C1000&amp;amp;w=135&amp;amp;h=90
                  135w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C1000%2C1000&amp;amp;w=156&amp;amp;h=104
                  156w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C1000%2C1000&amp;amp;w=181&amp;amp;h=121
                  181w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C1000%2C1000&amp;amp;w=210&amp;amp;h=140
                  210w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C1000%2C1000&amp;amp;w=244&amp;amp;h=163
                  244w,https://images.prismic.io/raisingcanes/93a74859-268e-46ce-aa54-653a804c82cd_raising-canes-web-logo_0825_square.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C1000%2C1000&amp;amp;w=256&amp;amp;h=171
                  256w" alt="Raising Cane&amp;#x27;s Logo"&gt;
                </noscript>
              </div>
            </a>
          </div>
          <a
            className="global-module--skip-link--34ebf"
            href="#skip-element-l3w24ig0idnlowqr1f2-social-links"
          >
            <span>Skip social media links</span>
          </a>
          <ul
            data-testid="social-media-container"
            className="footer-module--social-media-container--8924f footer-module--select-disable--b8a2a"
          >
            <li className="footer-module--social-media-link--dbe4d">
              <a
                href="https://twitter.com/raisingcanes"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div style={{ maxWidth: 20, display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg height='20' width='20' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 0,
                      transition: "opacity 500ms linear 0s",
                    }}
                  />
                  <img
                    data-testid="social-media-image"
                    data-main-image=""
                    style={{ opacity: 1 }}
                    className="social-media-image"
                    decoding="async"
                    loading="lazy"
                    alt="Twitter"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20"
                    srcSet="https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20 20w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=100&h=100 100w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=116&h=116 116w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=135&h=135 135w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=156&h=156 156w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=181&h=181 181w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=210&h=210 210w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=244&h=244 244w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=256&h=256 256w"
                  />
                  <noscript>
                    &lt;img data-gatsby-image-ssr=""
                    data-testid="social-media-image" data-main-image=""
                    style="opacity:0" sizes="(min-width: 20px) 20px, 100vw"
                    decoding="async" loading="lazy"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20"
                    srcset="https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20
                    20w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=100&amp;amp;h=100
                    100w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=116&amp;amp;h=116
                    116w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=135&amp;amp;h=135
                    135w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=156&amp;amp;h=156
                    156w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=181&amp;amp;h=181
                    181w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=210&amp;amp;h=210
                    210w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=244&amp;amp;h=244
                    244w,https://raisingcanes.cdn.prismic.io/raisingcanes/7ce5a89a-32ec-4dbc-b79d-abf6ea141b31_twitter_icon.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256&amp;amp;h=256
                    256w" alt="Twitter"&gt;
                  </noscript>
                </div>
              </a>
            </li>
            <li className="footer-module--social-media-link--dbe4d">
              <a
                href="https://www.facebook.com/RaisingCanesChickenFingers"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div style={{ maxWidth: 20, display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg height='20' width='20' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 0,
                      transition: "opacity 500ms linear 0s",
                    }}
                  />
                  <img
                    data-testid="social-media-image"
                    data-main-image=""
                    style={{ opacity: 1 }}
                    className="social-media-image"
                    decoding="async"
                    loading="lazy"
                    alt="Facebook"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20"
                    srcSet="https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20 20w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=100&h=100 100w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=116&h=116 116w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=135&h=135 135w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=156&h=156 156w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=181&h=181 181w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=210&h=210 210w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=244&h=244 244w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=256&h=256 256w"
                  />
                  <noscript>
                    &lt;img data-gatsby-image-ssr=""
                    data-testid="social-media-image" data-main-image=""
                    style="opacity:0" sizes="(min-width: 20px) 20px, 100vw"
                    decoding="async" loading="lazy"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20"
                    srcset="https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20
                    20w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=100&amp;amp;h=100
                    100w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=116&amp;amp;h=116
                    116w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=135&amp;amp;h=135
                    135w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=156&amp;amp;h=156
                    156w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=181&amp;amp;h=181
                    181w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=210&amp;amp;h=210
                    210w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=244&amp;amp;h=244
                    244w,https://raisingcanes.cdn.prismic.io/raisingcanes/dc9ba70b-5fca-44bc-bdeb-2840627c0757_facebook.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256&amp;amp;h=256
                    256w" alt="Facebook"&gt;
                  </noscript>
                </div>
              </a>
            </li>
            <li className="footer-module--social-media-link--dbe4d">
              <a
                href="https://www.youtube.com/user/RaisingCanesOneLove"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div style={{ maxWidth: 20, display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg height='20' width='20' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 0,
                      transition: "opacity 500ms linear 0s",
                    }}
                  />
                  <img
                    data-testid="social-media-image"
                    data-main-image=""
                    style={{ opacity: 1 }}
                    className="social-media-image"
                    decoding="async"
                    loading="lazy"
                    alt="Youtube"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20"
                    srcSet="https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20 20w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=100&h=100 100w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=116&h=116 116w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=135&h=135 135w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=156&h=156 156w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=181&h=181 181w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=210&h=210 210w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=244&h=244 244w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=256&h=256 256w"
                  />
                  <noscript>
                    &lt;img data-gatsby-image-ssr=""
                    data-testid="social-media-image" data-main-image=""
                    style="opacity:0" sizes="(min-width: 20px) 20px, 100vw"
                    decoding="async" loading="lazy"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20"
                    srcset="https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20
                    20w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=100&amp;amp;h=100
                    100w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=116&amp;amp;h=116
                    116w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=135&amp;amp;h=135
                    135w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=156&amp;amp;h=156
                    156w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=181&amp;amp;h=181
                    181w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=210&amp;amp;h=210
                    210w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=244&amp;amp;h=244
                    244w,https://raisingcanes.cdn.prismic.io/raisingcanes/d6bae319-7e64-4680-abaf-769dac4f2f06_youtube_icon_new.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256&amp;amp;h=256
                    256w" alt="Youtube"&gt;
                  </noscript>
                </div>
              </a>
            </li>
            <li className="footer-module--social-media-link--dbe4d">
              <a
                href="https://www.instagram.com/raisingcanes/"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div style={{ maxWidth: 20, display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg height='20' width='20' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 0,
                      transition: "opacity 500ms linear 0s",
                    }}
                  />
                  <img
                    data-testid="social-media-image"
                    data-main-image=""
                    style={{ opacity: 1 }}
                    className="social-media-image"
                    decoding="async"
                    loading="lazy"
                    alt="Instagram"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20"
                    srcSet="https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20 20w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=100&h=100 100w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=116&h=116 116w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=135&h=135 135w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=156&h=156 156w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=181&h=181 181w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=210&h=210 210w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=244&h=244 244w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=256&h=256 256w"
                  />
                  <noscript>
                    &lt;img data-gatsby-image-ssr=""
                    data-testid="social-media-image" data-main-image=""
                    style="opacity:0" sizes="(min-width: 20px) 20px, 100vw"
                    decoding="async" loading="lazy"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20"
                    srcset="https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20
                    20w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=100&amp;amp;h=100
                    100w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=116&amp;amp;h=116
                    116w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=135&amp;amp;h=135
                    135w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=156&amp;amp;h=156
                    156w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=181&amp;amp;h=181
                    181w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=210&amp;amp;h=210
                    210w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=244&amp;amp;h=244
                    244w,https://raisingcanes.cdn.prismic.io/raisingcanes/c44fc1a7-3f4a-46db-aa0b-d29e655f9f82_instagram.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256&amp;amp;h=256
                    256w" alt="Instagram"&gt;
                  </noscript>
                </div>
              </a>
            </li>
            <li className="footer-module--social-media-link--dbe4d">
              <a
                href="https://www.tiktok.com/@raisingcanes"
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <div
                  data-gatsby-image-wrapper=""
                  className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
                >
                  <div style={{ maxWidth: 20, display: "block" }}>
                    <img
                      alt=""
                      role="presentation"
                      aria-hidden="true"
                      src="data:image/svg+xml;charset=utf-8,%3Csvg height='20' width='20' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                      style={{
                        maxWidth: "100%",
                        display: "block",
                        position: "static",
                      }}
                    />
                  </div>
                  <div
                    aria-hidden="true"
                    data-placeholder-image=""
                    style={{
                      opacity: 0,
                      transition: "opacity 500ms linear 0s",
                    }}
                  />
                  <img
                    data-testid="social-media-image"
                    data-main-image=""
                    style={{ opacity: 1 }}
                    className="social-media-image"
                    decoding="async"
                    loading="lazy"
                    alt="TikTok"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20"
                    srcSet="https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=20&h=20 20w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=100&h=100 100w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=116&h=116 116w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=135&h=135 135w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=156&h=156 156w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=181&h=181 181w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=210&h=210 210w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=244&h=244 244w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&w=256&h=256 256w"
                  />
                  <noscript>
                    &lt;img data-gatsby-image-ssr=""
                    data-testid="social-media-image" data-main-image=""
                    style="opacity:0" sizes="(min-width: 20px) 20px, 100vw"
                    decoding="async" loading="lazy"
                    src="https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20"
                    srcset="https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=20&amp;amp;h=20
                    20w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=100&amp;amp;h=100
                    100w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=116&amp;amp;h=116
                    116w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=135&amp;amp;h=135
                    135w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=156&amp;amp;h=156
                    156w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=181&amp;amp;h=181
                    181w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=210&amp;amp;h=210
                    210w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=244&amp;amp;h=244
                    244w,https://raisingcanes.cdn.prismic.io/raisingcanes/07f74351-05b9-49cc-b926-39d1aaf6893b_tictoc.svg?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;w=256&amp;amp;h=256
                    256w" alt="TikTok"&gt;
                  </noscript>
                </div>
              </a>
            </li>
          </ul>
          <div id="skip-element-l3w24ig0idnlowqr1f2-social-links" />
        </div>
        <div className="footer-module--divider--6b3bf"> </div>
        <a
          className="global-module--skip-link--34ebf"
          href="#skip-element-l3w24ig0idnlowqr1f2-navigation-links"
        >
          <span>Skip footer navigation links</span>
        </a>
        <div className="footer-module--nav-container--42df1">
          <div className={getNavGroupClass("food")}>
            <button
              type="button"
              className="footerNavigationGroup-module--group-name--cbfc0"
              onClick={() => toggleNav("food")}
            >
              Food &amp; Locations
            </button>
            <div className="footerNavigationGroup-module--nav-items--c09ed">
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/menu"
              >
                Our Menu
              </a>
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/locations"
              >
                Locations
              </a>
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/food-preparation"
              >
                Food Preparation
              </a>
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/allergens"
              >
                Allergen &amp; Nutritional Information
              </a>
            </div>
          </div>
          <div className={getNavGroupClass("who")}>
            <button
              type="button"
              className="footerNavigationGroup-module--group-name--cbfc0"
              onClick={() => toggleNav("who")}
            >
              Who We Are
            </button>
            <div className="footerNavigationGroup-module--nav-items--c09ed">
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/who-we-are"
              >
                Who We Are
              </a>
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/community-partnerships"
              >
                Community Partnerships
              </a>
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/why-the-dog"
              >
                Why The Dog?
              </a>
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/caniac-club"
              >
                Caniac Club
              </a>
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/news"
              >
                News
              </a>
            </div>
          </div>
          <div className={getNavGroupClass("gear")}>
            <button
              type="button"
              className="footerNavigationGroup-module--group-name--cbfc0"
              onClick={() => toggleNav("gear")}
            >
              Cane's Gear
            </button>
            <div className="footerNavigationGroup-module--nav-items--c09ed">
              <a
                href="https://raisingcanesgear.com"
                target="_self"
                rel="noreferrer"
                className="footerNavigationGroup-module--nav-link--ea4ff"
              >
                Gift Cards &amp; Gear
              </a>
              <a
                href="https://raisingcanesgear.com/collections/apparel"
                target="_blank"
                rel="noreferrer"
                className="footerNavigationGroup-module--nav-link--ea4ff"
              >
                Apparel
              </a>
              <a
                href="https://raisingcanesgear.com/pages/gift-cards"
                target="_blank"
                rel="noreferrer"
                className="footerNavigationGroup-module--nav-link--ea4ff"
              >
                eGift Cards
              </a>
            </div>
          </div>
          <div className={getNavGroupClass("careers")}>
            <button
              type="button"
              className="footerNavigationGroup-module--group-name--cbfc0"
              onClick={() => toggleNav("careers")}
            >
              Careers
            </button>
            <div className="footerNavigationGroup-module--nav-items--c09ed">
              <a
                href="https://jobs.raisingcanes.com/jobs"
                target="_self"
                rel="noreferrer"
                className="footerNavigationGroup-module--nav-link--ea4ff"
              >
                Search Jobs
              </a>
              <a
                href="https://jobs.raisingcanes.com/why-canes"
                target="_blank"
                rel="noreferrer"
                className="footerNavigationGroup-module--nav-link--ea4ff"
              >
                Why Cane's?
              </a>
              <a
                href="https://jobs.raisingcanes.com/benefits"
                target="_blank"
                rel="noreferrer"
                className="footerNavigationGroup-module--nav-link--ea4ff"
              >
                Benefits
              </a>
            </div>
          </div>
          <div className={getNavGroupClass("resources")}>
            <button
              type="button"
              className="footerNavigationGroup-module--group-name--cbfc0"
              onClick={() => toggleNav("resources")}
            >
              Resources
            </button>
            <div className="footerNavigationGroup-module--nav-items--c09ed">
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/contact-us"
              >
                Contact Us
              </a>
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/faq"
              >
                FAQ
              </a>
              <a
                data-testid="custom-link"
                target="_self"
                className="footerNavigationGroup-module--nav-link--ea4ff"
                href="/promotions"
              >
                Promotions
              </a>
            </div>
          </div>
        </div>
        <div id="skip-element-l3w24ig0idnlowqr1f2-navigation-links" />
      </div>
      <div className="footer-module--lower-container--a3a80">
        <div className="footer-module--footer-cta--d7ab4">
          <div className="footer-module--content--8e1bc">
            <h2 className="footer-module--title--84fb3">Gift Cards</h2>
            <p>
              Looking for the perfect gift? Give the gift of Raising Cane’s this
              year to your friends and family. Shop our e-gift cards and
              physical gift cards now
            </p>
            <div className="footer-module--link-wrapper--55b02">
              <a
                href="https://raisingcanesgear.com/pages/gift-cards"
                target="_blank"
                rel="noreferrer"
                className="global-module--white-ghost-button--39ce7 footer-module--link--54bed"
              >
                Shop Gift Cards
              </a>
            </div>
          </div>
          <div className="footer-module--image--f5381">
            <div
              data-gatsby-image-wrapper=""
              className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
            >
              <div style={{ maxWidth: 720, display: "block" }}>
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg height='720' width='720' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  }}
                />
              </div>
              <div
                aria-hidden="true"
                data-placeholder-image=""
                style={{ opacity: 0, transition: "opacity 500ms linear 0s" }}
              />
              <img
                data-main-image=""
                style={{ opacity: 1 }}
                decoding="async"
                loading="lazy"
                className="footer-image-lower"
                alt=""
                src="https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=720&h=720"
                srcSet="https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=100&h=100 100w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=116&h=116 116w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=135&h=135 135w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=156&h=156 156w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=181&h=181 181w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=210&h=210 210w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=244&h=244 244w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=283&h=283 283w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=328&h=328 328w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=380&h=380 380w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=441&h=441 441w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=512&h=512 512w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=594&h=594 594w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=689&h=689 689w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=720&h=720 720w"
              />
              <noscript>
                &lt;img data-gatsby-image-ssr="" data-main-image=""
                style="opacity:0" sizes="(min-width: 720px) 720px, 100vw"
                decoding="async" loading="lazy"
                src="https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=720&amp;amp;h=720"
                srcset="https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=100&amp;amp;h=100
                100w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=116&amp;amp;h=116
                116w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=135&amp;amp;h=135
                135w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=156&amp;amp;h=156
                156w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=181&amp;amp;h=181
                181w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=210&amp;amp;h=210
                210w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=244&amp;amp;h=244
                244w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=283&amp;amp;h=283
                283w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=328&amp;amp;h=328
                328w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=380&amp;amp;h=380
                380w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=441&amp;amp;h=441
                441w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=512&amp;amp;h=512
                512w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=594&amp;amp;h=594
                594w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=689&amp;amp;h=689
                689w,https://images.prismic.io/raisingcanes/3472566b-38f7-4299-afeb-a6a351645fce_eGift%20Card%20Image.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=720&amp;amp;h=720
                720w" alt=""&gt;
              </noscript>
            </div>
          </div>
        </div>
        <div className="footer-module--footer-cta--d7ab4">
          <div className="footer-module--content--8e1bc">
            <h2 className="footer-module--title--84fb3">Shop Cane’s Gear</h2>
            <p>
              Show your love for Cane’s with Raising Cane’s apparel, hats,
              accessories, and even some gear for your pets!
            </p>
            <div className="footer-module--link-wrapper--55b02">
              <a
                href="https://raisingcanesgear.com/"
                target="_blank"
                rel="noreferrer"
                className="global-module--white-ghost-button--39ce7 footer-module--link--54bed"
              >
                Shop Cane's Gear
              </a>
            </div>
          </div>
          <div className="footer-module--image--f5381">
            <div
              data-gatsby-image-wrapper=""
              className="gatsby-image-wrapper gatsby-image-wrapper-constrained"
            >
              <div style={{ maxWidth: 720, display: "block" }}>
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src="data:image/svg+xml;charset=utf-8,%3Csvg height='720' width='720' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  }}
                />
              </div>
              <div
                aria-hidden="true"
                data-placeholder-image=""
                style={{ opacity: 0, transition: "opacity 500ms linear 0s" }}
              />
              <img
                data-main-image=""
                style={{ opacity: 1 }}
                className="footer-image-lower"
                decoding="async"
                loading="lazy"
                alt=""
                src="https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=720&h=720"
                srcSet="https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=100&h=100 100w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=116&h=116 116w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=135&h=135 135w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=156&h=156 156w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=181&h=181 181w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=210&h=210 210w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=244&h=244 244w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=283&h=283 283w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=328&h=328 328w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=380&h=380 380w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=441&h=441 441w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=512&h=512 512w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=594&h=594 594w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=689&h=689 689w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&rect=0%2C0%2C720%2C720&w=720&h=720 720w"
              />
              <noscript>
                &lt;img data-gatsby-image-ssr="" data-main-image=""
                style="opacity:0" sizes="(min-width: 720px) 720px, 100vw"
                decoding="async" loading="lazy"
                src="https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=720&amp;amp;h=720"
                srcset="https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=100&amp;amp;h=100
                100w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=116&amp;amp;h=116
                116w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=135&amp;amp;h=135
                135w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=156&amp;amp;h=156
                156w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=181&amp;amp;h=181
                181w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=210&amp;amp;h=210
                210w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=244&amp;amp;h=244
                244w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=283&amp;amp;h=283
                283w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=328&amp;amp;h=328
                328w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=380&amp;amp;h=380
                380w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=441&amp;amp;h=441
                441w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=512&amp;amp;h=512
                512w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=594&amp;amp;h=594
                594w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=689&amp;amp;h=689
                689w,https://images.prismic.io/raisingcanes/e86f4ca2-38d0-436c-a363-0fae66278a78_Retail%20Items%20Images.png?ixlib=gatsbyFP&amp;amp;auto=compress%2Cformat&amp;amp;fit=max&amp;amp;rect=0%2C0%2C720%2C720&amp;amp;w=720&amp;amp;h=720
                720w" alt=""&gt;
              </noscript>
            </div>
          </div>
        </div>
      </div>
      <div
        data-testid="copyright-item"
        className="footer-module--copyright-container--9b3ce"
      >
        <a
          className="global-module--skip-link--34ebf"
          href="#skip-element-l3w24ig0idnlowqr1f2-legal-links"
        >
          <span>Skip legal links</span>
        </a>
        <div className="footer-module--copyright-link-wrapper--dda0a">
          <a
            data-testid="custom-link"
            target="_self"
            className="footer-module--copyright-link-text--338df"
            href="/terms-of-use"
          >
            Terms of Use
          </a>
        </div>
        <div className="footer-module--copyright-link-wrapper--dda0a">
          <a
            data-testid="custom-link"
            target="_self"
            className="footer-module--copyright-link-text--338df"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
        </div>
        <div className="footer-module--copyright-link-wrapper--dda0a">
          <a
            href="https://privacyportal.onetrust.com/webform/5b573564-ef93-4cc4-9448-fbd6ede4b5e8/c3a96827-3bdd-44a9-b69d-57ed6af6bbd9"
            target="_blank"
            rel="noreferrer"
            className="footer-module--copyright-link-text--338df"
          >
            Do Not Sell or Share My Personal Information
          </a>
        </div>
        <div className="footer-module--copyright-link-wrapper--dda0a">
          <a
            data-testid="custom-link"
            target="_self"
            className="footer-module--copyright-link-text--338df"
            href="/accessibility-statement"
          >
            Accessibility Statement
          </a>
        </div>
        <div className="footer-module--copyright-link-wrapper--dda0a">
          <a
            data-testid="custom-link"
            target="_self"
            className="footer-module--copyright-link-text--338df"
            href="/the-california-transparency-in-supply-chains-act"
          >
            California Supply Chains Act
          </a>
        </div>
        <div className="footer-module--copyright-link-wrapper--dda0a">
          <a
            data-testid="custom-link"
            target="_self"
            className="footer-module--copyright-link-text--338df"
            href="/w2"
          >
            Crew W-2 Portal
          </a>
        </div>
        <div className="footer-module--copyright-link-wrapper--dda0a">
          <a
            className="footer-module--copyright-link-text--338df"
            href="#show-cookie-preferences"
          >
            Cookie Preferences
          </a>
        </div>
        <div id="skip-element-l3w24ig0idnlowqr1f2-legal-links" />
      </div>
    </footer>
  );
};

export { Footer };
