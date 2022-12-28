import React from "react";

function ContactMe() {
  return (
    <>
    <main className='no-scrollbar bg-no-repeat'>
      <div className="pt-[150px] m-auto text-center text-white">
        <h1 className="text-4xl py-3">Send me a message</h1>
      </div>
      {/*contact card*/}
      <div className="flex items-center justify-center w-screen text-white p-[50px] my-[50px]">
        <div className="flex contactflex  rounded-[50px]">
          <img
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="contact image cover"
            height="500px"
            width="550px"
            className="bg-fixed bg-cover p-5 rounded-[50px]"
          ></img>
          <div className="p-5 w-auto">
          <form action="https://getform.io/f/86537289-4693-4bb5-b5fa-ef02736c1a18" method="POST">
            <div className="grid lastnameflex gap-4 py-2">
              <div className="flex-col">
                <input
                  className="border-3 rounded-lg p-2 w-full hover:bg-[#424242] bg-[#212121]"
                  placeholder="Name"
                  name="name"
                  type="text"
                ></input>
              </div>
              <div className="w-fill">
                <input
                  className="border-3 rounded-lg p-2 w-full hover:bg-[#424242] bg-[#212121]"
                  placeholder="Last Name"
                  name="lastname"
                  type="text"
                ></input>
              </div>
            </div>
            <div className="flex flex-col py-2">
              <input
                className="border-3 rounded-lg p-2 hover:bg-[#424242] bg-[#212121]"
                placeholder="Email"
                name="email"
                type="email"
              ></input>
            </div>
            <div className="flex flex-col py-2">
              <input
                className="border-3 rounded-lg p-2 hover:bg-[#424242] bg-[#212121]"
                placeholder="Subject"
                name="subject"
                type="text"
              ></input>
            </div>
            <div className="flex flex-col py-2">
              <textarea
                className="border-3 rounded-lg p-2 hover:bg-[#424242] bg-[#212121]"
                placeholder="Message"
                name="message"
                type="text"
              ></textarea>
            </div>
            <div className="flex text-center items-center justify-around">
                <div><button className="hover:bg-[#424242] bg-[#212121] rounded-2xl border-solid border-2 border-white-500 p-2 cursor-pointer px-5">Send</button></div>
                <div><button type='reset' className="hover:bg-[#424242] bg-[#212121] border-solid rounded-[15px] p-2 px-5">Clear</button></div> 
            </div>
          </form>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}

export default ContactMe;
