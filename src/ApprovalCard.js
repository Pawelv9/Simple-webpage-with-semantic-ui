import React from "react";


const ApprovalCard = props => {
  return (
    <div className="ui card">
        <div className="content">{props.children}</div>
        <div className="extra content">
            <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Reject</div>
            </div>
              <button class="ui blue button">Basic Blue</button>
              <button class="ui violet button">Basic Violet</button>
        </div>
    </div>
  );
};

export default ApprovalCard;
