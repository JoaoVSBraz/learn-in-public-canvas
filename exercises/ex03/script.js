function draw(){
    const canvas = document.querySelector('#canvas')

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        // Create a square shape
        ctx.fillRect(25, 25, 100, 100);

        // Clear the shape making the area transparent
        ctx.clearRect(45, 45, 60, 60);

        // Create a transparent shape only with border
        ctx.strokeRect(50, 50, 50, 50);
    }else{
        console.log('Your browser does not support Canvas API');
    }
}