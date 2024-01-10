class Node{
    constructor(value){
        this.value=value;
        this.next=null
        this.prev=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    addAtfront(value){
        let newnode=new Node(value)
        if(this.head==null){
            this.head=newnode;
            this.tail=newnode
        }
        else{
            newnode.next=this.head
            this.head.prev=newnode
            this.head=newnode
            
        }
        this.size++
        return 
    }
    addAtTail(value){
        let newnode=new Node(value)
        if(this.head==null){
            this.head=newnode
            this.tail=newnode
        }
        else{
            newnode.prev=this.tail
            this.tail.next=newnode
            this.tail=newnode
        }
        this.size++
        return
    }
    insertbefore(before,value){

        let newnode=new Node(value)
        let cur=this.head
        while(cur!=null && cur.value!=before){
            cur=cur.next
        }
        if(cur==null){
            console.log('no value found',before);
            return
        }
        if(cur==this.head){
            this.head=newnode
        }
        newnode.next=cur
        newnode.prev=cur.prev
        cur.prev.next=newnode
        cur.prev=newnode
        this.size++
        return
    }

        insertafter(after,value){
            let newnode=new Node(value)
            let cur=this.head
            while(cur!=null && cur.value!= after){
                cur=cur.next
            }
            if(cur==null){
                console.log('no value found',after);
                return
            }
            if(cur==this.tail){
                this.tail=newnode
            }
            newnode.next=cur.next
            if(cur.next!==null){
                newnode.next.prev=newnode
            }
            newnode.prev=cur
            cur.next=newnode
            this.size++
            return
        }
        delete(value){
            let cur=this.head
            while(cur!=null && cur.value!= value){
                cur=cur.next
            }
            if(cur==null){
                console.log('no value',value);
                return
            }
            cur.next.prev=cur.prev
            cur.prev.next=cur.next
            return
        }
    reverse(){
        let cur=this.tail
        let i=0
        while(cur!=null){
            console.log(i,cur.value);
            cur=cur.prev
            i++
        }
    }

    display(){
        if(this.head==null){
            console.log('Empty List');
            return
        }
        let i=0
        let cur=this.head
        while(cur!=null){
            console.log(i,cur.value);
            cur=cur.next
            i++
        }
    }
}



const list=new linkedList()

list.display()
list.addAtfront(23)
list.addAtTail(9)
list.addAtfront(93)
list.addAtTail(44)
list.display()
// list.reverse()
list.insertafter(44,21)
list.display()
list.insertbefore(44,10)
list.insertbefore(933,109)
list.display()
list.delete(44)
list.delete(900)
list.display()