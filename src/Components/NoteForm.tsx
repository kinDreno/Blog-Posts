import CreatableReactSelect from "react-select/creatable"


export default function NoteForm() {
  return (
    <>
      <div className="flex justify-center mt-[3em]">
        <article className="mx-3">
          <p className="text-[1em] font-bold ml-4">Title</p>
          <input
            type="text"
            className="w-[12em] h-[2.4em] border-solid border-opacity-25 border-2 rounded-md border-black ml-4"
          />
        </article>
        <article className="mx-3">
          <p className="text-[1em] font-bold ml-4">Tags</p>
         <CreatableReactSelect className="w-[12em] h-[2.4em]" isMulti/>
        </article>
      </div>
    <div className="flex justify-center">
    <label>
      Write your post:
      <br />
      <textarea name="postContent" className="border-solid border-black border-2 rounded-md" rows={15} cols={90} />
    </label>
    </div>
    </>
  );
}
