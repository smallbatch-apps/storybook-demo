import classnames from 'classnames'

const Input = props => {
  // eslint-disable-next-line no-unused-vars
  const { error, success, classNames, type = 'text', ...remaining } = props
  const classes = classnames('p-4 text-sm rounded-lg block w-full border border placeholder:text-neutral-500 focus:outline-none focus:border-2 dark:bg-neutral-800 dark:text-neutral-300', {
    'border-neutral-500 focus:border-brand-500': !success && !error,
    'border-2': success || error,
    'border-green-400': success,
    'border-red-400': error,
  })

  return <input type={type} className={classes} {...remaining} />
}

export default Input
