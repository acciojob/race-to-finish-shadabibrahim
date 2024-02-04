window.promises = [];
let div= document.querSelector("#output");

// Do not change the code above this
// add your promises to the array `promises`
const p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("P1 is resolve");
	},1000)
});
const p2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("P2 is resolve");
	},2000)
})
const p3 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("P3 is resolve");
	},3000)
})

const p4 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject("P4 is resolve");
	},4000)
})

const p5 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("P5 is resolve");
	},5000)
})
Promise.any([p1,p2,p3,p4,p5])
.then((data)=>{
	div.innerHTML = data;
})
.catch((err)=>{
	div.innerHTML= err
})
