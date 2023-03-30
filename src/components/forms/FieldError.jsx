const FieldError = ({children}) => {
  return <div className="text-red-400 text-sm font-semibold mt-2" role="alert">
    {children}
  </div>
}

export default FieldError