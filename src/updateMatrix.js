const toggleItem = (column, value) => {

  column.forEach((element) => {
    if (element === 0) {
        element = value
        return //does this break the function?
    }
  })
  return  column //is this needed?
}

  export default toggleItem