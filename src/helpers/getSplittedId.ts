const getSplittedId = (id: string) => {
  const char = id.split("")[0]
  const num = id.split("")[1]
  return {
    char,
    num: Number(num),
  }
}

export default getSplittedId