function Button({step, increment}) {
  return <button className="text-2xl px-2 py-2 mx-2 border border-solid border-black bg-blue-50"
  onClick={() => {increment(step)}}>
  +{step}
</button>
}


export default Button

