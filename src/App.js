import { useState } from "react";

function App() {
  const inputField =
    "border-4 outline-none focus:border-red-600 p-4 text-3xl font-sans rounded-full";
  const outputField =
    "p-4 font-sans text-2xl bg-blue-300 border-4 border-blue-700 rounded-full";
  const CSS = {
    display: "grid",
    gridTemplateRows: "1",
    gridTemplateColumns: "2",
  };

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    pno: "",
  });
  const change = (event) => {
    setData(function (prevData) {
      if (event.target.name === "fname")
        return {
          fname: event.target.value,
          lname: prevData.lname,
          email: prevData.email,
          pno: prevData.pno,
        };
      if (event.target.name === "lname")
        return {
          fname: prevData.fname,
          lname: event.target.value,
          email: prevData.email,
          pno: prevData.pno,
        };
      if (event.target.name === "email")
        return {
          fname: prevData.fname,
          lname: prevData.lname,
          email: event.target.value,
          pno: prevData.pno,
        };
      if (event.target.name === "pno")
        return {
          fname: prevData.fname,
          lname: prevData.lname,
          email: prevData.email,
          pno: event.target.value,
        };
    });
  };

  const [detail, setDetail] = useState({
    fname: "",
    lname: "",
    email: "",
    pno: "",
  });

  const done = (event) => {
    event.preventDefault();
    setDetail({
      fname: data.fname,
      lname: data.lname,
      email: data.email,
      pno: data.pno,
    });
  };
  return (
    <div className="" style={CSS}>
      <form
        onSubmit={done}
        className="content-center justify-center space-y-10 grid justify-items-center"
      >
        <h1 className="mt-10 font-sans text-6xl"> Hello </h1>
        <input
          className={inputField}
          type="text"
          placeholder="first name"
          value={data.fname}
          onChange={change}
          name="fname"
        />
        <input
          className={inputField}
          type="text"
          placeholder="last name "
          value={data.lname}
          onChange={change}
          name="lname"
        />
        <input
          className={inputField}
          type="text"
          placeholder="email"
          value={data.email}
          onChange={change}
          name="email"
        />
        <input
          className={inputField}
          type="phone"
          placeholder="phone no."
          value={data.pno}
          onChange={change}
          name="pno"
        />
        <button
          type="submit"
          className="p-4 text-3xl bg-red-500 border-8 border-red-500 rounded-full hover:border-red-800"
        >
          Submit
        </button>
      </form>

      <div className="content-center justify-center my-10 space-y-5 grid justify-items-center grid-row-4 grid-col-1">
        <div className={outputField}> {detail.fname}</div>
        <div className={outputField}> {detail.lname}</div>
        <div className={outputField}> {detail.email}</div>
        <div className={outputField}> {detail.pno}</div>
      </div>
    </div>
  );
}

export default App;
