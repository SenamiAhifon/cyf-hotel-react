import React from "react";

function Footer(props) {
  return (
    <div>
      <ul>
        {props.contact.map(string => {
          return <li>{string}</li>;
        })}
      </ul>
    </div>
  );
}

export default Footer;
