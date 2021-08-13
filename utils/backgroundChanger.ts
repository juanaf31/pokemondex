export const handleColorBackground = (type: string[]) => {
    switch (true) {
      case type.includes("fire"):
        return "#fb6c6c";
      case type.includes("grass"):
        return "#48d0b0";
      case type.includes("water"):
        return "#76bdfe";
      case type.includes("bug"):
        return "#63e38a";
      case type.includes("electric"):
        return "#ffcf4a";
      default:
        return "magenta";
    }
  };

 export const handleColorTag = (type: string[]) => {
    switch (true) {
      case type.includes("fire"):
        return "#f88c8b";
      case type.includes("grass"):
        return "#5ddfc6";
      case type.includes("water"):
        return "#95d3fe";
      case type.includes("bug"):
        return "#42a05f";
      case type.includes("electric"):
        return "#ffdd5e";
      default:
        return "#db60d8";
    }
  };