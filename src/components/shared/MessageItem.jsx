import { fileFormat } from "@/lib/features";
import moment from "moment";
import { memo, useEffect } from "react";
import RenderAttachment from "./RenderAttachment";

function MessageItem({ message, user }) {
  const { sender, content, attachment = [], createdAt } = message;

  const samesender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <div
      className={`
                ${samesender ? "ms-auto" : ""}
                bg-white text-black rounded-[5px] p-2 w-fit mx-2 
                `}
    >
      {!samesender && (
        <p className="text-xs lowercase text-[#2694ab] font-semibold ">
          {sender.name}
        </p>
      )}

      {content && <p>{content}</p>}

      {attachment?.length > 0 &&
        attachment.map((ele, i) => {
          const url = ele?.url;
          const file = fileFormat(url);

          return (
            <div className="" key={i}>
              <a href={url} target="_blank" download className="text-black">
                <RenderAttachment file={file} url={url} />
              </a>
            </div>
          );
        })}

      <p className="text-xs lowercase text-[#818181] font-semibold">
        {timeAgo}
      </p>
    </div>
  );
}
export default memo(MessageItem);
