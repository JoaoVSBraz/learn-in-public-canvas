function draw() {
    const canvas = document.getElementById('canvas')

    if(canvas.getContext){
        const canvasContext = canvas.getContext('2d')
    } else {
        console.log('Your browser does not support Canvas API');
    }
    
}