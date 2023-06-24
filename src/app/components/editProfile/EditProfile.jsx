import Navbar from "../navbar/Navbar";
import EditForm from "./EditForm";

const EditProfile = () => {
  return (
    <>
      <div></div>
      <div className="flex flex-row bg-black h-full">
        <div className="basis-1/5">
          <Navbar />
        </div>
        <div className="basis-4/5 pt-[3.3rem] ml-8">
          <h1 className="text-3xl font-semibold">Edit Profile</h1>
          <div className="my-10">
            <EditForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
