class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
   
    prepend(value){
        const node= new Node(value)
        if(this.head){
            node.next=this.head
        }
        else{
            this.tail=node
        }
        this.head=node
        this.size++
       
    }

    append(value){
        const node=new Node(value)
        if(this.head==null){
            this.head=node
            this.tail=node
        }
        else{
            this.tail.next=node
            this.tail=node
        }
        this.size++
        }
        insert(value,index){
            if(index<0 || index >this.size){
                console.log('invalid index');
                return
            }
            if(index==0){
                this.prepend(value)
            }
            else if(index==this.size){
                this.append(value)
            }
           else{
            const node= new Node(value);
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++

           }
            
        }
        remove(value){
            if(this.size==0){
                console.log('invalid number');
                return
            }
            if(this.head.value== value){
                this.head=this.head.next
                this.size--
                return 
            }
            else{
                let cur=this.head
                let prev=null
                while(cur!=null && cur.value!=value){
                    prev=cur
                    cur=cur.next;
                }
                if(cur!=null){
                if(cur==this.tail){
                    this.tail=prev
                }
                prev.next=cur.next
                this.size--
                return
            }
                console.log('no value found');
            return null
        }
        }
       
        arrayTolinkedlist(arr){
            for(let i=0;i<arr.length;i++){
                const newnode=new Node(arr[i])
                if(!this.head){
                    this.head=newnode
                    this.tail=newnode
                }
                else{
                    this.tail.next=newnode
                    this.tail=newnode
                }
                this.size++
            } 
        }

    display(){
        if(!this.head){
        console.log('List is Empty');
        return 
        }
        let temp=this.head
        let i=0
        while(temp!=null){
            console.log(i,temp.value);
            temp=temp.next
            i++
        }
    }
    insertafter(after,value){
        let newnode =new Node(value)
        let cur=this.head
        while(cur!=null && cur.value!= after){
            cur=cur.next
        }
        if(cur==null){
            console.log('no value ',after);
            return 
        }
        newnode.next=cur.next
        cur.next=newnode
        this.size++;
        return
    }
    insertbefore(before,value){
        let newnode=new Node(value)
        let cur=this.head
        let prev=null
        while(cur!=null && cur.value!=before){
            prev=cur
            cur=cur.next
        }
        if(cur==null){
            console.log('no value ',before);
            return 
        }
        newnode.next=cur
        if(prev==null){
            this.head=newnode
        }else
        prev.next=newnode
        this.size++
        return
    }
    search(value){
        if(this.size==0){
            console.log('Empty');
            return 
        }
        let cur=this.head
        let i=0
        while(cur){
            if(cur.value==value){
                return i
            }
            cur=cur.next
            i++
        }
        return -1
        
    }
    reverse(){
        let prev=null
        let cur=this.head
        while(cur){
            let next=cur.next
            cur.next=prev
            prev=cur
            cur=next
        }
        this.head=prev
    }
    removeduplicate(){
        let cur=this.head
        while(cur!=null){
            let next=cur.next
            while(next!=null && next.value==cur.value){
                next=next.next
            }
            cur.next=next
            if(next==this.tail && next.value==cur.value){
                this.tail=cur
            }
            cur=next
        }
    }
    
}

const list=new linkedList()
// console.log('empty:',list.isEmpty());
// console.log('size',list.getSize());
// list.prepend(30)
// list.prepend(90)
// list.prepend(60)
// list.display()
// list.append(100)
// list.insert(40,0)


// list.display()
// list.insert(4,0)
// list.display()
// list.insert(40,0)
// list.display()
// list.insert(70,1)
// list.display()
// list.insert(700,3)
// list.display()
// list.remove(40)
// list.display()
// list.remove(4)
// list.display()
// list.remove(477)
// list.display()

let arr=[9,10,99,77,4,56,23]

list.arrayTolinkedlist(arr)
list.display()
// console.log(list.search(4))
// console.log(list.search(444))
// list.reverse()
// list.display()
// list.removeduplicate()
// list.display()
list.insertafter(99,100)
list.insertafter(90,190)
list.display()
list.insertbefore(100,98)
list.insertbefore(222,900)
list.display()




// console.log('empty:',list.isEmpty());
// console.log('size',list.getSize());