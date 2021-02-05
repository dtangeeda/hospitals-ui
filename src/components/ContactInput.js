import React from "react";
import { Typography, Checkbox, Button, Input } from "antd";
const { TextArea } = Input;
const { Link } = Typography;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default function ContactInput() {
  return (
    <div className="textarea">
      <label>Message</label>
      <TextArea rows={4} style={{ resize: "none" }} />
      <div className="Terms-details">
        <Checkbox onChange={onChange}> </Checkbox>
        <p className="contact-para">I have read and I agree to the</p>
        <Link href="https://ant.design" target="_blank" className="linkk">
          terms, privacy
        </Link>
        {/* <p className=" contact-para"> and  </p> */}
        <Link href="https://ant.design" target="_blank">
          offer details
        </Link>
        <br></br>
        <Button
          style={{
            width: "161px",
            background: "#2685d3",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
