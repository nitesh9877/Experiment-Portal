import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MyContext } from "../../MyContextProvider";
import { FaCirclePlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const AddButton = () => {
  const { showForm, setShowForm } = useContext(MyContext);
  const [buttonName, setButtonName] = useState("");
  const [buttonIcon, setButtonIcon] = useState();

  useEffect(() => {
    setButtonName("Add");
    setButtonIcon("FaCirclePlus");
  }, []);

  const handleAddClick = () => {
    if (showForm) {
      setButtonName("Add");
      setButtonIcon(FaMinus);
      setShowForm(false);
    } else {
      setButtonName("Close");
      setButtonIcon(FaCirclePlus);
      setShowForm(true);
    }
  };

 

  return (
    <div>
      <buttonIcon />
      <div
        style={{
          boxShadow: "0px 0px 15px rgba(128, 128, 128, 0.3)",
          backgroundColor: "lightgray",
        }}
      >
        <Button
          type="button"
          className="btn btn-primary"
          style={{ margin: "10px" }}
          onClick={handleAddClick}
        >
          {showForm ? <FaMinus /> : <FaCirclePlus />} {buttonName}
        </Button>
      </div>
    </div>
  );
};

export default AddButton;
