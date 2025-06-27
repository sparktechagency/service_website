

const getTypeColor = (type: string) => {
  if (type === "full_time") {
    return "bg-green-100 text-green-800 border-green-300";
  }
  if (type === "part_time") {
    return "bg-yellow-100 text-yellow-800 border-yellow-300";
  }
  if (type === "fixedterm_contract") {
    return "bg-blue-100 text-blue-800 border-blue-300";
  }
  if (type === "temporary") {
    return "bg-purple-100 text-purple-800 border-purple-300";
  }
  if (type === "apprenticeship") {
    return "bg-cyan-100 text-cyan-800 border-cyan-300";
  }
  if (type === "graduate_entrylevel") {
    return "bg-purple-100 text-purple-800 border-purple-300";
  }
  if (type === "remote_hybrid") {
    return "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-300";
  }
};

export default getTypeColor;