import { User } from "../types";
import { Link } from "react-router-dom";
import imagesData from './A.images.json';

const images: string[] = imagesData.images;

function Content() {
  const users: User[] = [
    {
      user: "Yeah", // Add user property
      userPosts: [{image: images[0],
          title: "Introduction of me",
          caption: "Hey There! Kin here, I am also known as Kin Dreno! I am the developer of this project. I am a sole developer of this project and a member of Tenacious Mofos Organization",
          starred: 0,
          starThis: () => {}}]},
    {user: "Kin", // Add user property
        userPosts: [{image: images[1],
            title: "A Verified Chinese Spy?",
            caption: "Alice Guo, A Chinese spy? An Investigation has occured due to spy suspiciousness to alice guo according to the senate hearings",
            starred: 0,
            starThis: () => {}}]},
      {
        user: "Dreno", // Add user property
        userPosts: [{image: images[2],
            title: "Smoking is free, being ignorant is free as well.",
            caption: "Can't people throw their cigarettes in trashbins?",
            starred: 0,
            starThis: () => {}}]
          }]; // THESE ARE JUST THE EXAMPLES OF THE DATA THAT I DID MANUALLY 

  return (
    <>
      {users.map((user, userIndex) => (
        user.userPosts.map((content, index) => (
          <div
            key={index}
            className="border-b-2 block w-full h-[10em] border-slate-800 bg-cover bg-center 
            bg-gradient-to-b from-slate-950 to-slate-50/0 relative mb-3 rounded-lg">
            <img 
              className="absolute inset-0 w-full h-full object-cover z-[-1]" 
              src={`${content.image}`} 
              alt="image thumbnail" 
            />
            <div className=" flex flex-col space-y-5 h-full p-4">
              <h2 className="text-white break-words border-b-2 ">{content.title.length > 35 ? `${content.title.slice(0, 35)}...` : content.title}</h2>
              <p className="text-white break-words">
                {content.caption.length > 70 
                  ? `${content.caption.slice(0, 70)}...` 
                  : content.caption}
              </p>
              <article className="flex justify-around">
                <p className="text-white" key={userIndex}>Post made by <b>{user.user}</b></p>
              <Link className="text-white underline"  to={"/"}>Read Here!</Link>
              </article>
            </div>
          </div>
        ))
      ))}
    </>
  );
}

export default Content;
