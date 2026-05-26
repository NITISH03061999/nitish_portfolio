import React, {useState, useRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = useRef(null);

  function getColorArrays() {
    if (!imgRef.current) return;

    try {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(imgRef.current);
      setColorArrays(color);
    } catch (e) {
      console.warn("ColorThief failed:", e);
    }
  }

  function rgb(values) {
    return values ? `rgb(${values.join(", ")})` : null;
  }

  const GetDescBullets = ({descBullets, isDark}) =>
    descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        className="experience-banner"
        style={{
          background: colorArrays.length ? rgb(colorArrays) : "transparent"
        }}
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        {cardInfo.companylogo && (
          <img
            crossOrigin="anonymous"
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={getColorArrays}
          />
        )}
      </div>

      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>

        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>

        <p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>

        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
