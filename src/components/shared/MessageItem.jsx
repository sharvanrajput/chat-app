import moment from 'moment'
import { memo } from 'react'

function MessageItem({ message, user }) {

    const { sender, content, attachments = [], createdAt } = message

    const samesender = sender?.id === user?.id

    const timeAgo = moment(createdAt).fromNow()

    return (
        <div
            className={`
                ${samesender ? "ms-auto" : ""}
                bg-white text-black rounded-[5px] p-2 w-fit mx-2 
                `}>

            {!samesender && <p className='text-xs lowercase text-[#2694ab] font-semibold ' >{sender.name}</p>}


            {
                attachments?.length > 0 && attachments.map((attachment, i) => {
                    return (
                        <div className="" key={i}>
                            <a href=""
                                target='blank'
                                download
                                className='text-black'
                            ></a>
                        </div>
                    )
                })
            }


            {content && <p>{content}</p>}
            <p className='text-xs lowercase text-[#818181] font-semibold' >{timeAgo}</p>


        </div>
    )
}
export default memo(MessageItem)