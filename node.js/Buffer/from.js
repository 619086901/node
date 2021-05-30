const buffer1 = Buffer.from([1, 2, 3, 4, 5])

console.log(buffer1)

buffer1.writeInt8(10, 1) //占8位

console.log(buffer1)

//BE高位在后
buffer1.writeUInt16BE(10, 1) //占16位

console.log('writeUInt16BE:', buffer1)

//LE高位在前
buffer1.writeUInt16LE(10, 1) //占16位

console.log('writeUInt16LE:', buffer1)
