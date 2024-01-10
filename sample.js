class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    append(value){
        let newnode=new Node(value)
        if(this.head==null){
            this.head=newnode;
            this.tail=newnode;
            this.size++
        }
        else{
            this.tail.next=newnode
            this.tail=newnode
            this.size++
        }
    }

    delete(index){
        let cur=this.head
        let prev=null;
        if(index >this.size-1 || index <0){
            console.log('invalid index');
            return
        }
        if(index==0){
            this.head=this.head.next
            this.size--
            return
        }
        for(let i=0;i<index;i++){
            prev=cur;
            cur=cur.next
        }
        prev.next=cur.next;
        this.size--;
        return
    }

    display(){
        let cur=this.head
        if(this.size==0){
            console.log('list is empty');
            return
        }
        while(cur){
            console.log(cur.value);
            cur=cur.next
        }
        return
    }

}


const list= new linkedlist()

list.display()
list.append(20)
list.append(36)
list.append(99)
list.append(66)
list.display()
list.delete(1)
list.display()