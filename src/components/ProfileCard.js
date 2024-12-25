import React, { useEffect, useState } from "react"; 

const ProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!userData) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg max-h-lg p-8 border-4 border-black">
        <div className="bg-white shadow-lg rounded-sm p-16 flex -m-8">
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={userData.picture.large}
              alt="Profile"
              className="w-32 h-32 rounded-sm border-4 border-black"
            />
          </div>

          {/* User Info Section */}
          <div className="ml-6 flex flex-col justify-center">
            <h2 className="text-lg font-semibold">
              {userData.name.first} {userData.name.last}
            </h2>
            <p className="text-black-500 mt-2">{userData.gender}</p>
            <p className="text-black-500 mt-1">{userData.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
