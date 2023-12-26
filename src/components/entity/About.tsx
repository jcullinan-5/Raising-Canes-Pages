import type { Image as ImageType, CTA as CTAType } from "@yext/types";
import type { Hours } from "@yext/types";
// import { HoursTable } from "@yext/sites-react-components";
import { Link, Image } from "@yext/sites-components";
import defaultImage from "/src/assets/images/locations-universal-restaurant.jpg";
// import React, { useState } from "react";

type AboutProps = {
  image?: ImageType;
  title: string;
  description?: string;
  cta?: CTAType;
  hours?: Hours;
};

const About = (props: AboutProps) => {
  return (
    <div>
      <section className="about--section">
        <div className="about--image--wrapper">
          {props.image && (
            <div className="about--image--wrapper--constrained">
              <div
                style={{
                  maxWidth: "720px",
                  display: "block",
                }}
              ></div>
              <div>
                <Image image={props.image} className="about--image" />
              </div>
            </div>
          )}
          {!props.image && (
            <div className="about--image--wrapper--constrained">
              <div
                style={{
                  maxWidth: "720px",
                  display: "block",
                }}
              ></div>
              <div>
                <div>
                  <img
                    src={defaultImage}
                    alt="Default Description"
                    className="about--image"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="about--content--wrapper">
          <div className="about--content">
            <div className="about--eyebrow">
              <svg width="100%" height="100%" viewBox="0 0 34 8" fill="none">
                <g clip-path="url(#clip0_3221_44458)">
                  <path
                    d="M6.07091 0L0.0722656 7.00463H1.44638L7.44502 0H6.07091Z"
                    fill="#F0D6B4"
                  ></path>
                  <path
                    d="M10.9713 0L4.97266 7.00463H6.34677L12.3454 0H10.9713Z"
                    fill="#F0D6B4"
                  ></path>
                  <path
                    d="M15.8717 0L9.87305 7.00463H11.2472L17.2458 0H15.8717Z"
                    fill="#F0D6B4"
                  ></path>
                  <path
                    d="M20.7721 0L14.7734 7.00463H16.1476L22.1462 0H20.7721Z"
                    fill="#F0D6B4"
                  ></path>
                  <path
                    d="M25.6725 0L19.6738 7.00463H21.0479L27.0466 0H25.6725Z"
                    fill="#F0D6B4"
                  ></path>
                  <path
                    d="M30.5729 0L24.5742 7.00463H25.9539L31.947 0H30.5729Z"
                    fill="#F0D6B4"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_3221_44458">
                    <rect
                      width="33.1066"
                      height="7.00463"
                      fill="white"
                      transform="translate(0.0722656)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2>{props.title}</h2>
            {props.description && (
              <p className="about-details block">{props.description}</p>
            )}
            {props.cta && <Link cta={props.cta} />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
//src/assets/images/locations-universal-restaurant.jpg

// about section in dev:
// const About = (props: AboutProps) => {
//   const [activeSection, setActiveSection] = useState("location-details");

//   const handleSectionChange = (section: string) => {
//     setActiveSection(section);
//   };

//   return (
//     <div>
//       <section className="secondaryNavigation-module--secondary-navigation--a72f6">
//         <a
//           className="global-module--skip-link--34ebf"
//           href="#skip-element-6m6ssq8kv4plpwgqbwk"
//         >
//           <span>Skip secondary navigation links</span>
//         </a>
//         <div className="secondaryNavigation-module--nav-items--c4898">
//           <div
//             className={`secondaryNavigation-module--nav-item--26064 ${
//               activeSection === "location-details"
//                 ? "secondaryNavigation-module--active--91a0d"
//                 : ""
//             }`}
//           >
//             <div
//               role="button"
//               tabIndex={0}
//               onClick={() => handleSectionChange("location-details")}
//             >
//               Location Details
//             </div>
//           </div>
//           <div
//             className={`secondaryNavigation-module--nav-item--26064 ${
//               activeSection === "about-details"
//                 ? "secondaryNavigation-module--active--91a0d"
//                 : ""
//             }`}
//           >
//             <div
//               role="button"
//               tabIndex={0}
//               onClick={() => handleSectionChange("about-details")}
//             >
//               About This Restaurant
//             </div>
//           </div>
//           <div
//             className={`secondaryNavigation-module--nav-item--26064 ${
//               activeSection === "careers"
//                 ? "secondaryNavigation-module--active--91a0d"
//                 : ""
//             }`}
//           >
//             <div
//               role="button"
//               tabIndex={0}
//               onClick={() => handleSectionChange("careers")}
//             >
//               Careers
//             </div>
//           </div>
//           <div
//             className={`secondaryNavigation-module--nav-item--26064 ${
//               activeSection === "community"
//                 ? "secondaryNavigation-module--active--91a0d"
//                 : ""
//             }`}
//           >
//             <div
//               role="button"
//               tabIndex={0}
//               onClick={() => handleSectionChange("community")}
//             >
//               Our Community
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="about--section">
//         <div className="about--image--wrapper">
//           {props.image && (
//             <div className="about--image--wrapper--constrained">
//               <div
//                 style={{
//                   maxWidth: "720px",
//                   display: "block",
//                 }}
//               ></div>
//               <div>
//                 <Image image={props.image} className="about--image" />
//               </div>
//             </div>
//           )}
//           {!props.image && (
//             <div className="about--image--wrapper--constrained">
//               <div
//                 style={{
//                   maxWidth: "720px",
//                   display: "block",
//                 }}
//               ></div>
//               <div>
//                 <div>
//                   <img
//                     src={defaultImage}
//                     alt="Default Description"
//                     className="about--image"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="about--content--wrapper">
//           <div className="about--content">
//             <div className="about--eyebrow">
//               <svg width="100%" height="100%" viewBox="0 0 34 8" fill="none">
//                 <g clip-path="url(#clip0_3221_44458)">
//                   <path
//                     d="M6.07091 0L0.0722656 7.00463H1.44638L7.44502 0H6.07091Z"
//                     fill="#F0D6B4"
//                   ></path>
//                   <path
//                     d="M10.9713 0L4.97266 7.00463H6.34677L12.3454 0H10.9713Z"
//                     fill="#F0D6B4"
//                   ></path>
//                   <path
//                     d="M15.8717 0L9.87305 7.00463H11.2472L17.2458 0H15.8717Z"
//                     fill="#F0D6B4"
//                   ></path>
//                   <path
//                     d="M20.7721 0L14.7734 7.00463H16.1476L22.1462 0H20.7721Z"
//                     fill="#F0D6B4"
//                   ></path>
//                   <path
//                     d="M25.6725 0L19.6738 7.00463H21.0479L27.0466 0H25.6725Z"
//                     fill="#F0D6B4"
//                   ></path>
//                   <path
//                     d="M30.5729 0L24.5742 7.00463H25.9539L31.947 0H30.5729Z"
//                     fill="#F0D6B4"
//                   ></path>
//                 </g>
//                 <defs>
//                   <clipPath id="clip0_3221_44458">
//                     <rect
//                       width="33.1066"
//                       height="7.00463"
//                       fill="white"
//                       transform="translate(0.0722656)"
//                     ></rect>
//                   </clipPath>
//                 </defs>
//               </svg>
//             </div>
//             <h2
//               style={{
//                 display: activeSection === "about-details" ? "block" : "none",
//               }}
//             >
//               {props.title}
//             </h2>
//             {props.description && (
//               <p
//                 style={{
//                   display: activeSection === "about-details" ? "block" : "none",
//                 }}
//               >
//                 {props.description}
//               </p>
//             )}
//             {props.cta && <Link cta={props.cta} />}
//           </div>
//           <div
//             className={`about--location--details ${
//               activeSection === "location-details" ? "active" : ""
//             }`}
//           >
//             <h2
//               style={{
//                 display:
//                   activeSection === "location-details" ? "block" : "none",
//               }}
//             >
//               Details
//             </h2>
//             {props.hours && (
//               //    <div className="hero--hours">
//               //    <HoursStatus
//               //      hours={props.hours}
//               //    />
//               //  </div>
//               <div
//                 className="about--hours"
//                 style={{
//                   display:
//                     activeSection === "location-details" ? "block" : "none",
//                 }}
//               >
//                 <HoursTable
//                   hours={props.hours}
//                   startOfWeek="Sunday"
//                   // dayOfWeekNames={dayAbbreviations}
//                 />
//               </div>
//             )}
//           </div>
//           <div
//             className={`about--careers ${
//               activeSection === "careers" ? "active" : ""
//             }`}
//           >
//             <h2
//               style={{
//                 display: activeSection === "careers" ? "block" : "none",
//               }}
//             >
//               Careers
//             </h2>
//           </div>
//           <div
//             className={`about--community ${
//               activeSection === "community" ? "active" : ""
//             }`}
//           >
//             <h2
//               style={{
//                 display: activeSection === "community" ? "block" : "none",
//               }}
//             >
//               Community
//             </h2>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };
