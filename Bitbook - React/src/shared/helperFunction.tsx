export const bufferDecode = (type: any, src: any) => {
  if (type === "image") {
    const buffer = src?.data;
    const b64 = new Buffer(buffer).toString("base64");
    src = src.data ? "data:image/png;base64," + b64 : null;
  } else {
    const stringSrc = Buffer.from(src.data).toString();
    src = stringSrc;
  }
  return src;
};
