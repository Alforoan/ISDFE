import "./Users.scss";
import React, { useState } from "react";
import { Flex, Form, Input, Select } from "antd";

const AccountSetUpUsers = () => {
  const options = [
    { value: "supervisor", label: "Instructional design supervisor" },
    { value: "manager", label: "Project Manager" },
    { value: "stakeholder", label: "Stakeholder" },
    { value: "expert", label: "Subject Matter Expert" },
    { value: "designer", label: "Instructional System Designer" },
    { value: "staff", label: "Support Staff" },
  ];
  const sendInvitations = (data) => {
    console.log(data);
  };
  const [invitations, setInvitations] = useState([
    <Flex gap={"middle"}>
      <Form.Item label="Email" name="1">
        <Input placeholder="input email" />
      </Form.Item>
      <Form.Item label="Role" name="2">
        <Select
          options={options}
          style={{ height: 48, width: 270 }}
          placeholder={"Select Role"}
        />
      </Form.Item>
    </Flex>,
  ]);
  const addTeammates = () => {
    let newInvitation = (
      <Flex gap={"middle"}>
        <Form.Item label="Email" name={invitations.length * 2 + 1}>
          <Input placeholder="input email" />
        </Form.Item>
        <Form.Item label="Role" name={invitations.length * 2 + 2}>
          <Select
            options={options}
            style={{ height: 48, width: 270 }}
            placeholder={"Select Role"}
          />
        </Form.Item>
      </Flex>
    );
    setInvitations([...invitations, newInvitation]);
  };
  return (
    <div className="form-container account-setup">
      <Form
        className={"form invitation-input"}
        layout="vertical"
        onFinish={sendInvitations}
        size={"large"}
        name={"invitationsList"}
      >
        <h3 className="form-title">Instructional Design Workspace</h3>
        <h4 className="form-subtitle">
          Let’s invite the users and assign roles
        </h4>
        {invitations.map((item, index) => {
          return <div key={index + 1}>{item}</div>;
        })}
        <label
          onClick={addTeammates}
          style={{ cursor: "pointer", color: "#0774c3", marginRight: "auto" }}
        >
          + Add teammates
        </label>
        <div className="button-container">
          <button className="button signup">Invite all</button>
        </div>
      </Form>
    </div>
  );
};
export default AccountSetUpUsers;
