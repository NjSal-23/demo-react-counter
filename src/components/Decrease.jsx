function DecreaseButton({step, decrease}) {
  return <button className="text-2xl px-2 py-2 mx-2 border border-solid border-black bg-blue-50"
  onClick={() => {decrease(step)}}>
  -{step}
</button>
}

export default DecreaseButton