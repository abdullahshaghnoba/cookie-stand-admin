import Head from "next/head";
import { useState } from "react";

export default function Home() {

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body>
        <Header />
        <Main />
      </body>
      <Footer />
    </>
  )

}

function Header() {
  return (
    <header className="flex items-center pl-10 bg-green-500 h-36">
      <h1 className="text-5xl font-bold">Cookie Stand Admin</h1>
    </header>
  )
}

function Main() {
  const [form, setForm] = useState({
    location: "",
    minimum: "",
    maximum: "",
    average: ""
  })
  const [flag, setFlag] = useState(false)


  function lastCookieAddedHandler(event) {
    event.preventDefault();
    setFlag(true)
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <form className="flex flex-col items-center justify-center w-auto h-auto p-10 bg-green-300" onSubmit={lastCookieAddedHandler} >
        <h1 className="p-5 text-4xl font-bold">Create Cookie Stand</h1>
        <div>
          <div className="flex justify-around">
            <label className="text-2xl">Location</label>
            <input className="w-11/12 mx-auto" type="text" value={form.location} name="location" onChange={(event) => setForm({ ...form, location: event.target.value })}></input>
          </div>
          <div className="flex p-5">
            <div className="flex flex-col p-5">
              <label className="text-2xl">Minimum Customers per Hour</label>
              <input type="number" value={form.minimum} name="minimum" onChange={(event) => setForm({ ...form, minimum: event.target.value })}></input>
            </div>
            <div className="flex flex-col p-5">
              <label className="text-2xl">Maximum Customers per Hour</label>
              <input type="number" value={form.maximum} name="maximum" onChange={(event) => setForm({ ...form, maximum: event.target.value })}></input>
            </div>
            <div className="flex flex-col p-5">
              <label className="text-2xl">Average Cookies per Sale</label>
              <input type="number" value={form.average} name="average" onChange={(event) => setForm({ ...form, average: event.target.value })}></input>
            </div>
            <button className="flex items-center justify-center p-5 text-2xl bg-green-600" type="submit">Create</button>
          </div>
        </div>
      </form>
      <Placeholder flag={flag} form={form} />
      <p className="p-10 text-2xl"> Report Table Coming Soon...</p>
    </main>
  )
}

function Placeholder(props) {

  return (

    <>
      {props.flag ? (
        <>
          <p>Location: {props.form.location}</p>
          <p>minimum: {props.form.minimum}</p>
          <p>maximum: {props.form.maximum}</p>
          <p>average: {props.form.average}</p>
        </>
      ) : <></>}

    </>
  )
}

function Footer() {
  return (
    <footer className="flex items-center pl-10 bg-green-500 h-36">
      <h1 className="text-2xl">&copy;2023</h1>
    </footer>
  )
}