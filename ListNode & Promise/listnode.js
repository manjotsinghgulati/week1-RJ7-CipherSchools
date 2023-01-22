class ListNode {
    value;
    next;

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class TestClass{
    head;

    constructor(head = null) {
        this.head = head;
    }

    hasLast(){
        return this.head !== null;
    }

    getLast(){
        if(!this.hasLast){
            return null;
        }
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }

        let finalValue = current.value;

        current = this.head;
        while(current.next !== null){

            current = current.next;
        }


    
        current.next = null;

        return finalValue;
        
        }
    }

let testClass = new TestClass(
    new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
);

console.log(testClass.getLast());
console.log(testClass.getLast());
console.log(testClass.getLast());
console.log(testClass.getLast());
console.log(testClass.getLast());