import styles from './Avatar.module.css'

export type AvatarProps = {
  image: string
  hasBorder?: boolean
}

export function Avatar({ image, hasBorder = true }: AvatarProps) {
  return (
    <img 
      src={image} 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    />
  )
}