import React, { useState } from "react";
import HeaderComponent from "./header"
import BodyComponent from "./body";
import FooterComponent from "./footer"

const PageComponent = (props) => {
  const [name, setName] = useState("")
  const [enteredName, setNewName] = useState("Enter Name")

  const updateName = (event) => {
      setName(event.target.value)
  }

  const newNameUpdate = () => {
    setNewName(name)
  }
  return (
    [<HeaderComponent name = {enteredName} key = "headerKey"/>,
    <BodyComponent name = {enteredName} nameChange = {updateName} clickAction = {newNameUpdate} key = "bodyKey"/>,
    <FooterComponent name = {enteredName} key = "footerKey"/>]
  )
};

export default PageComponent;