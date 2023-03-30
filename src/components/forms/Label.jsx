const Label = ({name, children}) => {
  return <label className="m-0 mb-2 flex font-bold text-neutral-900" htmlFor={name}>
    {children}
  </label>
}

export default Label
