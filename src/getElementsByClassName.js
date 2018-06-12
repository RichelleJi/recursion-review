// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

	var result = [];
	//compare the current node's classname with argument
	function searchnodes(node){
		//if matches put into array
		// var dividedname = node.className.split(' ');
		// if(dividedname.includes(className)){
		if(node.classList.contains(className)){
		// if(node.className === className){
			result.push(node);
		}
		if(node.hasChildNodes()){
		//else{//iterate through each node's tree/children 
			for(var i = 0; i < node.children.length; i ++){
				searchnodes(node.children[i]);
			}
		}
	};

	searchnodes(document.body);
  	return result;

	//input：a string of a class name
	//output: an array of elements with full html forms that matches with className
};


// You should use document.body, element.childNodes, and element.classList