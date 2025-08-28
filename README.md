
## 📌 Repository & Live Demo  
- **Repo:** [withrifat/ph-b12-assignment-05](https://github.com/withrifat/ph-b12-assignment-05)  
- **Live:** [ph-b12-assignment-05.vercel.app](https://ph-b12-assignment-05.vercel.app)  

# Questions & Answers  

---

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  
**Answer:**  
- **getElementById** → is used to get a single element by ID.  
- **getElementsByClassName** → is used to find a group of elements with the same class.  
- **querySelector** → is used to get the first element with an ID or class.  
- **querySelectorAll** → is used to get all the elements in the code with an ID or class.  

---

### 2. How do you create and insert a new element into the DOM?  
**Answer:**  
To create a new element we can use `document.createElement("TagName")`.  
To insert a new element we use `append()`.  

---

### 3. What is Event Bubbling and how does it work?  
**Answer:**  
Event bubbling is a process of going to the root from the last child of the DOM tree.  
It works branch by branch. For example, if I want to get a particular parent element then I have to go through all its corresponding children. I have to trigger one child to get its parent, then another one to get the parent’s parent, and so on.  

---

### 4. What is Event Delegation in JavaScript? Why is it useful?  
**Answer:**  
Event Delegation in JavaScript is a process of getting all the children elements by adding one single event listener to the parent element. It works by the event bubbling process.  
It is useful because it lets us write less code by decreasing the number of event listeners. So it improves performance as it has less code.  

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?  
**Answer:**  
- **preventDefault()** → It stops the default behavior of an event (for example, stopping a form submit button).  
- **stopPropagation()** → It stops event bubbling.  

---
