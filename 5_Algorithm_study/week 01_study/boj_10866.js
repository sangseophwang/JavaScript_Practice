





let input = [] class Deck { constructor() { this.deck = [] } op(input) { switch (input[0]) { case 'push_front': this.deck.unshift(input[1] * 1) break case 'push_back': this.deck.push(input[1] * 1) break case 'pop_front': if(this.deck.length > 0) console.log(this.deck.shift()) else console.log(-1) break case 'pop_back': if(this.deck.length > 0) console.log(this.deck.pop()) else console.log(-1) break case 'size': console.log(this.deck.length) break case 'empty': if(this.deck.length > 0) console.log(0) else console.log(1) break case 'front': if(this.deck.length > 0) console.log(this.deck[0]) else console.log(-1) break case 'back': if(this.deck.length > 0) console.log(this.deck[this.deck.length-1]) else console.log(-1) break } } } const deck = new Deck() require('readline') .createInterface(process.stdin, process.stdout) .on('line', function(line) { deck.op(line.trim().split(' ')) })
