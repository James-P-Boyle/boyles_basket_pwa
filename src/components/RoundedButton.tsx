interface RoundedButtonProps {
  children: React.ReactNode
  title?: string
  onClick?: () => void
  className?: string
}

export default function RoundedButton({
  children,
  title,
  onClick,
  className
} : RoundedButtonProps ) {
  return (
    <button
      className={`roundedButton ${className}`}
      title={title}
      onClick={onClick}
    >
      {children}
    </button>
  )
};
