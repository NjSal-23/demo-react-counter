function ResetButton({count, reset}) {
  return <button className="text-2xl px-2 py-2 mx-2 border border-solid border-black bg-blue-50"
  onClick={() => {reset(count)}}>
  RESET
</button>
}

export default ResetButton