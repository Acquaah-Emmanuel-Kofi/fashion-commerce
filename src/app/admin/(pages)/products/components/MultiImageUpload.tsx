import Image from "next/image";
import React, { Fragment, useState } from "react";
import { BsImages } from "react-icons/bs";

interface UploadFile {
  file: File;
  previewUrl: string;
  progress: number;
  isUploaded: boolean;
}

interface MultiImageUploadProps {
  onImagesSelect: (files: File[]) => void;
}

const MultiImageUpload: React.FC<MultiImageUploadProps> = ({
  onImagesSelect,
}) => {
  const [files, setFiles] = useState<UploadFile[]>([]);

  /**
   * Handle file drop event.
   * @param e - The drag event
   */
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    handleFiles(selectedFiles);
  };

  /**
   * Handle multiple files upload.
   * @param selectedFiles - An array of selected files
   */
  const handleFiles = (selectedFiles: File[]) => {
    const newFiles: UploadFile[] = selectedFiles.map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
      progress: 0,
      isUploaded: false,
    }));

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    onImagesSelect(selectedFiles);

    // Start upload simulation for each new file
    newFiles.forEach((fileObj) => {
      simulateFileUpload(fileObj);
    });
  };

  /**
   * Simulate file upload progress.
   * @param index - The index of the file to simulate upload for
   */
  const simulateFileUpload = (fileObj: UploadFile) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;

      setFiles((prevFiles) => {
        return prevFiles.map((prevFile) => {
          if (prevFile.file.name === fileObj.file.name) {
            const updatedFile = { ...prevFile, progress };
            if (progress >= 100) {
              updatedFile.isUploaded = true;
              clearInterval(interval);
            }
            return updatedFile;
          }
          return prevFile;
        });
      });
    }, 300);
  };

  return (
    <Fragment>
      <div
        className="w-full relative border-2 border-gray-300 border-dashed p-6"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 z-40"
          multiple
          onChange={handleFileChange}
          accept="image/png, image/jpeg, image/gif"
        />
        <div className="text-center flex flex-col justify-center items-center gap-4">
          <BsImages size={48} />
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            <label className="relative cursor-pointer">
              <span>Drag and drop</span>
              <span className="text-indigo-600"> or browse</span>
              <span> to upload</span>
            </label>
          </h3>
          <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
      {/* Display the uploaded files */}
      <div className="mt-4 space-y-4">
        {files.map((fileObj, index) => (
          <div key={index} className="flex items-center space-x-2">
            <Image
              src={fileObj.previewUrl}
              alt="Thumbnail"
              width={40}
              height={40}
              className="h-10 w-10 rounded object-cover"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-600">{fileObj.file.name}</p>
              <div className="relative w-full bg-gray-200 rounded">
                <div
                  className="absolute top-0 left-0 h-full bg-blue-600 rounded"
                  style={{ width: `${fileObj.progress}%` }}
                ></div>
              </div>
              {fileObj.isUploaded ? (
                <span className="text-blue-600 text-sm">Uploaded</span>
              ) : (
                <span className="text-gray-500 text-sm">
                  Uploading... {fileObj.progress}%
                </span>
              )}
            </div>
            {fileObj.isUploaded && (
              <div className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default MultiImageUpload;
