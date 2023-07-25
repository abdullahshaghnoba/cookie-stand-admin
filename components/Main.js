export default function Main({ form, setForm, setFlag }) {




  function lastCookieAddedHandler(event) {

    event.preventDefault();
    let obj = {
      location: event.target.location.value,
      minimum: event.target.minimum.value,
      maximum: event.target.maximum.value,
      average: event.target.average.value
    }
    setForm([...form, obj])

  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <form className="flex flex-col items-center justify-center p-10 bg-green-300" onSubmit={lastCookieAddedHandler} >
        <h1 className="p-5 text-4xl font-bold">Create Cookie Stand</h1>
        <div>
          <div className="flex justify-around">
            <div className="flex flex-col w-full p-5">
              <label className="flex justify-center text-2xl">ADD Location</label>
              <input className="w-full" type="text" name="location" Placeholder={'Cookie Stand Location'} ></input>
            </div>

            <div className="flex flex-col">
              <button className="flex items-center justify-center p-5 text-2xl bg-green-500 " type="submit">Create Stand</button>
            </div>
          </div>
          <div className="flex p-5">
            <div className="flex flex-col p-5">
              <label className="text-2xl">Minimum Customers per Hour</label>
              <input type="number" name="minimum" ></input>
            </div>
            <div className="flex flex-col p-5">
              <label className="text-2xl">Maximum Customers per Hour</label>
              <input type="number" name="maximum" ></input>
            </div>
            <div className="flex flex-col p-5">
              <label className="text-2xl">Average Cookies per Sale</label>
              <input type="number" name="average" ></input>
            </div>

          </div>
        </div>
      </form>

    </main>
  )
}