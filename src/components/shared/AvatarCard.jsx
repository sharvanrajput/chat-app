import React from 'react'
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from '../ui/avatar'
import { transformImage } from '@/lib/features'

export default function AvatarCard({ avatars = [], max = 3 }) {
    return (
        <>
            <AvatarGroup>
                {avatars.slice(0, max).map((avatar, i) => (
                    <Avatar key={i} className={" relative rounded-full"}>
                        <AvatarImage
                            src={transformImage(avatar)}
                            alt="@evilrabbit"
                        />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                ))}
                {max > 3 && <AvatarGroupCount>+3</AvatarGroupCount>}
            </AvatarGroup>
        </>
    )
}
