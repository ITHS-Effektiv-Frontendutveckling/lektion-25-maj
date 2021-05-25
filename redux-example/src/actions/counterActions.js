//Actions - Bestämmer vad som ska uppdateras i vårt state
const increment = (count) => {
  return {
    type: 'INCREMENT',
    payload: count
  }
}

export default increment;