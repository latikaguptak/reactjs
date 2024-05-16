import { useState, useEffect } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        return res.json().then((data) => {
          setUsers(data?.users);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
    // console.log("Users Details:", user);
  }, []);
  useEffect(() => {
    console.log("Users Details:", users);
  }, [users]);

  return (
    <>
      <div className="bg-gray-200 m-5 rounded-xl shadow-md p-4">
        {users ? (
          <>
          <h2 className="text-6xl text-center text-sky-800">User Details</h2>
          <div className="grid grid-cols-3"> 
          {users.map((user)=>
            (<>
            
            <div key={user.id} className="p-5 border-blue-950 border rounded-2xl m-5 shadow-xl">
              <img className="m-5" src={user.image}
              alt={user.username}/>
              <p className="text-blue-700 font-bold text-2xl">User name: {user.firstName} {user.lastName}</p>
              <p className="text-blue-700 font-bold">Email: {user.email}</p>
              <p className="text-blue-700 font-bold">Phone: {user.phone}</p>
              
              <p className="text-gray-800 text-sm">
                Address:{user.address.address} City: {user.address.city}<br/>
                Lats: {user.address.coordinates.lat}
              </p>

              </div>
              </>


          ))}

          </div>
          </>
        ) : (
          <div>
            <p className="text-3xl text-green-500">User Not Found</p>
          </div>
        )
        }
      </div>
    </>
  );
};
export default User;
