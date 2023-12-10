import { useState, useEffect } from "react";

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [isImportant, setIsImportant] = useState(false);

  useEffect(() => {
    setCanSubmit(title.trim() !== "" && body.trim() !== "");
  }, [title, body]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddNote({
      title,
      createdAt: new Date().toISOString().split("T")[0],
      body,
      isImportant,
    });
    setTitle("");
    setBody("");
    setIsImportant(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Tambah Catatan</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Judul Catatan
          </label>
          <input
            type="text"
            id="title"
            className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
            Isi Catatan
          </label>
          <textarea
            id="body"
            className="border border-gray-300 rounded-md px-3 py-2 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="important" className="flex items-center">
            <input
              type="checkbox"
              id="important"
              className="form-checkbox border-gray-300 rounded text-blue-500 focus:ring-2 focus:ring-blue-500"
              checked={isImportant}
              onChange={(e) => setIsImportant(e.target.checked)}
            />
            <span className="ml-2 text-gray-700">Verify Note</span>
          </label>
        </div>
        <button
          type="submit"
          className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ${
            !canSubmit ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!canSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNote;
