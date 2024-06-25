import { type VariantProps, cva } from 'class-variance-authority'

export { default as Avatar } from './Avatar.vue'

export const avatarVariants = cva(
  'w-12 h-12 rounded-lg object-cover',
  {
    variants: {
      variant: {
        default: '',
        bordered:
          'w-[calc(3rem+12px)] h-[calc(3rem+12px)] rounded-lg border-4 border-zinc-100 outline outline-2 outline-myYellow',
      },
      defaultVariants: {
        variant: 'default',
      },
    },
  },
)

export type AvatarVariants = VariantProps<typeof avatarVariants>
