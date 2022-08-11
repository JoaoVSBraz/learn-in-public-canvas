function draw() {
    const canvas = document.querySelector('#canvas');

    if(canvas.getContext){
        const ctx = canvas.getContext('2d');

        // Fill context with color
        ctx.fillStyle = 'rgb(200, 0, 0)';

        // Create a square shape
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);

    }else{
        console.log('Your browser does not support Canvas API');
    }
}