const Contact = () => {
  return (
    <div className="pt-40 text-center">
      <h1 className="text-4xl font-semibold">Contact Us</h1>
      <div className="flex flex-col w-6/12 mx-auto gap-8 pt-8 items-center justify-center">
        <input
          type="text"
          placeholder="name"
          className="w-6/12 border-2 outline-none p-2 border-slate-500 rounded-lg"
        />
        <input
          type="text"
          placeholder="message"
          className="w-6/12 border-2 outline-none p-2 border-slate-500 rounded-lg"
        />
        <button className="w-20 px-4 py-2 hover:[color:tomato] font-normal text-gray-700 shadow-lg rounded-md">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
