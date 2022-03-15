class NewArray {
    private items: number[] = [];
    private count: number = 0;

    constructor(private length: number){}

    public newArray() {
        this.items = new Array<number>(this.length);
    }

    public push(item: number) {
        // If the array is full, resize it
        if(this.items.length === this.count) {
            // create a new array (twice the size of existing)
            let newItems = new Array<number>(this.count * 2);
            // Copy all the existing items
            for(let i = 0; i < this.count; i++) {
                newItems[i] = this.items[i];
            }
            // Set "items" to this new Array
            this.items = newItems;
        }
        // Add the new item at the end
        this.items[this.count++] = item;
    }

    public remove(index: number) {
        // validate the index
        if (index < 0 || index >= this.count) {
            throw new Error("illegal argument exception");
        } 
        // Shift the items to the left to fill the hole
        for(let i = index; i < this.count; i++) {
            this.items[i] = this.items[i + 1];
        }
        this.count--;
    }

    public indexOf(item: number) {
        //if we find it, return index
        //Otherwise return -1
        for(let i=0; i < this.count; i++) {
            if(this.items[i] === item) {
                return i;
            }
        }
        return -1;
    }

    public max(){
        let max: number = this.items[0];

        for(let i = 1; i < this.count; i++) {
            if(this.items[i] > max) max = this.items[i];
        }
        return max;
    }

    // public intesect(newitems: number[]){
    //     if (newitems.length < this.items.length) {
    //         for (let i = 0; i < newitems.length; i++) {
    //             if(newitems[i] === this.items[i]) {
    //                 return newitems[i];
    //             }
    //         }
    //     } else if (newitems.length > this.items.length) {
    //         for (let i = 0; i < this.items.length; i++) {
    //             if(this.items[i] === newitems[i]) {
    //                 return this.items[i];
    //             }
    //         }
    //     } else if (newitems.length === this.items.length) {
    //         for (let i = 0; i < this.items.length; i++) {
    //             if(this.items[i] === newitems[i]) {
    //                 return this.items[i];
    //             }
    //         }
    //     }
    //     return undefined;
    // }

    public reverse() {
        for (let i = this.count - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }

    public addGivenIndex(index: number, item: number) {
        let newItems = new Array<number>(this.count + 1);
        for (let i = 0; i <= index; i++) {
            newItems[i] = this.items[i];
            if (i === index) {
                newItems[i] = item;
            }
        }
        index++;
        for (let j = index ; j <= this.count; j++) {
            newItems[j] = this.items[j - 1];
        }
        return newItems;
    }

    public print() {
        for(let i = 0; i < this.count; i++){
            console.log(this.items[i]);
        }
    }
}

export default NewArray;