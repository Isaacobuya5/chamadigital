import React from "react";
import PropTypes from "prop-types";
import { Card } from "reactstrap";

import "../styles/card.css";

const CardComponent = ({ items, Icon }) => {
  const { text, total, small, medium, x_small } = items;

  // console.log(icon);
  return (
    <Card
      className={`${small ? "small_cards" : ""} ${
        medium ? "medium_cards" : ""
      } ${x_small ? "extra_small" : ""}`}
      body
      style={{
        background: "white"
      }}
    >
      {medium ? <span className="total_description">{text}</span> : ""}
      {x_small ? <span className="total_description">{text}</span> : ""}
      <Icon
        className={`${small ? "small_icons" : ""} ${
          medium ? "medium_icons" : ""
        } ${x_small ? "xsmall_icons" : ""}`}
      />
      {small ? (
        <span className="total_description">
          {total} {text}
        </span>
      ) : (
        <span className="amount">Kshs. {total}</span>
      )}
    </Card>
  );
};

CardComponent.propTypes = {
  items: PropTypes.object.isRequired,
  Icon: PropTypes.func.isRequired
};

export default CardComponent;
