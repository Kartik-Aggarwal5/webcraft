import useApp from "@/context/app";
import { Dialog, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const { formOpen, closeForm, email, setEmail, name, setName } = useApp();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill all fields");

    const sheet_id = process.env.NEXT_SHEET_ID;

    setLoading(true);
    try {
      await axios.post(`https://api.apispreadsheets.com/data/${sheet_id}/`, {
        Name: name,
        Time: new Date().toLocaleString(),
        Email: email,
      });
      alert("Thank you for your interest. We will get back to you soon.");
      setLoading(false);
      setEmail("");
      setName("");
      closeForm();
    } catch (error) {
      setLoading(false);
      alert("An error occured, please try again");
    }
  };

  return (
    <Dialog onClose={closeForm} open={formOpen} maxWidth="sm" fullWidth>
      <div className="px-10 py-5 dialog-request">
        <p className="font-bold text-[24px] ">Request Early Access</p>
        <div className="mt-5">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            fullWidth
            label="Name"
          />
        </div>
        <div className="mt-5">
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john.doe@email.com"
            fullWidth
            label="Email"
          />
        </div>

        <div className="flex items-center justify-end ">
          <button
            onClick={closeForm}
            className="border mr-5 font-gilroy px-5 py-2 mt-5 font-medium rounded"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-[#FF4820] border border-[#FF4820] font-gilroy px-5 py-2 mt-5 font-medium rounded"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default Form;
