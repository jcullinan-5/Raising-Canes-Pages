import { HoursTable } from "@yext/sites-react-components";
import { getDirections, LocationMap, GoogleMaps } from "@yext/sites-components";
import { Link } from "@yext/sites-components";
import type { LocationProfile } from "src/types/entities";
import type { Address, Hours, CTA, Image as ImageType } from "@yext/types";
// import { useBreakpoint } from "src/common/useBreakpoints";
// import { LazyLoadWrapper } from "src/components/common/LazyLoadWrapper";
import { useMapKey } from "src/common/useMapKey";
import Distance from "src/components/entity/Distance";

type HeroProps = {
  profile: LocationProfile;
  name: string;
  address: Address;
  background?: ImageType;
  cta1?: CTA;
  cta2?: CTA;
  hours?: Hours;
  numReviews?: number;
  rating?: number;
};

// const dayAbbreviations = {
//   Sunday: "Sun",
//   Monday: "Mon",
//   Tuesday: "Tue",
//   Wednesday: "Wed",
//   Thursday: "Thu",
//   Friday: "Fri",
//   Saturday: "Sat",
// };

const Hero = (props: HeroProps) => {
  const mapKey = useMapKey();

  return (
    <section className="module--location-details">
      <div className="module--details-hero">
        <Distance yextDisplayCoordinate={props.profile.yextDisplayCoordinate} />
        <h1 className="module--title-hero">{props.profile.name}</h1>
        <div className="module--hours-wrapper">
          <p className="module--hours-title--hero">Hours of Operation:</p>
          {props.hours && (
            <div className="hero--hours">
              <HoursTable hours={props.hours} startOfWeek="Sunday" />
            </div>
          )}
        </div>
        <p className="module--nickname-hero">"{props.profile.c_nickname}"</p>
        <p className="module--address-hero">
          {props.address.line1} {props.address.line2} {props.address.city},
          &nbsp;
          {props.address.region} {props.address.postalCode}
        </p>
        <p className="module--phone-hero">
          <b>Phone: </b>
          {props.profile.mainPhone}
        </p>
        <div className="module--button-container-hero">
          <a
            href="https://order.raisingcanes.com"
            className="ghost--button--responsive hero--ordernow"
          >
            Order Now
          </a>
          <Link
            className="ghost--button--responsive hero--directions "
            href={`${getDirections(
              props.profile.address,
              props.profile.ref_listings,
              props.profile.googlePlaceId
            )}`}
          >
            Get Directions
          </Link>
        </div>
      </div>
      <div className="module--map-hero">
        <div className="locationsMap-module--locations-map--41c42">
          <LocationMap
            className="module--map--285d5"
            coordinate={props.profile.yextDisplayCoordinate}
            provider={GoogleMaps}
            {...mapKey}
          >
            <div className="locationPin-module--pin--4f733">1</div>
          </LocationMap>
        </div>
      </div>
    </section>
  );
};

export default Hero;
