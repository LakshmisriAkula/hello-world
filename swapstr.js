var line = "I am almabetter"

line = line.split(" ");

console.log(line)

var rev_line = line.reverse().join(" ")

console.log(rev_line)

// Using swap
var line = "I am almabetter"

line = line.split(" ");

// [line[0],line[2]] = [[line[2], line[0]]

var temp;

temp = line[0]
line[0] = line[2]
line[2] = temp

console.log(line.join(" "))

