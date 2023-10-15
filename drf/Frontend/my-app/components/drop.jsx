// Dropzone.js
"use client"
// Dropzone.js
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadIcon, XIcon } from "lucide-react";

const Dropzone = ({ className }) => {
  const [files, setFiles] = useState([]);
  const [rejected, setRejected] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }

    if (rejectedFiles?.length) {
      setRejected((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: ".xlsx", // Only accept .xlsx files
    maxSize: 1024000, // 1024000 bytes (1MB)
    onDrop,
  });

  useEffect(() => {
    // Revoke the data URIs to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  const removeAll = () => {
    setFiles([]);
    setRejected([]);
  };

  const removeRejected = (name) => {
    setRejected((files) => files.filter((file) => file.name !== name));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files?.length) return;

    const formData = new FormData();
    files.forEach((file) => formData.append("file", file));
    formData.append("upload_preset", "friendsbook");

    const URL = process.env.NEXT_PUBLIC_CLOUDINARY_URL;
    const data = await fetch(URL, {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-5/6 m-16 mt-20 p-4 border border-gray-200 rounded-md shadow-md"
    >
      <div
        {...getRootProps({ className: className })}
        className="border-dashed border-2 border-gray-300 p-4 rounded-lg"
      >
        <input {...getInputProps()} className="hidden" />
        <div className="flex flex-col items-center justify-center gap-4">
          <UploadIcon className="w-5 h-5 fill-current" />
          {isDragActive ? (
            <p className="text-gray-600">Drop the files here</p>
          ) : (
            <p className="text-gray-600">
              Drag & drop files here, or click to select files
            </p>
          )}
        </div>
      </div>

      {/* Preview */}
      <section className="mt-6 relative">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={removeAll}
            className="text-xs uppercase font-bold border border-purple-400 rounded-md px-3 py-1 bg-purple-400 text-white hover:bg-white hover:text-purple-400 transition-colors"
          >
            Remove all files
          </button>
          <button
            type="submit"
            className="text-xs uppercase font-bold border border-purple-400 rounded-md px-3 py-1 bg-purple-400 text-white hover:bg-white hover:text-purple-400 transition-colors"
          >
            Upload to Cloudinary
          </button>
        </div>

        {/* Accepted files */}
        <h3 className="text-lg font-semibold text-gray-600 mt-8 border-b pb-3">
          Accepted Files
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 mt-4">
          {files.map((file) => (
            <li key={file.name} className="relative h-32 rounded-md shadow-lg">
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
                className="h-full w-full object-cover rounded-md"
              />
              <button
                type="button"
                className="w-7 h-7 border border-secondary-400 bg-secondary-400 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white hover:text-secondary-400 transition-colors"
                onClick={() => removeFile(file.name)}
              >
                <XIcon className="w-5 h-5 fill-white hover:fill-secondary-400 transition-colors" />
              </button>
              <p className="mt-2 text-gray-500 text-xs font-medium">
                {file.name}
              </p>
            </li>
          ))}
        </ul>

        {/* Rejected Files */}
        <h3 className="text-lg font-semibold text-neutral-600 mt-24 border-b pb-3">
          Rejected Files
        </h3>
        <ul className="mt-6 flex flex-col">
          {rejected.map(({ file, errors }) => (
            <li key={file.name} className="flex items-start justify-between">
              <div>
                <p className="mt-2 text-neutral-500 text-sm font-medium">
                  {file.name}
                </p>
                <ul className="text-[12px] text-red-400">
                  {errors.map((error) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="mt-1 py-1 text-[12px] uppercase tracking-wider font-bold text-neutral-500 border border-secondary-400 rounded-md px-3 hover:bg-secondary-400 hover:text-white transition-colors"
                onClick={() => removeRejected(file.name)}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      </section>
    </form>
  );
};

export default Dropzone;

