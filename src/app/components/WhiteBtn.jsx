const WhiteBtn = ({ data }) => {
  return (
    <>
      <div className="hover:cursor-pointer hover:opacity-90 transition-all bg-white rounded-lg w-fit text-black p-2 text-md font-bold">
        {data}
      </div>
    </>
  );
};

export default WhiteBtn;
