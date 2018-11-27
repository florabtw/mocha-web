const unit = () => 16;

const chunkSize = () => 16;

const naturalWidth = () => unit() * chunkSize();

const scale = (scalar, unit) => scalar * unit;

export {chunkSize,naturalWidth,scale,unit};
