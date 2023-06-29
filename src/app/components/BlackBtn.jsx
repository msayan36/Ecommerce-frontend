const BlackBtn = ({ data, setLogout }) => {
  return (
    <>
      {setLogout ? (
        <div
          onClick={() => setLogout(true)}
          className="hover:cursor-pointer hover:opacity-90 transition-all bg-black rounded-lg w-fit text-red-500 p-2 text-md font-bold"
        >
          {data}
        </div>
      ) : (
        <div className="hover:cursor-pointer hover:opacity-90 transition-all bg-black rounded-lg w-fit text-red-500 p-2 text-md font-bold">
          {data}
        </div>
      )}
    </>
  );
};

export default BlackBtn;
