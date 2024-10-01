import { User } from "../types";
import { Link } from "react-router-dom";
import imagesData from './A.images.json';

const images: string[] = imagesData.images;

function Content() {
  const users: User[] = [
    {
      user: "Quin", // Add user property
      userPosts: [
        {
          image: images[0],
          title: "Hello My Friend",
          caption: "Hey There! Quin here, the developer of this project. I am a sole developer of this project and a member of Tenacious Mofos Organization",
          starred: 0,
          starThis: () => {}
        }
      ]
    },
    {
        user: "Quin", // Add user property
        userPosts: [
          {
            image: images[0],
            title: "Hello My Friend",
            caption: "Hey There! Quin here, the developer of this project. I am a sole developer of this project and a member of Tenacious Mofos Organization",
            starred: 0,
            starThis: () => {}
          }
        ]
      },
      {
        user: "Quin", // Add user property
        userPosts: [
          {
            image: images[0],
            title: "Hello My Friend",
            caption: "Hey There! Quin here, the developer of this project. I am a sole developer of this project and a member of Tenacious Mofos Organization",
            starred: 0,
            starThis: () => {}
          }
        ]
      }
  ];

  return (
    <>
      {users.map((user, userIndex) => (
        user.userPosts.map((content, index) => (
          <div
            key={index}
            className="border-b-2 block w-full h-[10em] border-slate-800 bg-cover bg-center 
            bg-gradient-to-b from-slate-950 to-slate-50/0 relative">
            <img 
              className="absolute inset-0 w-full h-full object-cover z-[-1]" 
              src={`${content.image}`} 
              alt="image thumbnail" 
            />
            <div className="z-10 flex flex-col space-y-5 h-full p-4">
              <h2 className="text-white break-words border-b-2 z-[-3]">{content.title}</h2>
              <p className="text-white break-words z-[-3]">
                {content.caption.length > 70 
                  ? `${content.caption.slice(0, 70)}...` 
                  : content.caption}
              </p>
              <article className="flex justify-around"><p className="text-white" key={userIndex}>Post made by {user.user}</p>
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
