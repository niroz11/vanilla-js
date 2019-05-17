class Idea {
	constructor (title,body,quality,id) {
		this.id = id || new Date().getTime(); 
    	this.title = title;
    	this.body = body;
    	this.quality = quality || "swill";
    	this.upvote = 0; 
    	this.downvote = 0;


	}

	saveToStorage = (idea) => {
		localStorage.setItem("ideas",JSON.stringify(idea));
	}

	
}