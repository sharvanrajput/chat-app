import { transformImage } from "@/lib/features";
import { MdFileOpen } from "react-icons/md";

export default function RenderAttachment(file, url) {
  console.log(file.file);
  // console.log(url)
  switch (file.file) {
    case "video":
      return (
        <video src={file.url} preload="none" width={"200px"} controls></video>
      );
    case "image":
      return (
        <img
          src={transformImage(file.url, 200)}
          alt="Attachments"
          width={"200px"}
          height={"150px"}
          className=" object-contain "
        />
      );
    case "audio":
      return <audio src={file.url} preload="none" controls />;
    default:
      return <MdFileOpen />;
  }
}
