import React from "react";
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_LOGO } from "../utils/constants";
import { signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { toggleSearchGpt } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showSearchGpt = useSelector((store) =>store.gpt.showSearchGpt);

  const handleSearchGptClick = () =>{
    dispatch(toggleSearchGpt());
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
   const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

const handleLanguageChange = (e) =>{
  dispatch(changeLanguage(e.target.value))
}

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b  from-black z-50 flex justify-between">
      <img className="w-48" src={LOGO_URL} alt="logo-url" />

      {user && (
        <div className="text-white font-bold flex gap-2 p-2 m-4">
    {showSearchGpt &&<select className=" bg-green-700 rounded-lg p-2 m-2 cursor-pointer" onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map(lang => <option className="font-bold p-4 m-2" key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
    </select>}

        
        <button className="p-2 m-2 bg-purple-700 rounded-lg shadow-2xl" onClick={handleSearchGptClick}>SearchGPT</button>
          <img className="w-12 h-12 " alt="userIcon" src={USER_LOGO} />
          <button
            className="p-2 m-2 bg-red-700 rounded-lg shadow-2xl"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
