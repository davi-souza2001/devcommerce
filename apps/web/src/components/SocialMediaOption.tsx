import Image from 'next/image';

interface SocialMediaOptionProps{
    image: string,
    color?: number
}

export function SocialMediaOption({ image, color }: SocialMediaOptionProps) {
    return(
        <div className='flex w-32 h-32 bg-zinc-700 items-center justify-center p-4 rounded-lg'>
            <Image src={image} alt='SocialMedia' height={50} width={50} />
        </div>
    )
}