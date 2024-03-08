const output = document.getElementById("output");

function displayKey(input) {
	const lastChar = output.value.slice(-1);

    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(input)) {
    	output.value = output.value.slice(0, -1) + input; 
    }else{
    	output.value += input; 
    	output.scrollLeft = output.scrollWidth;
	}
}

function compute() {
	try{
		output.value = eval(output.value);
	}
	catch(error){
		output.value = "Syntax ERROR";
	}
}

function reset() {
	output.value = "";
}

function del() {
	output.value = output.value.slice(0, -1);
}