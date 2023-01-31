import Image from 'next/image'

interface SocialMediaOptionProps{
    image: string
    color: string
}

export function SocialMediaOption({ image, color }: SocialMediaOptionProps) {
    return(
        <>
            <div className={`hidden md:flex w-28 md:h-28 bg-${color} items-center justify-center p-4 rounded-lg`}>
                <Image src={image} alt='SocialMedia' height={50} width={50} />
            </div>

            <div className={`md:hidden flex w-20 h-20 bg-${color} items-center justify-center p-4 rounded-lg`}>
                <Image src={image} alt='SocialMedia' height={25} width={25} />
            </div>
        </>
    )
}
