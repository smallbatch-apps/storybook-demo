import classnames from "classnames"

const Button = props => {
  // eslint-disable-next-line no-unused-vars
  const { children, color = "primary", classNames, block = false, disabled = false, type = 'submit', size = 'md', variant = 'filled', ...remaining } = props

  const styles = classnames('flex align-center justify-center gap-2 rounded text-sm', {
    'disabled': disabled,
    'w-full': block,
    'bg-brand-500 text-neutral-50 hover:bg-brand-400 focus:bg-brand-500 active:bg-brand-500': variant === 'filled' && color === 'primary' && !disabled,
    'bg-neutral-900 text-neutral-50 hover:bg-neutral-700 focus:bg-neutral-800 active:bg-neutral-800': variant === 'filled' && color === 'secondary' && !disabled,
    'bg-neutral-300 text-neutral-500': variant === 'filled' && disabled,
    'text-brand-500 border border-brand-500 hover:border-none hover:bg-brand-500 hover:text-neutral-50 focus:bg-brand-00 focus:text-neutral-50 focus:border-none active:text-neutral-50 active:bg-brand-500 active:border-none ': variant === 'outlined' && color === 'primary' && !disabled,
    'text-neutral-900 border border-neutral-900 hover:border-none hover:bg-neutral-900 hover:text-neutral-50 focus:bg-neutral-900 focus:text-neutral-50 focus:border-none active:text-neutral-50 active:bg-neutral-900 active:border-none ': variant === 'outlined' && color === 'secondary' && !disabled,
    'border border-neutral-300 text-neutral-500': variant === 'outlined' && disabled,
    'text-brand-500 hover:bg-blue-50 focus:bg-blue-50 active:bg-blue-50': variant === 'text' && color === 'primary' && !disabled,
    'text-neutral-900 hover:bg-neutral-50 focus:bg-neutral-50 active:bg-neutral-50': variant === 'text' && color === 'secondary' && !disabled,
    'text-neutral-500': variant === 'text' && disabled,
    'px-3 py-1': size === 'sm',
    'px-4 py-2': size === 'md',
    'px-5 py-4': size == 'lg',
  })

  return <button type={type} disabled={disabled} className={styles} {...remaining} role="button">
    {children}
  </button>
}

export default Button