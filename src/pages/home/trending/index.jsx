import React from "react";
import ContentWrapper from "../../../components/contentWrapper";
import "./styles.scss";
import { SwicthTabs } from "../../../components/swicthTabs";

export const Trending = () => {
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwicthTabs data={["Day", "Week"]} />
      </ContentWrapper>
    </div>
  );
};
