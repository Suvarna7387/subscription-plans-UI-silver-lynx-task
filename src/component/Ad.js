import React from "react";
import "./Ad.css";
import LeftCircleads from "./Images/LeftCircleads.png";
import AdsImgoneLeft from "./Images/AdsImgoneLeft.png";
import Checkcompaignimg from "./Images/Checkcompaignimg.png";

const Ad = () => {
  return (
    <div>
      <h4>Do Ad Campaigns in Sledge</h4>
      <div className="adCompaign-card-wrapper">
        <div className="adCompaign-card">
          <div className="image-container">
            <img
              className="LeftCircleads"
              src={LeftCircleads}
              alt="Left Circle Ads"
            />
            <img
              className="AdsImgoneLeft"
              src={AdsImgoneLeft}
              alt="Ads Image One Left"
            />
          </div>
          <div className="text-container">
            <div className="ad-title">How to run Ad.</div>
            <div className="ad-description">
              The Ads shall run on the public Video contents of Sledge. Which
              may have the button to navigate to the desired Website, App,
              Forms, or Other places as set by the Ad runner.
            </div>
            <button className="ad-button">Start Campaigning</button>
          </div>
        </div>
        <div className="adCompaign-card">
          <div className="image-container">
            <img
              className="LeftCircleads"
              src={LeftCircleads}
              alt="Left Circle Ads"
            />
            <img
              className="AdsImgoneLeft"
              src={Checkcompaignimg}
              alt="Ads Image One Left"
            />
          </div>
          <div className="text-container">
            <div className="ad-title">Check Campaign</div>
            <div className="ad-description">
              Check details of previous campaigns to understand the Market &
              Target your customers Effectively{" "}
            </div>
            <button className="ad-button">Previous Campaigns</button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <div className="ad-title">Help</div>
        <div className="ads-text-wrapper">
          <div className="Violationtext">Violation Filing Content</div>
          <div className="ad-description">
            Violation of Sledge Terms and condition or Sledge Guideline or Both
            can be done by click the “File Violation” Button with the Adequate
            details and proof of the such violation.Details may require is
            Screenshot, Screen video & The URL. One can also upload other
            details if relevant to situation.
          </div>
        </div>
      </div>
      <div className="file-Violation"><button className="ad-button ">File a Violation </button></div>
      
    </div>
  );
};

export default Ad;
