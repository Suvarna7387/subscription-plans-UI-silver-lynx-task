import React from "react";
import "./Plans.css";
import minus from "./Images/minus.png";
import minuswhite from "./Images/minuswhite.png"
import CardHeadImg1 from "./Images/CardHeadImg1.png";
import CheckCircleIconBlue from "./Images/CheckCircleIconBlue.png";
import CheckCircleIconWhite from "./Images/CheckCircleIconWhite.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <h4>Explore Subscription Plan</h4>
      <div className="cards-container">
        <div className="card">
          <div className="card-heading">
            <img className="card-head-img" src={CardHeadImg1} alt="Card Head" />
            <span className="card-heading-wrapper">
              <div className="eighteenpx">Free</div>
              <div className="ForEveryoneText">For Everyone</div>
            </span>
          </div>
          <div className="card-feature">
            <div>Quick Meeting</div>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconBlue}
              alt="Check Icon"
            />
            <span className="eighteenpx">Upto 15 Audience</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconBlue}
              alt="Check Icon"
            />
            <span className="eighteenpx">Unlimited Minutes</span>
          </div>
          <div className="card-feature">
            <div className="">Featured Host / Admin Control</div>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">White Board</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">AI Assistant</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Notify Audience</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon minus-icon"
              src={minus}
              alt="Check Icon"
            />
            <span className="eighteenpx">
              Only your followers (Email / Sledge Notification)
            </span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">File Sharing</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Audience Control</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Private Message</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Record</span>
          </div>
          <div className="file-Violation">
            <button className="ad-button">Get Started</button>
          </div>
        </div>
        <div className="card">
          <div className="card-heading">
            <img className="card-head-img" src={CardHeadImg1} alt="Card Head" />
            <span className="card-heading-wrapper">
              <div className="eighteenpx">Free</div>
              <div className="ForEveryoneText">For Host</div>
            </span>
          </div>
          <div className="card-feature">
            <div>Audience Pays</div>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconBlue}
              alt="Check Icon"
            />
            <span className="eighteenpx">
              Host shall set a pricing for the Event. Which the audience shall
              pay along with the platform charge.
            </span>
          </div>

          <div className="card-feature">
            <div className="">Featured Host / Admin Control</div>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">White Board</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">AI Assistant</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Notify Audience</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon minus-icon"
              src={minus}
              alt="Check Icon"
            />
            <span className="eighteenpx">
              Only your followers (Email / Sledge Notification)
            </span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">File Sharing</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Audience Control</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Private Message</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Record</span>
          </div>
          <div className="file-Violation">
            <button className="ad-button">Get Started</button>
          </div>
        </div>
        <div className="card card3">
          <div className="card-heading">
            <img className="card-head-img" src={CardHeadImg1} alt="Card Head" />
            <span className="card-heading-wrapper">
              <div className="eighteenpx">Free</div>
              <div className="card3-ForEveryoneText">For Audience</div>
              <div className="eighteenpx">Host Needs to Chargeable</div>
            </span>
          </div>
          <div className="card-feature">
            <div className="">Featured Host / Admin Control</div>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">White Board</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">AI Assistant</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Notify Audience</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon minus-icon"
              src={minuswhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">
              Only your followers (Email / Sledge Notification)
            </span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">File Sharing</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Audience Control</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Private Message</span>
          </div>
          <div className="card-feature">
            <img
              className="check-circle-icon"
              src={CheckCircleIconWhite}
              alt="Check Icon"
            />
            <span className="eighteenpx">Record</span>
          </div>
          <div className="file-Violation">
            <button className="get-button">View Payment Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
